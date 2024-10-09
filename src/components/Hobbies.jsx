import React from "react";
import { IoFootballOutline,IoGolfOutline } from "react-icons/io5";
import { MdCameraRoll } from "react-icons/md";
import { GiComputing } from "react-icons/gi";
import { FaChess } from "react-icons/fa";
import Dart from '../assets/dart.png';

const Hobbies = () => {
    return (
        <div id="hobbies" className="py-24 bg-gray-600 text-white">
            <div className="px-8 mx-auto max-w-7xl">
                {/* Start of the title */}
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-bold text-3xl font-librebask pb-4">Hobbies</h2>
                    <p className="pb-12 font-nunito ">
                        Hobbies and interests have always played a significant role in my life, 
                        and I aspire to turn one of these (coding) passions into a career. These activities 
                        have helped shape me into the person I am today, fueling my creativity and 
                        enhancing my problem-solving skills.                    
                    </p>
                </div>
                {/* Start of cards */}
                <div className="grid gap-10 grid-cols-1 p-20 md:p-0 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

                    <div className="relative overflow-hidden bg-white text-black shadow-md rounded-xl h-full hover:scale-105 duration-300">
                        <div className="p-9">
                            <IoFootballOutline className="pb-4" size={50} />
                            <h3 className="font-bold text-xl">Football</h3>
                            <p className="pt-4 font-nunito">
                                Football has been my favorite sport for many years, where I enjoy both playing and watching with friends. Winning a national cup and playing for an ex football league side in Hereford.
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-white text-black shadow-md rounded-xl h-full hover:scale-105 duration-300">
                        <div className="p-9">
                            <IoGolfOutline className="pb-4" size={50} />
                            <h3 className="font-bold text-xl">Golf</h3>
                            <p className="pt-4">
                                I only discovered my love for golf in the past four years, 
                                and I enjoy playing both competitively and recreationally. 
                                I look forward to improving my handicap in the years to come.
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-white text-black shadow-md rounded-xl h-full hover:scale-105 duration-300">
                        <div className="p-9">
                            <FaChess className="pb-4" size={50} />
                            <h3 className="font-bold text-xl">Chess</h3>
                            <p className="pt-4">
                            I’ve been playing chess for over ten years, both socially and competitively, 
                            reaching a peak Elo rating of 1700. The game has significantly sharpened my 
                            problem-solving skills, teaching me to think strategically and adapt to complex challenges.
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-white text-black shadow-md rounded-xl h-full hover:scale-105 duration-300">
                        <div className="p-9">
                            <img className="h-auto w-[50px] pb-4" src={Dart} alt="/" />
                            <h3 className="font-bold text-xl">Darts</h3>
                            <p className="pt-4">
                                I have only played darts in the last two years, but I really enjoy playing it socially with hopes to carry this on into a competitive setting.
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-white text-black shadow-md rounded-xl h-full hover:scale-105 duration-300">
                        <div className="p-9">
                            <MdCameraRoll className="pb-4" size={50} />
                            <h3 className="font-bold text-xl">Photography</h3>
                            <p className="pt-4">
                            My passion for photography stems from a deep fascination with film 
                            cameras, not only in how they work but also in the unique ability 
                            to capture great images with them.
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-white text-black shadow-md rounded-xl h-full hover:scale-105 duration-300">
                        <div className="p-9">
                            <GiComputing className="pb-4" size={50} />
                            <h3 className="font-bold text-xl">Computing</h3>
                            <p className="pt-4">
                            Coding and computing are not only my ideal career 
                            path but also a source of great enjoyment. I love 
                            learning new languages and technologies, as well as 
                            applying the skills/languages I’ve already developed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hobbies