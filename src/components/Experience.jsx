import React from "react";
import Grb from '../assets/grb.png';
import Cprog from '../assets/cprog.png'
import Phys from '../assets/phys.png'
import Cs from '../assets/cs50.png'
import Fcc from '../assets/fcc.png'

const Experience = () => {
    return (
        <div id="experience" className="h-auto w-full text-[#F5F5F5]">
            <div className="flex flex-col p-12 w-full items-center justify-center">
                <div className="flex justify-center">
                    <h1 className="text-3xl max-w-lg pb-4 font-librebask font-bold text-gray-700">Work Experience and Projects</h1>
                </div>
                <div className="max-w-xl text-center">
                    <p className="font-nunito text-base text-gray-700">
                    Throughout my time in education and beyond, I've gained valuable 
                    experience and worked on a range of projects. These opportunities 
                    have not only allowed me to explore new areas of interest and learn 
                    different coding languages but also sharpened my problem-solving skills. 
                    Each experience has helped me tackle complex challenges, enhancing my ability 
                    to approach problems creatively and effectively.
                    </p>
                </div>
                
            </div>
            <div className="flex justify-center pb-14">
                <div className="max-w-[1240px] gap-16 md:gap-10 p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Cards */}
                    <div className="h-auto flex flex-col items-center bg-gray-600 text-white shadow-xl rounded-lg hover:scale-105 duration-300">
                        <img className="h-auto w-56 items-center p-4" src={Grb} alt="/" />
                        <h2 className="font-bold text-center text-xl">Master's Research Project</h2>
                        <div className="p-2 ml-3 pb-8">
                            <p className="font-nunito p-2">
                                My master’s research project was a coding-focused endeavour, 
                                completed over 11 weeks, where I simulated blastwaves from astrophysical 
                                sources. This experience not only demonstrated to me the vast potential of 
                                coding but also solidified my passion for it. To view my final report 
                                <a className="text-cyan-400 hover:opacity-55" href="https://drive.google.com/uc?export=download&id=1LwfI2txbTTlYz1TRdEUKhezI0JUjFLWJ"> Click Here.</a>
                            </p>
                        </div>
                    </div>

                    <div className="h-auto flex flex-col items-center bg-gray-600 text-white shadow-xl rounded-lg hover:scale-105 duration-300">
                        <img className="h-auto w-36 items-center p-4" src={Cprog} alt="/" />
                        <h2 className="font-bold" text-xl>C Programming Supervisor</h2>
                        <div className="p-2 ml-3 pb-8">
                            <p className="font-nunito p-2">
                                During my research project, I had the opportunity to assist in teaching 
                                C programming to undergraduates under my supervisor's guidance. This evolved 
                                into a nine-month role where I not only strengthened my C programming skills 
                                but also developed key communication, problem-solving, and leadership abilities.
                            </p>
                        </div>
                    </div>

                    <div className="h-auto flex flex-col items-center bg-gray-600 text-white shadow-xl rounded-lg hover:scale-105 duration-300">
                        <img className="h-auto w-28 items-center p-4 mt-3" src={Phys} alt="/" />
                        <h2 className="font-bold text-center text-xl">Maths and Physics Tutor</h2>
                        <div className="p-2 ml-3 pb-8">
                            <p className="font-nunito p-2">
                            During secondary school, I volunteered as a tutor for GCSE maths 
                            and physics students who were struggling. I created tailored lessons 
                            and materials based on each student's individual needs, adapting my 
                            explanations to suit their learning styles.
                            </p>
                        </div>
                    </div>


                    <div className="h-auto flex flex-col items-center bg-gray-600 text-white shadow-xl rounded-lg hover:scale-105 duration-300">
                        <img className="h-auto w-72 items-center p-4" src={Cs} alt="/" />
                        <h2 className="font-bold m-3 text-center text-xl">CS50: Web Development Online Course</h2>
                        <div className="p-2 ml-3 pb-8">
                            <p className="font-nunito">
                            After university, I was eager to continue learning and explore areas I enjoyed, 
                            so I took on the CS50 courses. These courses allowed me to learn new coding languages 
                            and this one specifically introduced me to web development, specifically using HTML, 
                            CSS, Python, and JavaScript.
                            </p>
                        </div>
                    </div>

                    <div className="h-auto flex flex-col items-center bg-gray-600 text-white shadow-xl rounded-lg hover:scale-105 duration-300">
                        <img className="h-auto w-72 items-center p-4" src={Cs} alt="/" />
                        <h2 className="font-bold m-3 text-xl">CS50: Intro to Databases with SQL</h2>
                        <div className="p-2 ml-3 pb-8">
                            <p className="font-nunito">
                            This course taught me how to create, query, and update databases 
                            using SQLite, along with many other related skills. It provided a 
                            solid foundation in database management, which has been invaluable 
                            for my understanding of data-driven applications.
                            </p>
                        </div>
                    </div>

                    <div className="h-auto flex flex-col items-center bg-gray-600 text-white shadow-xl rounded-lg hover:scale-105 duration-300">
                        <img className="h-auto w-32 items-center" src={Fcc} alt="/" />
                        <h2 className="font-bold m-3 text-xl">FreeCodeCamp: Intro to Java</h2>
                        <div className="p-2 ml-3 pb-8">
                            <p className="font-nunito">
                                This course introduced me to the fundamentals of Java programming, 
                                covering key concepts such as object-oriented programming, data structures, 
                                and algorithms. This course not only enhanced my coding skills but also equipped 
                                me with the knowledge to build robust applications and solve complex problems efficiently.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Experience