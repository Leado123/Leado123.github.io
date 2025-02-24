import {  useParams } from "react-router-dom";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import {PDFViewer} from 'srpv-js'
import { isMobile } from 'is-mobile';



interface ViewParams {
    passedFile?: string;
    className?: string;
}

function View({passedFile, className}: ViewParams) {
    


    function checkIfPdf(file: string) {
        return file.endsWith(".pdf");
    }


    let { file } = useParams();

    if (file === undefined) {
        file = passedFile;
    }

    // TODO: make it work on mobile (pdf viewer doesen't work)

    const isPDF = checkIfPdf(file || "");

    const docs = [
        { uri: `https://api.sharesyllabus.me/files/${file}` }
    ]




    console.log(docs[0].uri);

    return (
        <div className={`flex flex-col space-y-2 justify-center align-middle flex-1 w-full h-full m-0 ${className}`}>
            <nav className="w-full flex text-right place-items-end pb-1 space-x-4">

                <div className="flex-1"></div>
                <div className="flex space-x-1 items-center p-2 bg-blue-700 text-white rounded-xl">
                    <button onClick={() => window.location.replace(docs[0].uri)} className=" aspect-square">
                        <i className="material-symbols-rounded">download</i>
                    </button>
                    <text className=" font-medium pr-1">download</text>
                </div>

            </nav>
            {isMobile() === false && 
            <>
            {isPDF 
            ? <iframe className="flex-1 w-full rounded-xl" src={`https://api.sharesyllabus.me/files/${file}`} />
            : <DocViewer className="flex-1 w-full rounded-xl" pluginRenderers={DocViewerRenderers} documents={docs}></DocViewer>}
            </>
            
            }
            {isMobile() === true && 
            <>
            {isPDF 
                ? <div className="flex-1 w-full rounded-xl"><PDFViewer link={`https://api.sharesyllabus.me/files/${file}`}></PDFViewer></div>
                : <DocViewer className="flex-1 w-full rounded-xl" pluginRenderers={DocViewerRenderers} documents={docs}></DocViewer>}
            </>
                }

        </div>
    );
}

export default View;