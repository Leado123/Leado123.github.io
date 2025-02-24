import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClassListing } from "./syllabus_comp";
import View from "./View";


function Syllabus() {

    const { id } = useParams();

    const [syllabus, getSyllabus] = useState<ClassListing | undefined>(undefined);

    useEffect(() => {
        fetch(`https://api.sharesyllabus.me/syllabus/${id}`)
            .then(response => response.json())
            .then(data => getSyllabus(data))
    }, [id])

    return (
        <div className="p-16 h-full text-left w-full justify-center flex">
            <div className="text-left place-items-center justify-center flex w-full">
                <div className="w-1/4 h-full flex flex-col">
                    <div className="flex flex-col">
                        <text className="text-3xl text-yellow-300 font-black">{syllabus?.className}</text>
                        <text className="">{syllabus?.fullClassName}</text>
                        <text className="italic underline">{syllabus?.professor}</text>
                    </div>
                    <text className="italic font-light pt-6 font-serif">"{syllabus?.description}"</text>
                    <text className="text-blue-600">{syllabus?.classLength} weeked class</text>
                    <text className="font-bold text-lime-500">{syllabus?.textbookCost} textbook cost</text>

                </div>
                {syllabus ? <View className="flex-1" passedFile={syllabus?.fileName}></View> : <div></div>}
            </div>
        </div>
    )
}

export default Syllabus;