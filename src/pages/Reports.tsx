import mime from "mime-types";
import { useEffect, useState } from "react";
import { ClassListing } from "../components/syllabus_comp";
import server from "../main";

export interface SyllabusReport {
    id: string;
    reportTitle: string;
    reportBody: string;
    reportBy: string;
    reportDate: string;
    syllabusId: string;
}

function Reports() {

    const [username, setUsername] = useState("");
    const [reports, setReports] = useState<SyllabusReport[]>([]);

    function obtainReports() {
        fetch(`${server}/admin/getreports`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
        })
            .then((res) => res.json())
            .then((data) => {
                setReports(data);
            })
            .catch((e) => {
                console.error(e);
            });
    }

    const [currentReport, setCurrentReport] = useState<SyllabusReport | null>(null);
    const [currentSyllabus, setCurrentSyllabus] = useState<ClassListing | null>(null);
    const [currentFileName, setCurrentFileName] = useState("");

    useEffect(() => {
        if (currentSyllabus == null || currentSyllabus?.mimeType == null) return;
        setCurrentFileName(`${currentSyllabus?.id}.${mime.extension(currentSyllabus.mimeType)}`)
    }, [currentSyllabus])

    function viewReport(sId: string, report: SyllabusReport) {
        setCurrentReport(report);
        fetch(`${server}/admin/getsyllabus/${sId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
        })
            .then((res) => res.json())
            .then((data) => {
                setCurrentSyllabus(data);
            })
            .catch((e) => {
                console.error(e);
            });
    }


    async function previewSyllabus() {
        const url = `#/view/${encodeURIComponent(currentFileName)}`;
        window.open(url, '_blank');
    }

    async function editSyllabusEntry() {
        const url = `#/admin/${currentSyllabus?.id}`;
        window.open(url, '_blank');
    }


    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen p-4">
            <div className="text-black mb-4 w-full flex">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            obtainReports()
                        }
                    }}
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={obtainReports}
                    className="ml-2 p-2 bg-blue-500 text-white rounded"
                >
                    Obtain Reports
                </button>
                <div className="flex-1 flex items-center justify-end">
                    <span className="text-white">

                    </span>
                </div>
            </div>
            <div className="flex-1 w-full h-full">
                <div className=" w-full h-full grid grid-cols-4 gap-4">
                    {reports.map((report, i) => <ReportComponent report={report} viewReport={viewReport} key={i} />)}
                </div>
            </div>
            <div className="w-full bg-zinc-950 grid grid-cols-2 p-4 rounded-md">
                <div className="flex flex-col gap-2 text-left">
                    <text className="font-bold">
                        {currentReport?.reportTitle}
                    </text>
                    <text>
                        {currentReport?.reportBody}
                    </text>
                </div>
                <div className="bg-white p-4 rounded-md text-black flex">
                    <div className="flex flex-1 flex-col text-left">
                        <text className="font-bold">
                            {currentSyllabus?.className}
                        </text>
                        <text>
                            {currentSyllabus?.professor}
                        </text>
                        <text>
                            {currentSyllabus?.description}{currentSyllabus?.fileName}
                        </text>
                        <text>
                            classLength: {currentSyllabus?.classLength} wk
                        </text>
                    </div>
                    <div className="flex-col flex gap-2">
                        <button className="aspect-square bg-blue-600 p-2 rounded-md text-yellow-300" onClick={previewSyllabus}><span className="material-symbols-rounded">open_in_new</span></button>
                        <button className="flex-1 bg-yellow-300 p-2 rounded-md flex items-center" onClick={editSyllabusEntry}><span className="material-symbols-rounded">edit</span></button>
                    </div>
                </div>
            </div>


        </div >
    )
}

interface ReportComponentProps {
    report: SyllabusReport;
    viewReport: (sId: string, report: SyllabusReport) => void;
}

function ReportComponent({ report, viewReport }: ReportComponentProps) {
    const date = new Date(report.reportDate).toLocaleDateString("en-US");

    const view = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        e.stopPropagation();
        viewReport(report.syllabusId, report);
    }

    return (
        <div className="bg-white text-black p-2 rounded-md text-left flex flex-col hover:bg-gray-200" onClick={view}>
            <div className="flex items-center space-x-2">
                <text className="font-bold text-lg">{report.reportTitle}</text>
                <text className="font-light text-md text-gray-500 flex-1">{date}</text>
                <button className="shadow-lg rounded-md aspect-square text-white bg-black p-1 items-center flex hover:bg-red-600"><span className="material-symbols-rounded text-md">delete</span></button>
            </div>
            <text>{report.reportBody}</text>
            <text className="text-xs font-light">{report.reportBy}</text>
        </div>
    )
}

export default Reports;