import React, {useState} from "react";
import {
    MdDensityMedium,
    MdClose
} from 'react-icons/md'

const Navbarnew = () => {
    const [nav, setNav] = useState(true)
    const handleNav= () => {
        setNav(!nav)
    }
    return(
        <div id="home" className="bg-[#f6f6f2] bg-opacity-75 text-gray-800 flex p-2 fixed w-[100%] z-50">
            <div>
                <h1 className="text-4xl font-light font-dmserif p-5">CH</h1>
            </div>
            <div className="ml-auto">
                <ul className="hidden md:flex"> 
                    <li className="md:px-4 md:py-8 lg:px-8 lg:py-8 font-nunito">
                        <a className="group transition duration-300" href="#intro">
                            Home
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800"></span>
                        </a>
                    </li>
                    
                    <li className="md:px-4 md:py-8 lg:px-8 lg:py-8 font-nunito">
                        <a className="group transition duration-300" href="#story">
                            My Story
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800"></span>
                        </a>
                    </li>

                    <li className="md:px-4 md:py-8 lg:px-8 lg:py-8 font-nunito">
                        <a className="group transition duration-300" href="#experience">
                            Work Experience & Projects
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800"></span>
                        </a>
                    </li>

                    <li className="md:px-4 md:py-8 lg:px-8 lg:py-8 font-nunito">
                        <a className="group transition duration-300" href="#hobbies">
                            Hobbies
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800"></span>
                        </a>
                    </li>

                    <li className="md:px-4 md:py-8 lg:px-8 lg:py-8 font-nunito">
                        <a className="group transition duration-300" href="#contact">
                            Contact Me
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800"></span>
                        </a>
                    </li>
                </ul>
            </div>

            <div onClick={handleNav} className="block md:hidden p-6">
                {!nav ? <MdClose size={20}/> : <MdDensityMedium size={20}/>}
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-slate-400 bg-[#d4d4d4] ease-in-out duration-500 text-gray-800 bg-opacity-95' : 'fixed left-[-100%]'}>
                <ul className="uppercase p-4">
                    <li className="text-4xl font-light font-dmserif py-4 ml-[13px] mb-[12px]">CH</li>

                    <li className="font-nunito p-4 border-b border-r-slate-400">
                        <a onClick={handleNav} className="group transition duration-300" href="#intro">
                            Home
                            <span className="block max-w-0 group-hover:max-w-[50px] transition-all duration-500 h-0.5 bg-gray-800"></span>
                        </a>
                    </li>
                    
                    <li className="font-nunito p-4 border-b border-r-slate-400">
                        <a onClick={handleNav} className="group transition duration-300" href="#story">
                            My Story
                            <span className="block max-w-0 group-hover:max-w-[85px] transition-all duration-500 h-0.5 bg-gray-800"></span>
                        </a>
                    </li>

                    <li className="font-nunito p-4 border-b border-r-slate-400">
                        <a onClick={handleNav} className="group transition duration-300" href="#experience">
                            Work Experience & Projects
                            <span className="block max-w-0 group-hover:max-w-[250px] transition-all duration-500 h-0.5 bg-gray-800"></span>
                        </a>
                    </li>

                    <li className="font-nunito p-4 border-b border-r-slate-400">
                        <a onClick={handleNav} className="group transition duration-300" href="#hobbies">
                            Hobbies
                            <span className="block max-w-0 group-hover:max-w-[70px] transition-all duration-500 h-0.5 bg-gray-800"></span>
                        </a>
                    </li>

                    <li className="font-nunito p-4">
                        <a onClick={handleNav} className="group transition duration-300" href="#contact">
                            Contact Me
                            <span className="block max-w-0 group-hover:max-w-[100px] transition-all duration-500 h-0.5 bg-gray-800"></span>
                        </a>
                    </li>
                    
                </ul>
            </div>

        </div>
    )
}

export default Navbarnew