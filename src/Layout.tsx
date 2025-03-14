import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";
import { isMobile } from "is-mobile";
import { useState } from "react";


interface BlogPosts {
    title: string;
    icon: string;
    link: string;
}

export const blogPosts: BlogPosts[] = [{ title: "What is 𝐒𝐡𝐚𝐫𝐞 𝐌𝐲 𝐒𝐲𝐥𝐥𝐚𝐛𝐮𝐬 & why is it 𝖇𝖊𝖙𝖙𝖊𝖗 than ℝ𝕒𝕥𝕖 𝕄𝕪 ℙ𝕣𝕠𝕗𝕖𝕤𝕤𝕠𝕣?", icon: "star", link: "/useful_resources" }, { title: "🆄🆂🅴🅵🆄🅻 resources to not miss out for highschool & college students!", icon: "bolt", link: "/useful_resources" }]

function Layout({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();

    console.log('Layout rendering'); // Add this line

    const [marqueeSpeed, setMarqueeSpeed] = useState(15);

    const uploadSyllabi = () => {
        navigate('/upload')

    }

    return (
        <div className="bg-[#fcfffd] text-[#051008] w-full h-full">
            <div className={`w-full text-left p-1 flex  place-items-center justify-center border-b border-gray-300 `}>
                <div className="flex-1 gap-4 place-items-center sticky grid grid-cols-3">
                    <text onClick={(e) => navigate("/")} className="text-xl text-[#29a847] cursor-pointer hover:drop-shadow-md font-extrabold flex-1 font-bol">📚 Share My Syllabus <span className="font-light text-purple-600">beta</span></text>
                    <div className="flex-1 flex place-items-center text-center">
                        <span className="material-symbols-rounded p-1 text-black">web_traffic</span>
                        <button onClick={(e) => navigate("/upload")} className="p-1 rounded-full anim-enter-width hover:drop-shadow-xl hover:bg-slate-950  font-[Parkinsans] pl-2 pr-2 font-bold bg-black">
                            <Marquee className="anim-enter-blur w-40" delay={1} gradient={true} gradientWidth="10%" gradientColor="black" speed={marqueeSpeed}>
                                <div className="flex gap-1">
                                    <span className="bg-blue-800 pl-2 gap-2 pr-2 rounded-md flex">
                                        <span className="text-white font-sans">Click to Share A Syllabus!</span>
                                        
                                    </span>
                                    <span className="material-symbols-rounded text-white">web_traffic</span>
                                    <span className="bg-purple-700 pl-2 gap-2 pr-2 place-items-center rounded-md flex">
                                        <span className="text-white font-bold font-sans">Sharying a syllabus awards 2 volunteer hours</span>
                                    </span>
                                    <span className="material-symbols-rounded pr-1 text-white">web_traffic</span>
                                </div>
                            </Marquee>
                        </button>
                        <span className="material-symbols-rounded p-1 text-black">add</span>
                    </div>
                    <div className="flex gap-4 font-light text-gray-600">
                        <Link to="/moderator" className=" text-gray-600">Moderator Panel</Link>
                        <Link to="/blog" className="text-gray-600">Blog</Link>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}



export default Layout;