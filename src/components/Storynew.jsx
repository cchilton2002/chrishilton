import React from "react";
import Mcs from '../assets/mcs.png';
import Bath from '../assets/uob.png'
import Dash from '../assets/dashog.png';
import Dashrev from '../assets/dashrev.png'



const Storynew = () => {
    return(
        <div id="story" className="bg-gray-600 text-[#F5F5F5] flex h-auto max-w-full flex-col">
            <div className="flex flex-col p-8 w-full items-center justify-center">
                <div className="">
                    <h1 className="text-3xl max-w-lg pb-4 font-librebask font-bold">My Story</h1>
                </div>
                <div className="max-w-xl text-center">
                    <p className="font-nunito text-base">
                    My journey, which began in Cardiff and led to graduating from the University of Bath, 
                    has been full of exciting challenges, unexpected opportunities, and significant growth. 
                    Each stop along the way has played a unique role in shaping who I am today. This section 
                    provides an insight and brief overview of each place I have spent a significant amount of time.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-24 md:p-8 lg:p-20 items-center justify-center">

                <div className="p-4 mt-20 bg-[#f6f6f2] text-gray-700  shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300">
                    <h2 className="text-2xl font-bold text-center py-4 font-librebask">Cardiff</h2>
                    <div className="">
                        <p className="text-center text-xl pb-10 font-nunito">
                        I was born in Cardiff in 2002 and spent my early childhood there, 
                        living in the city for six years. During this time, 
                        I developed a passion for football and a growing interest 
                        in sports overall.
                        </p>
                    </div>
                </div>


                <div className="hidden lg:flex p-4 pt-6 h-56 mr-8 justify-end">
                    <img className="bg-transparent h-auto w-96 self-end" src={Dash} alt="/" />
                </div>

                <div className="p-4 mt-20 bg-[#f6f6f2] text-gray-700 w-full shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300">
                    <h2 className="text-2xl font-bold text-center py-4 font-librebask">Monmouth</h2>
                    <div className="">
                        <p className="text-center text-xl pb-10 font-nunito">
                            After moving from Cardiff to Monmouth, I attended primary, secondary school, 
                            and sixth form there. Despite early academic struggles, I discovered 
                            a passion for Maths in secondary school and Physics in sixth form. 
                            My love for football continued, playing for my school team and winning 
                            a national cup in the process, as well as playing for Hereford FC, 
                            eventually joining their first team.
                        </p>
                    </div>
                </div>

                <div className="p-4 mt-20 bg-[#f6f6f2] text-gray-700 w-full shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300">
                    <img className="h-auto w-40 mx-auto font-librebask" src={Bath} alt="/"/>
                    <h2 className="text-2xl font-bold text-center py-4 font-librebask">Bath</h2>
                    <div className="">
                        <p className="text-center text-xl pb-10 font-nunito">
                        I moved to Bath in 2020 to study Physics (MPhys) at the University of Bath, 
                        my first-choice university. While balancing academics, I actively 
                        participated in societies and sports teams. In my final year, after 
                        completing my research project, I realised my passion for coding and 
                        technology and decided to pursue it as a career.
                        </p>
                    </div>
                </div>

                <div className="hidden lg:flex flex-col p-1 h-[500px] items-center justify-between">
                    <img className="bg-transparent h-auto w-96 mt-4" src={Dashrev} alt="/" />
                    <div className="flex-grow"></div>
                    <img className="bg-transparent h-auto w-96 mb-20" src={Dash} alt="/" />
                </div>

                <div className="p-4 mt-20 bg-[#f6f6f2] text-gray-700 w-full shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300">
                    <h2 className="text-2xl font-bold text-center py-4 font-librebask">London</h2>
                    <div className="">
                        <p className="text-center text-xl pb-10 font-nunito">
                        I decided after university that to pursue my career in technology I wanted to 
                        take the risk and move to London with no immediate job. Whilst 
                        here I have been looking for part time work as well as looking 
                        for a role in the technology sector, but whilst not having a job 
                        I have been taking online courses as well as designing and building 
                        this website.
                        </p>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Storynew