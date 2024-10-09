import React from "react";
import Grad from '../assets/grad.jpg';

const Intro = () => {
    return (
        <div id="intro" className="flex max-w-full flex-col pt-[104px]">
            <div className="w-full flex justify-center">

                <div className="grid grid-cols-1 place-items-center md:flex md:flex-row m-4 lg:m-14 p-6 w-full md:items-center md:justify-around max-w-[1240px]">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-librebask">Christopher Hilton</h1>
                        <p className="text-lg max-w-md font-nunito pt-2">A master's of Physics graduate from the University of Bath, passionate about technology and ready to tackle real-world challenges in the tech sector.</p>
                    </div>
                    <div className="">
                        <img className="p-4 mt-10 md:mt-0 md:p-0 w-56 h-auto rounded-full ml" src={Grad} alt="/" />
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-center p-4">
                <div className="p-4 mt-24 text-center">
                    <p className="font-nunito">If you want to view my full CV, coded using latex, then please click the download button. </p>
                </div>
                <div className="pb-10">
                    <a href="https://drive.google.com/uc?export=download&id=1X1LuZInR0vmBE8SggSVDDndOG44kVnJE"
                    className="group inline-block px-6 py-3 border border-gray-800 rounded-full text-gray-800 transition duration-300 hover:bg-gray-800 hover:text-white">
                        Download CV

                    </a>
                </div>
            </div>

        </div>
    )
}

export default Intro