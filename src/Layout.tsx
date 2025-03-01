import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import { isMobile } from "is-mobile";


interface BlogPosts {
    title: string;
    icon: string;
    link: string;
}

export const blogPosts: BlogPosts[] = [{ title: "What is 𝐒𝐡𝐚𝐫𝐞 𝐌𝐲 𝐒𝐲𝐥𝐥𝐚𝐛𝐮𝐬 & why is it 𝖇𝖊𝖙𝖙𝖊𝖗 than ℝ𝕒𝕥𝕖 𝕄𝕪 ℙ𝕣𝕠𝕗𝕖𝕤𝕤𝕠𝕣?", icon: "star", link: "/useful_resources" },{ title: "🆄🆂🅴🅵🆄🅻 resources to not miss out for highschool & college students!", icon: "bolt", link: "/useful_resources" }]

function Layout({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();

    console.log('Layout rendering'); // Add this line



    const uploadSyllabi = () => {
        navigate('/upload')

    }

    return (
        <>
            <div className={`place-items-center justify-center border-b-2 ${isMobile() ? "pt-0 flex" : "pt-4  grid grid-cols-5"} border-purple-500`}>
                <div></div>
                <div className={`${isMobile() ? "w-full" : "col-span-3"} p-4`}>
                    <div className="flex flex-row">
                        <h3 onClick={() => { navigate("/") }} className="text-4xl hover:text-yellow-400 w-min cursor-pointer text-yellow-300 font-extrabold text-left flex-1">📚 Share Syllabus <text className="font-light text-purple-600">beta</text></h3>
                    </div>
                    {!isMobile() && (
                        <p className="text-left">
                            A platform for sharing and exploring course syllabi, helping students compare class structures, assignments, and topics while earning community service hours by contributing syllabuses to the knowledge base.
                        </p>
                    )}
                    <div className="pt-1 text-left flex flex-row space-x-2">
                        <p className="text-xs font-bold">Contacts:</p>
                        <Marquee className="text-xs flex-1" speed={25}>
                            <p className="">Are you from a college outside of RCCD? Contact lwen3@student.rccd.edu to get your school listed</p>
                        </Marquee>
                    </div>

                    <div className={`w-full ${isMobile() ? "p-0" : "p-4"} flex place-items-center justify-between text-sm`}>
                        <a href="https://shaded-yttrium-0dc.notion.site/Share-Syllabus-Blog-1a98dea271f580a4aa48fd791a8c83da?pvs=74">Blog</a>
                        <a href="https://shaded-yttrium-0dc.notion.site/About-ShareSyllabus-me-1a98dea271f580cf9162f61b22e7454a">About Share Syllabus</a>
                        <a href="https://assist.org">Assist.org</a>
                        {!isMobile() && <button onClick={uploadSyllabi} className={`bg-blue-600 hover:bg-blue-700 border-yellow-300 border-2 flex place-items-center justify-center text-white rounded-lg font-bold p-2`}><span className="pr-1 material-symbols-rounded">add_circle</span>Upload a Syllabus</button>}

                    </div>
                </div>
                <div></div>
            </div>
            {children}
        </>
    )
}



export default Layout;