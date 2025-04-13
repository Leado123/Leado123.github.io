import isMobile from "is-mobile";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";






function Layout({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();

    console.log('Layout rendering'); // Add this line



    return (
        <div className="bg-[#fcfffd] text-[#051008] w-full h-full">
            <div className={`w-full absolute shadow-sm top-0 left-0 backdrop-blur-md z-50 text-left p-2 flex place-items-center justify-center border-b border-gray-300`}>
                <div className={`flex-1  gap-4 place-items-center ${!isMobile() ? "flex" : "flex flex-col"}`}>
                    {isMobile() ?
                        <button onClick={() => navigate("/upload")} className="p-1 flex-1 rounded-full  hover:drop-shadow-xl hover:bg-slate-950   pl-2 pr-2 font-bold bg-black">
                            <Marquee className="anim-enter-blur max-w-screen" delay={1} gradient={true} gradientWidth="10%" gradientColor="black" speed={15}>
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
                        </button> :
                        <div className="flex-1 grid grid-cols-3 gap-4 justify-center place-items-center">
                            <text onClick={() => navigate("/")} className="text-xl bg-clip-text flex place-items-center text-transparent bg-gradient-to-tl from-purple-600 to-blue-700 cursor-pointer gap-1 hover:drop-shadow-md font-extrabold flex-1 font-bol"><img className="h-6 drop-shadow-lg" src="/logo_borderless.png"></img>Share Syllabus <span className="font-light text-purple-600"> beta</span></text>
                            <div onClick={() => navigate("/upload")} className="flex-1 cursor-pointer hover:backdrop-blur-md rounded-full flex place-items-center text-center">
                                <span className="material-symbols-rounded p-1 text-black">web_traffic</span>
                                <button onClick={() => navigate("/upload")} className="p-1 rounded-full anim-enter-width hover:drop-shadow-xl hover:bg-slate-950  pl-2 pr-2 font-bold bg-black">
                                    <Marquee className="anim-enter-blur w-40" delay={1} gradient={true} gradientWidth="10%" gradientColor="black" speed={15}>
                                        <div className="flex gap-1">
                                            <span className="bg-blue-800 pl-2 gap-2 pr-2 rounded-md flex">
                                                <span className="text-white">Click to Share A Syllabus!</span>

                                            </span>
                                            <span className="material-symbols-rounded text-white">web_traffic</span>
                                            <span className="bg-purple-700 pl-2 gap-2 pr-2 place-items-center rounded-md flex">
                                                <span className="text-white font-bold">Sharying a syllabus awards 2 volunteer hours</span>
                                            </span>
                                            <span className="material-symbols-rounded pr-1 text-white">web_traffic</span>
                                        </div>
                                    </Marquee>
                                </button>
                                <span className="material-symbols-rounded p-1 text-black">add</span>
                            </div>
                            <div className="flex flex-row gap-4 font-light text-gray-600 items-center">
                                <Link to="/moderator" className="text-gray-600">Moderator Panel</Link>
                                <Link to="/blog" className="text-gray-600">Blog</Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
                {children}

        </div>
    )
}



export default Layout;