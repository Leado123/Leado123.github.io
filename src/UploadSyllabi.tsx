import React, { useEffect, useState } from "react";


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
    const [classAbrvOptions, setClassAbrvOptions] = useState<Class[] | null>(null);
    const [classAbrvQuery, setClassAbrvQuery] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [collegeOptions, setCollegeOptions] = useState<School[]>([]);
    const [professorOptions, setProfessorOptions] = useState<Professor[]>([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://api.sharesyllabus.me/schools", {
            method: "GET",
        }).then((res) => res.json()).then((data) => {
            setCollegeOptions(data);
        });
    }, []);

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    }

    function searchProfessor(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setProfessor(value);
        fetch(`https://api.sharesyllabus.me/search/professor/?q=${value}&s=${college}`, {
            method: "POST",
        }).then((res) => res.json()).then((data) => {
            setProfessorOptions(data);
        }
        )
    }

    function searchClassAbrv(e: React.ChangeEvent<HTMLInputElement>) {
        setClassAbrvQuery(e.target.value);


        fetch(`https://api.sharesyllabus.me/search/class/?q=${classAbrvQuery}&s=${college}`, {
            method: "POST",
        }).then((res) => res.json()).then((data) => {
            setClassAbrvOptions(data);
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

        console.log(formData)

        fetch("https://api.sharesyllabus.me/create", {
            method: "POST",
            body: formData,
        })
        .then(async (res) => {
            if (res.ok) {
                alert("Syllabus uploaded successfully");
            } else {
                const data = await res.json();
                setError(data.msg);
            }
            setIsLoading(false);
        })
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
    }, [])

    return (
        <div className="w-full flex place-items-center justify-center p-10">

            <div className="w-1/2 text-left flex flex-col">
                <text className="text-3xl font-bold">Upload a Syllabus!</text>
                <text className="italic">If you complete all the information you can receive 2 hrs in community service. Just send us your email so we can give you an E-signature of your hours. If you dont want to do the community service hours, feel free to leave some fields blank.</text>
                <div className="flex flex-col pt-2 gap-2">
                    <text>Syllabus (pdf, docx, etc.)</text>
                    <input type="file" className="bg-zinc-800 w-min rounded-md" onChange={handleFileChange}></input>
                    <text>College District (not school!):</text>
                    <input
                        list="collegeOptions"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                        placeholder="Search or select college district"
                        required
                        className="p-1 rounded-md"
                    />
                    <datalist id="collegeOptions">
                        {collegeOptions.map((college: School, index: number) => (
                            <option key={index} value={college.name} />
                        ))}
                    </datalist>
                    <text>Class Name:</text>
                    <input list="classAbrvOptions" className="p-1 rounded-md" placeholder="i.e.: ENG-1A" value={classAbrvQuery} disabled={!college} onChange={(e) => searchClassAbrv(e)} required onInput={(e) => setClassAbrvQuery(e.currentTarget.value)} />
                    <datalist id="classAbrvOptions" className="w-full bg-white">
                        {classAbrvOptions?.map((classOption, index) => (
                            <option key={index} value={classOption.className} />
                        ))}
                    </datalist>
                    <text>Professor:</text>
                    <input placeholder="enter or search professor" className="p-1 rounded-md" list="professorOptions" value={professor} disabled={!college} required onChange={searchProfessor}></input>
                    <datalist id="professorOptions">
                        {professorOptions.map((professor, index) => (
                            <option key={index} value={professor.name} />
                        ))}
                    </datalist>
                    <text>Duration of class in weeks: [OPTIONAL: community service hours]</text>
                    <input type="number" className="bg-zinc-800 p-1 rounded-md" value={classLength} onChange={(e) => setClassLength(Number(e.target.value))}></input>
                    <text>Textbook Cost: [OPTIONAL: community service hours]</text>
                    <select className="bg-zinc-800 p-1 rounded-md" value={textbookCost} onChange={(e) => {setTextbookCost(e.target.value); console.log(e.target.value)}}>
                        <option>free</option>
                        <option>cheap</option>
                        <option>moderate</option>
                        <option>expensive</option>
                    </select>
                    <text>Class description in at most 2 sentences (NOT a description of the teacher) [OPTIONAL: community service hours]:</text>
                    <textarea className="bg-zinc-800 p-1 rounded-md" value={classDescription} onChange={(e) => setClassDescription(e.target.value)}></textarea>
                    <text>Your Name [OPTIONAL: community service hours]</text>
                    <input placeholder="John Doe" className="bg-zinc-800 p-1 rounded-md" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <text>Your Email [OPTIONAL: community service hours]</text>
                    <input placeholder="example@company.com" className="bg-zinc-800 p-1 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <div className="text-right">
                        <button 
                            className="bg-blue-600 rounded-lg p-2 disabled:opacity-50" 
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