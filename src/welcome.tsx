import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import type { Class, Professor, School } from "./types";

import Select from "react-select";
import AsyncSelect from "react-select/async";
import server from "./main";
import { useNavigate } from "react-router-dom";
import isMobile from "is-mobile";

export interface AmbiguousClass extends Class {
    school: School;
}

function Welcome() {
    const navigate = useNavigate();

    // State for tracking user selections
    const [selectedCollege, setSelectedCollege] = useState<string>("");
    const [selectedClass, setSelectedClass] = useState<string>("");
    const [selectedProfessor, setSelectedProfessor] = useState<string>("");
    const [shouldNavigate, setShouldNavigate] = useState(false);

    const [collegeOptions, setCollegeOptions] = React.useState<School[]>([]);
    const [defaultClassOptions, setDefaultClassOptions] = useState<AmbiguousClass[]>([]);
    const [defaultProfessorOptions, setDefaultProfessorOptions] = useState<Professor[]>([]);

    useEffect(() => {
        fetch(`${server}/schools`, {
            method: "GET",
        }).then((res) => res.json()).then((data) => {
            setCollegeOptions(data);
            console.log('data', data);
        });
    }, []);

    useEffect(() => {
        const loadDefaultOptions = async () => {
            const classResponses = await Promise.all(
                collegeOptions.map(async (college) => {
                    const res = await fetch(`https://api.sharesyllabus.me/search/class/&q=A&s=${college.name}`, {
                        method: "POST",
                    });
                    const data = await res.json();
                    return data.map((item: AmbiguousClass) => ({
                        ...item,
                        school: college,
                    }));
                })
            );
            setDefaultClassOptions(classResponses.flat());

            const professorResponses = await Promise.all(
                collegeOptions.map(async (college) => {
                    const res = await fetch(`${server}/search/professor/&s=${college.name}`, {
                        method: "POST",
                    });
                    const data = await res.json();
                    return data;
                })
            );
            setDefaultProfessorOptions(professorResponses.flat());
        };

        if (collegeOptions.length > 0) {
            loadDefaultOptions();
        }
    }, [collegeOptions]);

    // Navigation logic in useEffect to ensure we have the latest state
    useEffect(() => {
        if (!shouldNavigate) return;

        // Start with the base path
        let path = "/app";

        // Add college parameter (if present)
        if (selectedCollege) {
            path += `/${encodeURIComponent(selectedCollege)}`;
        } else if (selectedProfessor || selectedClass) {
            // Need placeholder if we have later params but no college
            path += "/_";
        }

        // Add professor parameter (if present)
        if (selectedProfessor) {
            path += `/${encodeURIComponent(selectedProfessor)}`;
        } else if (selectedClass && (selectedCollege || path.includes("/_"))) {
            // Need placeholder if we have class but no professor
            path += "/_";
        }

        // Add class parameter (if present)
        if (selectedClass) {
            path += `/${encodeURIComponent(selectedClass)}`;
        }

        console.log("Navigating to:", path);
        navigate(path);

        // Reset the navigation flag
        setShouldNavigate(false);
    }, [selectedCollege, selectedProfessor, selectedClass, shouldNavigate, navigate]);

    return (
        <div className={`w-full text-left h-full bg-[#fafdfb] gap-2 text-[#051008] place-items-center ${!isMobile() ? "p-32" : "p-4"} flex flex-col`}>

            {!isMobile() &&
                <div>
                    <h1 className="font-[Parkinsans] text-5xl w-2/3 font-extrabold">📚 Enter your <span className="text-[#47c068]"> School District, Course Name, or Professor's Name, </span> to begin!</h1>

                    <Select
                        className="p-1 text-lg bg-[#fafdfb]  w-2/3 rounded-md border-gray-300"
                        placeholder="School District: i.e. RCCD, Chaffey, SBVC, etc."
                        options={collegeOptions}
                        getOptionLabel={(option: School) => option.name}
                        getOptionValue={(option: School) => option.name}
                        onChange={(selectedOption: School | null) => {
                            if (selectedOption) {
                                setSelectedCollege(selectedOption.name);
                                setShouldNavigate(true);
                            }
                        }}
                        isSearchable={true}
                    />

                    <AsyncSelect
                        className="p-1 text-lg bg-[#fafdfb]  w-2/3 rounded-md border-gray-300"
                        placeholder="Course Name: ENG-1A, General Psych, etc."
                        loadOptions={async (inputValue) => {
                            if (!inputValue) {
                                inputValue = "A";
                                console.log('inputValue', inputValue);
                            }
                            const responses = await Promise.all(
                                collegeOptions.map(async (college) => {
                                    const res = await fetch(`${server}/search/class/?q=${inputValue}&s=${college.name}`, {
                                        method: "POST",
                                    });
                                    const data = await res.json();
                                    return data.map((item: AmbiguousClass) => ({
                                        ...item,
                                        school: college,
                                    }));
                                })
                            );
                            return responses.flat();
                        }}
                        defaultOptions={defaultClassOptions}
                        formatOptionLabel={(option: AmbiguousClass) => (
                            <div>
                                <div>{option.className}</div>
                                <div style={{ fontSize: '0.8em', color: '#888' }}>{option.school.name}</div>
                            </div>
                        )}
                        getOptionValue={(option: AmbiguousClass) => option.className}
                        onChange={(selectedOption: AmbiguousClass | null) => {
                            if (selectedOption) {
                                setSelectedClass(selectedOption.className);
                                setShouldNavigate(true);
                            }
                        }}
                        isSearchable={true}
                        cacheOptions

                    />

                    <AsyncSelect
                        className="p-1 text-lg bg-[#fafdfb]  w-2/3 rounded-md border-gray-300"
                        placeholder="Professor Name: John Doe, Jane Smith, etc."
                        loadOptions={async (inputValue) => {
                            const responses = await Promise.all(
                                collegeOptions.map(async (college) => {
                                    const res = await fetch(`${server}/search/professor/?q=${inputValue}&s=${college.name}`, {
                                        method: "POST",
                                    });
                                    const data = await res.json();
                                    return data;
                                })
                            );
                            return responses.flat();
                        }}
                        defaultOptions={defaultProfessorOptions}
                        getOptionLabel={(option: Professor) => option.name}
                        getOptionValue={(option: Professor) => option.name}
                        onChange={(selectedOption: Professor | null) => {
                            if (selectedOption) {
                                setSelectedProfessor(selectedOption.name);
                                setShouldNavigate(true);
                            }
                        }}
                        isSearchable={true}
                        cacheOptions

                    />
                </div>
            }
            {isMobile() && 
                <div className="text-center flex place-items-center flex-col gap-4 pt-4">
                    <img className="w-1/2 text-center" src="https://akns-images.eonline.com/eol_images/Entire_Site/201363/rs_600x600-130703124143-600.Gru.mh.070313.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top"></img>
                    <h1 className="font-sans font-black text-2xl text-blue-600">Search Syllabuses in Your School!</h1>
                </div>
            }

            {/* Search button as fallback */}
            <div className="flex flex-col text-center gap-2">
                {!isMobile() && <text className="relative">or </text>}
                <button
                    className="p-2 px-4 bg-black text-white rounded-xl drop-shadow-md hover:drop-shadow-xl cursor-pointer transition-colors"
                    onClick={() => setShouldNavigate(true)}
                >
                    Just Open the Search 🚀
                </button>
            </div>

            {!isMobile() ? <div className="flex-1"></div> : <div className="h-1/3"></div>}
            <div className="relative w-full overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#fafdfb] to-transparent z-10"></div>
                <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#fafdfb] to-transparent z-10"></div>
                <Marquee speed={10} gradient={false}>
                    <text className="text-xl font-[Parkinsans]">Made By <span className=" font-bold rounded text-[#47c068]">the College Success Club of JFKMCHS</span>. Gain up to 2 hrs of community service hours by contributing syllabuses into our index. Visit our blog for free resources for college students. &nbsp;</text>
                </Marquee>
            </div>
        </div>
    )
}

export default Welcome;