import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import type { Class, School } from "./types";

import AsyncSelect from "react-select/async";
import server from "./main";
import { useNavigate } from "react-router-dom";
import isMobile from "is-mobile";
import { setInitialQuery } from "./App";
import SyllabusListing, { ClassListing } from "./components/syllabus_comp";
// Removed initialQuery import as it cannot be reassigned

export interface AmbiguousClass extends Class {
    school: School;
}


function Welcome() {
    const navigate = useNavigate();

    // State for tracking user selections

    const [shouldNavigate, setShouldNavigate] = useState(false);
    const [selectedOption, setSelectedOption] = useState<ClassListing | string>("");

    const [query] = useState<string>("");

    const [syllabi, setSyllabi] = useState<ClassListing[]>([]);

    // Fetch syllabi for an empty search
    useEffect(() => {
        const fetchSyllabi = async () => {
            try {
                const response = await fetch(`${server}/search/?q=`, {
                    method: "GET",
                });
                const data = await response.json();
                setSyllabi(data);
            } catch (error) {
                console.error("Failed to fetch syllabi:", error);
            }
        };

        fetchSyllabi();
    }, []);



    

    // Navigation logic in useEffect to ensure we have the latest state
    useEffect(() => {
        if (!shouldNavigate) return;

        // Start with the base path
        let path = "/app";

        // Add college parameter (if present)

        setInitialQuery(query);
        navigate(path);

        // Reset the navigation flag
        setShouldNavigate(false);
    }, [shouldNavigate, navigate]);



    return (
        <div className={`w-full flex-1 text-left h-full bg-[#fafdfb] bg-no-repeat bg-center gap-2 text-[#051008] place-items-center ${!isMobile() ? " bg-[url(/logo_big.png)] pt-32" : "p-16"} flex flex-col`}>

            {!isMobile() &&
                <div className="flex flex-col place-items-center z-50 gap-2">
                    <div className="w-2/3 p-2 bg-[rgba(0,0,0,0.75)] shadow-md gap-2 flex flex-col place-items-center backdrop-blur-md rounded-md border border-gray-400 bg-origin-content">
                    <h1 className=" text-5xl font-black text-white">📚 Enter your <span className=" bg-clip-text font-black text-transparent bg-gradient-to-tl from-yellow-400 to-orange-200"> School District, Course Name, or Professor's Name, </span> to begin!</h1>

                    <AsyncSelect
                        value={selectedOption}
                        className="w-full text-md bg-[#fafdfb] border rounded-lg border-gray-400"
                        placeholder="Search for school, course, or professor"
                        loadOptions={async (inputValue) => {
                            if (!inputValue) return [];

                            try {
                                const response = await fetch(`${server}/search/?q=${inputValue}`, {
                                    method: "GET",
                                });
                                const data = await response.json();

                                // Map the fetched data into options
                                const options = data.map((item: ClassListing) => ({
                                    label: `${item.class?.className || "Unknown Class"} - ${item.professor || "Unknown Professor"}`,
                                    value: item,
                                }));

                                // Prepend a custom option based on the input value
                                const customOption = {
                                    label: `Search for "${inputValue}"`,
                                    value: { customSearch: inputValue },
                                };

                                return [customOption, ...options]; // Prepend the custom option
                            } catch (error) {
                                console.error("Failed to fetch options:", error);
                                return [];
                            }
                        }}
                        onChange={(option: any) => {
                            if (option) {
                                console.log("Option selected:", option);

                                // Handle the custom prepended option differently if needed
                                if (option.value.customSearch) {
                                    console.log(`Custom search triggered for: ${option.value.customSearch}`);
                                    setInitialQuery(option.value.customSearch)
                                    navigate(`/app/`);
                                    return;
                                }

                                setSelectedOption(option); // Update the selected option state
                                let path = "/app";
                                setInitialQuery(option.label);
                                navigate(path); // Redirect to the desired path
                            }
                        }}
                        isSearchable={true}
                        cacheOptions
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                border: 'none',
                                boxShadow: 'none',
                                backgroundColor: '#fafdfb',
                                borderRadius: '8px',
                            }),
                            input: (provided) => ({
                                ...provided,
                                boxShadow: 'none',
                            }),
                            placeholder: (provided) => ({
                                ...provided,
                                color: '#888',
                            }),
                            menu: (provided) => ({
                                ...provided,
                                zIndex: 99999,
                                pointerEvents: "all"
                            }),
                            menuPortal: (provided) => ({
                                ...provided,
                                zIndex: 99999,
                                pointerEvents: "all"
                            }),
                        }}
                    />
                    </div>
                </div>
            }
            {isMobile() &&
                <div className="text-center  z-10 flex place-items-center flex-col gap-4 pt-4">
                    <img className="w-1/2 text-center" src="https://akns-images.eonline.com/eol_images/Entire_Site/201363/rs_600x600-130703124143-600.Gru.mh.070313.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top"></img>
                    <h1 className="font-sans font-black text-2xl text-blue-600">Search Syllabuses in Your School!</h1>

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
                </div>

            }


            {!isMobile() ? <Marquee speed={10} gradient={true} className="w-full relative flex-1 gap-2">
                {syllabi.map((syllabus) => (
                    <div className="mx-1">
                        <SyllabusListing
                            key={syllabus.id || syllabus.fileName}
                            className={syllabus.class?.className}
                            school={syllabus.school}
                            professor={syllabus.professor}
                            professorId={syllabus.professorId}
                            fileName={syllabus.fileName}
                            description={syllabus.description}
                            classLength={syllabus.classLength}
                            fullClassName={syllabus.class?.fullClassName}
                            textbookCost={syllabus.textbookCost}
                        />
                    </div>
                ))}
            </Marquee> : <div className="h-1/3"></div>}


            <div className="text-center ">

                <text className="text-xl ">Made By <span className=" font-bold rounded text-[#47c068]">the College Success Club of JFKMCHS</span>. Gain up to 2 hrs of community service hours by contributing syllabuses into our index. Visit our blog for free resources for college students. &nbsp;</text>

            </div>

        </div>
    )
}

export default Welcome;