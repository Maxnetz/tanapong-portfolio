import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import resume from "../assets/Tanapong-Tirapattharachai-resume.pdf"

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-white">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-black">
                        I'm a Software Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I believe learning is the door leading to opportunities.
                        I keen to challenge myself to learn new things. My goal
                        is to apply the transferable skills I have acquired from
                        my recent training in a new role as a Software
                        Developer. where I can utilize my background in Software
                        Development, Innovation and Problem Solving.
                    </p>

                    <div>
                        <a href={resume} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Download CV
                            <span className="group-hover:rotate-90 duration-300 disp">
                                <MdOutlineKeyboardArrowRight
                                    size={25}
                                    className="ml-1"
                                />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="">
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-full "
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
