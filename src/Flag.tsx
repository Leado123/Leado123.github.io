import { useState } from "react";
import { useParams } from "react-router-dom";

function Flag() {

    const params = useParams();
    const syllabusId = params.id;
    
    const [reportTitle, setReportTitle] = useState("");
    const [reportBody, setReportBody] = useState("");
    const [reportBy, setReportBy] = useState("");

    function submitReport() {
        fetch(`https://api.sharesyllabus.me/report/${syllabusId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                reportType: "syllabus",
                reportTitle,
                reportBody,
                reportBy,
                syllabusId
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.msg) {
                alert(data.msg);
            } else {
                alert("Report submitted successfully");
            }
        })
        .catch((e) => {
            console.error(e);
            alert("An error occurred while submitting the report");
        });
    }

    return (
        <div className="w-full h-full p-8 ">
            <div className="w-full h-full space-y-6 bg-zinc-950 shadow-lg flex flex-col shadow-black p-8 rounded-lg">
                <nav>
                    <text className="text-4xl font-semibold flex items-center justify-center align-middle">🚩 File a report on a Syllabus</text>
                    <text className="text-gray-400 text-xs">syllabus: {syllabusId}</text>
                </nav>

                <div className="space-y-6 flex-1 flex flex-col text-left">
                    <div className="flex justify-center items-center">
                        <text className="flex-1">Title of Report:</text>
                        <button onClick={submitReport} className="justify-center rounded-md p-2 flex font-bold bg-blue-700">Submit Report<span className="material-symbols-rounded pl-2">mail</span></button>
                    </div>
                    <input className="w-full p-2 rounded-lg" value={reportTitle} placeholder="Enter the title of your report" onChange={(e) => {setReportTitle(e.target.value)}}></input>
                    <text className="pt-1 pb-1">Email (OPTIONAL: to get in touch):</text>
                    <input className="w-full p-2 rounded-lg" value={reportBy} placeholder="example@company.com" onChange={(e) => setReportBy(e.target.value)}></input>
                    <text className="pt-1 pb-1">Details:</text>
                    <textarea className="w-full p-2 flex-1 rounded-lg text-black" value={reportBody} placeholder="What is wrong with this syllabus?: incorrect class for syllabus, bad description...." onChange={(e) => setReportBody(e.target.value)}></textarea>
                </div>
            </div>
        </div>
    )
}

export default Flag;