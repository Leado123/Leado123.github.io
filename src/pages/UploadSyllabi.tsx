import React, { useEffect, useState } from "react";
import server from "../main";
import AsyncSelect from "react-select/async";
import { useNavigate } from "react-router-dom";

export interface Class {
    id: number;
    className: string;
    fullClassName: string;
    disciplineId: string;
}

export interface School {
    id: string;
    name: string;
    fullName: string;
}

export interface Professor {
    id: string;
    name: string;
}

function UploadSyllabi() {
    const [file, setFile] = useState<File | null>(null);
    const [college, setCollege] = useState("");
    const [professor, setProfessor] = useState("");
    const [classLength, setClassLength] = useState(0);
    const [textbookCost, setTextbookCost] = useState("free");
    const [classDescription, setClassDescription] = useState("");
    const [classAbrvQuery, setClassAbrvQuery] = useState("");


    const navigate = useNavigate();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [professorOptions, setProfessorOptions] = useState<Professor[]>([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        setCollege("RCCD");
    }, []);

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    }

    function searchProfessor(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setProfessor(value);
        fetch(`https:/search/professor/?q=${value}&s=${college}`, {
            method: "POST",
        }).then((res) => res.json()).then((data) => {
            setProfessorOptions(data);
        });
    }



    function submit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        if (!file) {
            setError("Please select a file");
            setIsLoading(false);
            return;
        }

        if (!college || !classAbrvQuery || !professor) {
            setError("Please fill in all required fields");
            setIsLoading(false);
            return;
        }


        const formData = new FormData();
        formData.append("upload", file);
        formData.append("className", classAbrvQuery);
        formData.append("schoolName", college);
        formData.append("professor", professor);
        formData.append("classLength", classLength.toString());
        formData.append("textbookCost", textbookCost);
        formData.append("description", classDescription);
        formData.append("createdByName", name);
        formData.append("createdByEmail", email);

        console.log(formData);

        fetch(`https://sharesyllabus.leowen.me/create`, {
            method: "POST",
            body: formData,
        })
            .then(async (res) => {
                if (res.ok) {
                    const responseBody = await res.json();
                    navigate(`/upload_successfull/${responseBody.id}`);
                } else {
                    const data = await res.json();
                    setError(data.msg);
                }
                setIsLoading(false);
            });
    }

    useEffect(() => {
        console.log("college" + college);
        console.log("class" + classAbrvQuery);
        console.log(professor);
        console.log(classLength);
        console.log(textbookCost);
        console.log(classDescription);
        console.log(name);
        console.log(email);
    }, []);

    return (
        <div className="w-full flex place-items-center justify-center p-10 pt-20">
            <div className="w-1/2 text-left flex flex-col">
                <text className="text-3xl font-bold">Upload a Syllabus!</text>
                <text className="italic">If you complete all the information you can receive 2 hrs in community service. Just send us your email so we can give you an E-signature of your hours. If you dont want to do the community service hours, feel free to leave some fields blank.</text>
                <div className="flex flex-col pt-2 gap-2">
                    <text>Syllabus (pdf, docx, etc.)</text>
                    <input type="file" className="w-min rounded-md bg-white text-black" onChange={handleFileChange}></input>
                    <text>Class Name:</text>
                    <AsyncSelect
                        className=" bg-white text-black"
                        placeholder="i.e.: ENG-1A"
                        value={classAbrvQuery ? { label: classAbrvQuery, value: classAbrvQuery } : null}
                        loadOptions={async (inputValue) => {
                            if (!inputValue || !college) return [];
                            const response = await fetch(`${server}/search/class/?q=${inputValue}&s=${college}`, {
                                method: "POST",
                            });
                            const data = await response.json();
                            return data.map((classOption: Class) => ({
                                label: classOption.className,
                                value: classOption.className,
                            }));
                        }}
                        onChange={(selectedOption) => {
                            if (selectedOption) {
                                setClassAbrvQuery(selectedOption.value);
                            }
                        }}
                        isSearchable={true}
                        cacheOptions
                        defaultOptions
                    />

                    <text>Professor:</text>
                    <input placeholder="enter or search professor" className="p-1 rounded-md bg-white border text-black" list="professorOptions" value={professor} disabled={!college} required onChange={searchProfessor}></input>
                    <datalist id="professorOptions">
                        {professorOptions.map((professor, index) => (
                            <option key={index} value={professor.name} />
                        ))}
                    </datalist>
                    <text>Duration of class in weeks. [OPTIONAL: community service hours] <span className="text-orange-700 font-light">For Fall/Spring classes put 16, for winter/summer put 6:</span></text>
                    <input type="number" className="p-1 rounded-md bg-white text-black" value={classLength} onChange={(e) => setClassLength(Number(e.target.value))}></input>
                    <text>Textbook Cost (access codes too). [OPTIONAL: community service hours] <span className="text-orange-700 font-light">Free $0 | Cheap $1-10 | Moderate $10-40 | Expensive $40 </span></text>
                    <select className="p-1 rounded-md bg-white text-black" value={textbookCost} onChange={(e) => { setTextbookCost(e.target.value); console.log(e.target.value) }}>
                        <option>free</option>
                        <option>cheap</option>
                        <option>moderate</option>
                        <option>expensive</option>
                    </select>
                    <text>Class description in at most 2 sentences (NOT a description of the teacher) [OPTIONAL: community service hours]:</text>
                    <textarea className="p-1 rounded-md bg-white text-black" value={classDescription} onChange={(e) => setClassDescription(e.target.value)}></textarea>
                    <text>Your Name [OPTIONAL: community service hours]</text>
                    <input placeholder="John Doe" className="p-1 rounded-md bg-white border text-black" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <text>Your Email [OPTIONAL: community service hours]</text>
                    <input placeholder="example@company.com" className="p-1 rounded-md border bg-white text-black" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <div className="text-right flex  place-items-center gap-2 flex-row">
                        <text className="text-xs pl-40 font-light">if you are at the college success club event, clicking for the first time gives free food & 2 cc hours. if you submit more syllabuses, it will only reward more hours, not food</text>
                        <button
                            className="bg-blue-600 rounded-lg text-white font-bold p-2 disabled:opacity-50"
                            onClick={submit}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Uploading...' : 'Submit'}
                        </button>
                        {error && <div className="text-red-500 mt-2">{error}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadSyllabi;