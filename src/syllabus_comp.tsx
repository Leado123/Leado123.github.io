import "./syllabuslisting.css";
import "./App.tsx";

import { useNavigate } from "react-router-dom";

export interface ClassListing {
    className: string;
    professor: string;
    fileName: string;
    description: string;
    classLength: number;
    reviewed?: boolean;
    createdByName?: string;
    createdByEmail?: string;
    id?: string;
}
function findIfMobile() {
    //return true;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function SyllabusListing({ className, professor, fileName, description, classLength }: ClassListing) {

    const navigate = useNavigate();

    async function handleView() {
        navigate(`/view/${encodeURIComponent(`${fileName}`)}`);
    }


    if (!findIfMobile()) {

        return (
            <>
                <div className="w-full flex space-x-4 bg-white text-black rounded-lg p-3">
                    <div className="flex text-left flex-col w-1/4">
                        <span className="font-extrabold">{className}</span>
                        <span className="flex-1 italic">{professor}</span>
                        {classLength > 7 ? <span className="text-xs font-light text-green-600">{classLength} weeks course (normal)</span> : <span className="text-xs font-light text-red-600">{classLength} weeks course</span>}
                    </div>
                    <div className="flex-1 flex flex-col text-center">
                        <span className="w-3/4 font-serif">"{description}"</span>
                    </div>
                    <button className="aspect-square flex items-center align-middle justify-center rounded-lg hover:bg-slate-200 text-black" onClick={handleView}><span className="material-symbols-rounded text-2xl">open_in_new</span></button>
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
                        {classLength > 7 ? <span className="text-xs font-light text-green-600">{classLength} weeks course (normal)</span> : <span className="text-xs font-light text-red-600">{classLength} weeks course</span>}
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