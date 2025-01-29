import { useNavigate, useParams } from "react-router-dom";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

function findIfMobile() {
    //return true;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function View() {

    const isMobile = findIfMobile();

    const { file } = useParams();
    const docs = [
        { uri: `https://api.sharesyllabus.me/files/${file}` }
    ]

    const navigate = useNavigate();

    console.log(docs[0].uri);

    return (
        <div className="flex flex-col space-y-2 justify-center align-middle w-full h-full m-0 p-4">
            <nav className="w-full flex text-left pb-1 space-x-4">
                <button onClick={() => navigate("/")} className="p-2 bg-white rounded-xl text-black aspect-square">
                    <i className="material-symbols-rounded">arrow_back</i>
                </button>

                <div className="flex  space-x-1 h-full items-center p-2 bg-blue-700 text-white rounded-xl">
                    <button onClick={() => window.location.replace(docs[0].uri)} className=" aspect-square">
                        <i className="material-symbols-rounded">download</i>
                    </button>
                    <text className=" font-medium pr-1">download</text>
                </div>

                <button onClick={() => {
                    navigator.clipboard.writeText(docs[0].uri);
                    alert("Link Copied to Clipboard!");
                }} className="p-2 bg-white rounded-xl text-black aspect-square">
                    <i className="material-symbols-rounded">share</i>
                </button>

                {isMobile ? <></> : <div className="h-full flex items-center justify-start align-middle">
                    <text className="text-xl text-left font-bold">Preview & Or Download</text>
                </div>}
            </nav>
            <DocViewer className="flex-1 w-full rounded-xl" pluginRenderers={DocViewerRenderers} documents={docs}></DocViewer>
        </div>
    );
}

export default View;