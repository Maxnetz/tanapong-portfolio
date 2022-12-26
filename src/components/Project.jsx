import React from "react";
import upndown from "../assets/portfolio/upndown.png";
import Jammming from "../assets/portfolio/Jamming.jpg";
import colmar from "../assets/portfolio/colmar.png";

const Project = () => {
    const portfolios = [
        {
            id: 1,
            name: "UPNDOWN: Exercise Tracker",
            src: upndown,
            hrefDemo: "https://upndown-frontend.vercel.app",
            hrefCode: "https://github.com/Maxnetz/upndown-frontend",
        },
        {
            id: 2,
            name: "Jammming Session",
            src: Jammming,
            hrefDemo: "https://jammming-session.vercel.app",
            hrefCode: "https://github.com/Maxnetz/jammming-session",
        },
        {
            id: 3,
            name: "Colmar Academy",
            src: colmar,
            hrefDemo: "https://maxnetz.github.io/colmar-academy",
            hrefCode: "https://github.com/Maxnetz/colmar-academy",
        },
    ];
    return (
        <div name="Projects" className="bg-white w-full text-black md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, name, src, hrefCode, hrefDemo }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-500"
                        >
                            <img src={src} alt="" className="rounded-md " />
                            <h1 className="text-center font-bold pt-4">
                                {name}
                            </h1>
                            <div className="flex items-center justify-center">
                                <a
                                    href={hrefDemo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                >
                                    Demo
                                </a>
                                <a
                                    href={hrefCode}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
