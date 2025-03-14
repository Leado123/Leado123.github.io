import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClassListing } from "../components/syllabus_comp";
import FileView from "../components/FileView";

import server from '../main'



function Syllabus() {
    const { id } = useParams();


    const [syllabus, getSyllabus] = useState<ClassListing | undefined>(undefined);

    useEffect(() => {
        fetch(`${server}/syllabus/${id}`)
            .then(response => response.json())
            .then(data => getSyllabus(data))
            .then(data => console.log(data))
    }, [id]);

    return (
        <div className="p-16 h-full text-left w-full justify-center flex">
            <div className="text-left place-items-center justify-center flex w-3/4">
                <div className="w-2/5 h-full flex flex-col">
                    <div className="flex flex-col">
                        <text className="text-3xl text-red-400 font-[Parkinsans] font-black">{syllabus?.className}</text>
                        <text className="">{syllabus?.fullClassName}</text>
                        <text className="italic underline">{syllabus?.professor}</text>
                    </div>
                    <text className="italic font-light pt-6 font-serif">"{syllabus?.description}"</text>
                    <text className="text-blue-600">{syllabus?.classLength} week class</text>
                    <text className="font-bold text-lime-500">{syllabus?.textbookCost} textbook cost</text>
                    {syllabus ? <FileView className="flex-1" passedFile={syllabus?.fileName}></FileView> : <div></div>}
                </div>
                <div className="relative flex-1 h-full">
                    <div className="relative z-10 flex-1 h-full">
                        <text>quick overview feature added soon</text>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Syllabus;