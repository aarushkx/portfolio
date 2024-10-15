"use client";

import React from "react";
import { Spotlight } from "./ui/spotlight";

const Hero = () => {
    return (
        <section id="hero">
            <div className="md:min-h-screen h-[50rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className="p-4 max-w-7xl mx-autorelative z-10 w-full pt-20 md:pt-0">
                    <div className="max-w-2xl mx-auto text-left p-4">
                        <h1 className="mt-20 md:mt-0 p-1 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            Hello, I&apos;m Aarush - a full stack web developer
                            that cares a great deal about positive impact
                            projects.
                        </h1>

                        <p className="mt-8 font-normal text-base text-neutral-300">
                            I&apos;m a passionate web developer involved in the
                            job of delivering clean efficient code. Be it
                            dynamic websites or tackling tough technical
                            problems, my focus lies in crafting solutions that
                            fit seamlessly with client needs. I put everything
                            together with attention to detail and a love for
                            coding and a goal towards functions and visual
                            appeal.
                        </p>

                        <button className="mt-8 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <a
                                href="files/Aarush_Kumar_Resume.pdf"
                                download="Aarush_Kumar_Resume.pdf"
                            >
                                Resume
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
