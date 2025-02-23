import "./syllabuslisting.css";
import "./App.tsx";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export enum TextbookCost {
    free,
    cheap,
    moderate,
    expensive
}

// TODO: implement fullClassName and textbook cost in mobile

export interface ClassListing {
    className?: string;
    professor: string;
    fileName: string;
    description: string;
    classLength: number;
    reviewed?: boolean;
    createdByName?: string;
    createdByEmail?: string;
    mimeType?: string;
    textbookCost?: string;
    fullClassName?: string; 
    class?: {
        className?: string;
        fullClassName?: string;
        discipline?: string;
    }
    professorId?: string;
    id?: string;
}
function findIfMobile() {
    //return true;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function SyllabusListing({ className, professor, fileName, description, classLength, fullClassName, textbookCost }: ClassListing) {

    const [hideMore, setHideMore] = useState(true);

    const buttonRef = useRef<HTMLButtonElement>(null);

    const id = fileName.split(".")[0];

    const handleClickOutside = (event: MouseEvent) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
          setHideMore(true);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    const navigate = useNavigate();

    async function handleView() {
        if (findIfMobile()) {
            navigate(`/view/${encodeURIComponent(`${fileName}`)}`);
        } else {
            navigate(`/syllabus/${encodeURIComponent(`${id}`)}`);
        }
    }

    async function handleFlag() {
        navigate(`/flag/${encodeURIComponent(`${id}`)}`);
    }

    const textbookCostElement = () => {
        if (textbookCost === "free") {
            return <span className="text-xs text-green-500 font-bold">🤑 Free</span>;
        } else if (textbookCost === "cheap") {
            return <span className="text-xs text-yellow-400 font-bold">💸 Cheap</span>;
        } else if (textbookCost === "moderate") {
            return <span className="text-xs text-orange-600 font-bold">💵 Moderate</span>;
        } else {
            return <span className="text-xs text-red-600 font-bold">💰 Expensive</span>;
        }
    }


    if (!findIfMobile()) {

        return (
            <>
                <div className="w-full border-zinc-800 border hover:bg-zinc-900 flex space-x-4 cursor-pointer text-white rounded-lg p-3" onClick={handleView} >
                    <div className="flex text-left flex-col w-1/4">
                        <span className="font-extrabold">{className}</span>
                        <span className="text-xs text-gray-300">{fullClassName}</span>
                        {textbookCostElement()}
                        <span className="flex-1 italic">{professor}</span>
                        {classLength > 7 ? <span className="text-xs font-light text-green-600">{classLength} weeks course</span> : <span className="text-xs font-light text-red-600">{classLength} weeks course</span>}
                    </div>
                    <div className="flex-1 flex flex-col text-center">
                        <span className="w-3/4 font-serif">"{description}"</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="flex-1"></span>
                        <button className="aspect-square flex items-center align-middle justify-center  hover:bg-slate-200 rounded-sm text-white" onClick={() => setHideMore(!hideMore)}>
                            <span className="material-symbols-rounded text-2xl">more_horiz</span>
                            <div className="relative" hidden={hideMore}>
                                <button ref={buttonRef} onClick={handleFlag} className="absolute border-black border-2 -left-14 top-2 drop-shadow-lg bg-white rounded-lg aspect-square p-4">
                                    <span className="material-symbols-rounded text-red-600 text-2xl">flag</span>
                                </button>
                            </div>

                        </button>
                    </div>

                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="w-full flex flex-row text-left bg-white text-black rounded-lg p-3">
                    <div className="flex-1 flex flex-col">
                        <span className=" font-extrabold">{className}</span>
                        <span className="flex-1 italic">{professor}</span>
                        <span className="w-4/5 font-serif">"{description}"</span>
                        {classLength > 7 ? <span className="text-xs font-light text-green-600">{classLength} weeks course</span> : <span className="text-xs font-light text-red-600">{classLength} weeks course</span>}
                    </div>
                    <button className="flex items-center h-full p-2 rounded-lg bg-slate-200 text-black" onClick={handleView}>
                        <span className="material-symbols-rounded text-2xl">open_in_new</span>
                    </button>
                </div>
            </>
        )
    }
}

export default SyllabusListing;