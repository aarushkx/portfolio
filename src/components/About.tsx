"use client";

import React from "react";
import Image from "next/image";
import { WavyBackground } from "./ui/wavy-background";

const skills = [
    { name: "JavaScript", icon: "/skills/javascript.svg" },
    { name: "TypeScript", icon: "/skills/typescript.svg" },
    { name: "Java", icon: "/skills/java.svg" },
    { name: "Next.js", icon: "/skills/next.svg" },
    { name: "Tailwind CSS", icon: "/skills/tailwind.svg" },
    { name: "MongoDB", icon: "/skills/mongodb.svg" },
    { name: "Express", icon: "/skills/express.svg" },
    { name: "React.js", icon: "/skills/react.svg" },
    { name: "Node.js", icon: "/skills/node.svg" },
    { name: "Redux", icon: "/skills/redux.svg" },
];

const About = () => {
    return (
        <section id="about">
            <div className="min-h-screen h-[50rem] w-full rounded-md text-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden p-4 flex flex-col">
                <WavyBackground className="max-w-4xl mx-auto pb-10">
                    <h2 className="md:mt-0 text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-1">
                        About
                    </h2>
                    <div className="max-w-2xl mx-auto p-4">
                        <div className="mt-8 text-base md:text-lg text-white">
                            <p>
                                I&apos;m a passionate full-stack web developer with a
                                knack for creating dynamic and user-friendly
                                applications. I thrive on turning complex
                                challenges into elegant solutions using the
                                latest technologies in the industry.
                            </p>
                            <p className="mt-4">
                                With a strong foundation in both front-end and
                                back-end development, I specialize in
                                technologies like React.js, Node.js, and
                                Next.js. My approach combines creative design
                                with robust functionality, ensuring that each
                                project not only looks great but performs
                                seamlessly.
                            </p>
                            <p className="mt-4">
                                Here are some of the technologies I work with:
                            </p>
                            <div className="mt-4 grid grid-cols-5 md:grid-cols-5 gap-4">
                                {skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex flex-col items-center justify-center p-4 rounded-lg animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                                    >
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={30}
                                            height={30}
                                        />

                                        <span className="mt-2 text-sm text-white hidden md:block">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </WavyBackground>
            </div>
        </section>
    );
};

export default About;
