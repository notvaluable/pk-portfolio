import { Link, useLocation } from "react-router-dom"
import { useContext } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { HamburgerMenuContext } from "../context/GlobalContext";

const Sidebar = () => {
    let urlLocation = useLocation();

    const [IsHamburgerActive, setIsHamburgerActive] = useContext(HamburgerMenuContext);
    
    function Hamburger() {
        setIsHamburgerActive(!IsHamburgerActive);
    }

     return (
        <>  
            <div className={`flex w-full justify-end items-center px-6 py-3 md:hidden fixed z-2 bg-amber-300 ${IsHamburgerActive ? "hidden" : "block"}`}>
                <GiHamburgerMenu size={50} className="text-white" onClick={()=>{
                    Hamburger()
                }}/>
            </div>
            <div className={`${IsHamburgerActive ? "active" : "initial"} md:block`}>
                <div className="flex flex-col bg-gray-700 w-[320px] fixed h-screen z-3 pt-4">
                    <div className={`flex justify-end relative bg-gray-700 pr-4 md:hidden`}>
                        <ImCross size={40} className="text-white absolute" onClick={()=>{
                            Hamburger()
                        }}/>
                    </div>
                    <div className="flex bg-gray-700 w-full px-8 py-5 justify-center items-center">
                        <img src="../images/DSC_0175.JPG" alt="Pranay-Kadam" className="rounded-full md:w-[90%] w-[60%] border-6 border-gray-400"/>
                    </div>
                    <div className="flex flex-col bg-amber-400 justify-between h-screen pb-10 overflow-auto">
                        <div className="flex flex-col w-2/2 gap-4 justify-center items-center">
                            <div className="flex flex-col items-center pt-6">
                                <span className="bg-gray-800 h-1.5 w-1.5 rounded-full"></span>
                                <span className="bg-gray-800 h-5 w-0.5"></span>
                            </div>

                            <div className="flex flex-col gap-8">
                                <h1 className="text-2xl font-bold text-center nova-square-bold hover:dark:text-zinc-950 tracking-wider text-white">
                                    <Link className="cursor-pointer" to="/" onClick={()=>{ setIsHamburgerActive(false) }}>HOME</Link>
                                </h1>
                                <h1 className={`text-2xl font-bold text-center nova-square-bold hover:dark:text-zinc-950 tracking-wider ${urlLocation.pathname == '/portfolio/about' ? 'dark:text-zinc-950' : 'text-white'}`}>
                                    <Link className="cursor-pointer" to="/portfolio/about" onClick={()=>{ setIsHamburgerActive(false) }}>ABOUT ME</Link>
                                </h1>
                                <h1 className={`text-2xl font-bold text-center nova-square-bold hover:dark:text-zinc-950 tracking-wider ${urlLocation.pathname == '/portfolio/work-experience' ? 'dark:text-zinc-950' : 'text-white'}`}>
                                    <Link className="cursor-pointer" to="/portfolio/work-experience" onClick={()=>{ setIsHamburgerActive(false) }}>WORK EXPERIENCE</Link>
                                </h1>
                                <h1 className={`text-2xl font-bold text-center nova-square-bold hover:dark:text-zinc-950 tracking-wider ${urlLocation.pathname == '/portfolio/skills-n-certificates' ? 'dark:text-zinc-950' : 'text-white'}`}>
                                    <Link className="cursor-pointer" to="/portfolio/skills-n-certificates" onClick={()=>{ setIsHamburgerActive(false) }}>SKILLS</Link>
                                </h1>
                                <h1 className={`text-2xl font-bold text-center nova-square-bold hover:dark:text-zinc-950 tracking-wider ${urlLocation.pathname == '/portfolio/education' ? 'dark:text-zinc-950' : 'text-white'}`}>
                                    <Link className="cursor-pointer" to="/portfolio/education" onClick={()=>{ setIsHamburgerActive(false) }}>EDUCATION</Link>
                                </h1>
                                <h1 className={`text-2xl font-bold text-center nova-square-bold hover:dark:text-zinc-950 tracking-wider ${urlLocation.pathname == '/portfolio/contact' ? 'dark:text-zinc-950' : 'text-white'}`}>
                                    <Link className="cursor-pointer" to="/portfolio/contact" onClick={()=>{ setIsHamburgerActive(false) }}>CONTACT</Link>
                                </h1>
                            </div>

                            <div className="flex flex-col items-center pb-8">
                                <span className="bg-gray-800 h-5 w-0.5"></span>
                                <span className="bg-gray-800 h-1.5 w-1.5 rounded-full"></span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <IoIosCall size={25} className="hover:scale-110 cursor-pointer" />
                            <FaLinkedin size={25} className="hover:scale-110 cursor-pointer" />
                            <AiFillInstagram size={25} className="hover:scale-110 cursor-pointer" />
                        </div>
                    </div>           
                </div>
            </div>
        </>
    )
}

export default Sidebar