import "./syllabuslisting.css";

export interface ClassListing {
    className: string;
    professor: string;
    fileName: string;
}

function SyllabusListing({className, professor, fileName}: ClassListing) {

    async function handleDownload() {
        const a = document.createElement('a');
        a.href= `https://api.sharesyllabus.me/files/${fileName}`;
        a.download = fileName || 'syllabus.pdf';
        a.click();
        a.remove();
        window.URL.revokeObjectURL(`https://api.sharesyllabus.me/files/${fileName}`);
    }

    return(
        <>
            <div className="w-full flex bg-white text-black rounded-lg p-3">
                <span className=" font-extrabold">{className}</span>
                <span className="flex-1">{professor}</span>
                <button className="border-2 border-blue-600 p-1 rounded-lg" onClick={handleDownload}>download <br></br>pdf 📄</button>
            </div>
        </>
    )
}

export default SyllabusListing;