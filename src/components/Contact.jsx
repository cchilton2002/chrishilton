import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return(
        <div id="contact" className="text-slate-700 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
                <div className="col-span-2 mb-8">
                    <div className="flex items-center justify-start pb-2">
                        <h2 className="text-4xl font-light font-dmserif mr-3">CH</h2>
                        <h3 className="text-3xl font-librebask p-2 mx-3">Christopher Hilton</h3>
                    </div>
                    <p className="mb-6 max-w-sm">If you have any questions or want to find out any more information about my journey, experience or interests please feel free to get in touch.</p>
                </div>
                <div className="p-2">
                    <p className="font-bold">Contact Me</p>
                    <div className="flex p-1 whitespace-nowrap">
                        <p className="mr-1">Telephone Number:</p>
                        <a href="tel:07597237318" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">07597 237318</a>
                    </div>
                    <div className="flex p-1">
                        <p className="mr-1">Email:</p>
                        <a href="mailto:christoph0295@gmail.com" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">christoph0295@gmail.com</a>
                    </div>
                    <div className="flex p-1 whitespace-nowrap">
                        <p className="mr-1">Location:</p>
                        <a href="https://www.google.co.uk/maps/search/Tooting+Broadway" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">Tooting Broadway, London</a>
                    </div>

                </div>
                <div className="ml-24 p-2">
                    <h3 className="font-bold pb-2">Socials</h3>
                    <div className="flex">
                        <a href="https://www.linkedin.com/in/christopherchilton/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin Profile">
                            <FaLinkedin className="p-1" size={40} />
                        </a>
                            
                        <a href="https://github.com/cchilton2002" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <FaSquareGithub className="p-1" size={40} />
                        </a>
                    </div>


            </div>
            </div>
            <hr className="border-t-2 border-gray-300 mx-auto h-px my-4" />
            <div className="p-4">
                <p>© Designed and coded by Christopher Hilton 2024.</p>
            </div>
        </div>
    )
}

export default Contact