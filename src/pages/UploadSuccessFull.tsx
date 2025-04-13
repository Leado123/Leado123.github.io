import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClassListing } from "../components/syllabus_comp";
import server from "../main";

function UploadSuccessfull() {
    const { id } = useParams();

    const [classListing, setClassListing] = useState<ClassListing | null>();
    const [dailyFreeFood, setDailyFreeFood] = useState<string | null>("false");

    useEffect(() => {
        fetch(`${server}/syllabus/${id}`)
            .then(response => response.json())
            .then(data => setClassListing(data))
            .then(data => console.log(data))

        const savedValue = localStorage.getItem('dailyFreeFood');
        setDailyFreeFood(savedValue);
        if (!savedValue) {
            localStorage.setItem('dailyFreeFood', "false");
        } 
    }, [id])

    return (
        <div className={`flex flex-col items-center justify-center h-screen ${dailyFreeFood ? "bg-gray-100" : "bg-green-400"}`}>
            <text className="font-black text-yellow-400 text-5xl mb-10">{(dailyFreeFood == "false") ? "community service hours will be sent digitally" : "CLAIM FREE FOOD"}</text>
            <h1 className="text-2xl font-bold mb-4">Upload Successful</h1>
            <p className="text-lg">Your file has been uploaded successfully!</p>
            <p>{JSON.stringify(classListing)}</p>
        </div>
    );
}

export default UploadSuccessfull;