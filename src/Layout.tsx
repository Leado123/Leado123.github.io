import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

function Layout({children}: {children: React.ReactNode}) {

    const navigate = useNavigate();

    const uploadSyllabi = () => {
        navigate('/upload')
    }   

    return (
        <>
            <div className="place-items-center justify-center flex border-b-2 pt-10 border-purple-500">
                <div className="w-1/2 ">
                    <div className="flex flex-row">
                        <h3 onClick={() => {navigate("/")}} className="text-4xl hover:text-yellow-400 w-min cursor-pointer text-yellow-300 font-extrabold text-left flex-1">📚 Share Syllabus</h3>
                    </div>
                    <p className="text-left ">
                        A platform for sharing and exploring course syllabi, helping students compare class structures, assignments, and topics while earning community service hours by contributing syllabuses to the knowledge base.</p>
                    <div className="pt-1 text-left flex flex-row space-x-2">
                        <p className="text-xs font-bold">Contacts:</p>
                        <Marquee className="text-xs flex-1" speed={25}>
                            <p className=""> lwen3@student.rccd.edu 336722@students.cnusd.k12.ca.us College Success Club @college_success_club | here to assist those who wish to know how hard classes are before taking them at Norco College | do you have a computer running linux 24/7 with port forwarding? contact us to help host this website! |</p>
                        </Marquee>
                    </div>

                    <div className="w-full p-4 flex place-items-center justify-between text-sm">
                        <a href="https://portal.rcc.edu">MyPortal</a>
                        <a href="https://www.norcocollege.edu/articulation/documents/norco-igetc-2024-25.pdf">IGETC</a>
                        <a href="https://www.norcocollege.edu/services/counseling/index.html">Counseling</a>
                        <a href="https://mvc.edu/_resources/files/transfer/rccd-associate-degree-requirements.pdf ">RCCD GE (Graduation Requirements)</a>
                        <button onClick={uploadSyllabi} className="bg-blue-600 hover:bg-blue-700 border-yellow-300 border-2 flex place-items-center justify-center text-white rounded-lg font-bold p-2"><span className="pr-1 material-symbols-rounded">add_circle</span>Upload a Syllabus</button>
                    </div>
                </div>
            </div>
            {children}
        </>
    )
}

export default Layout;