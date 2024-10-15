"use client";

import React from "react";
import Link from "next/link";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "Cielit - Social Media Platform",
        description:
            "Cielit is a full-featured social media web app built using the MERN stack. Users can create and personalize profiles, share posts, engage with content by liking and commenting, and interact with others by following or unfollowing users. The platform also includes real-time search functionality, enabling users to discover others seamlessly. Cielit brings together essential social networking features in a clean, modern interface.",
        link: <Link href="https://cielit.onrender.com/">View Project</Link>,
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white"></div>
        ),
    },
    {
        title: "AnyLugar - AI-Powered Travel Planner",
        description:
            "AnyLugar is a travel planning web app built with the MERN stack. The platform enables users to create personalized travel itineraries, plan trips with ease, and generate tailored recommendations using Google Gemini AI. With user authentication and a smooth, intuitive interface, AnyLugar provides a seamless experience for organizing trips.",
        link: (
            <Link href="https://github.com/aarushkx/any-lugar">
                View Project
            </Link>
        ),
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white"></div>
        ),
    },
    {
        title: "Netflix Clone",
        description:
            "A Netflix clone built with Next.js, designed to mimic the core features of a modern streaming platform. The app includes user authentication and the ability to browse and watch movies or TV shows. Built with a focus on responsive design and an intuitive UI, this project demonstrates how to manage media content display and user interaction in a real-world application.",
        link: (
            <Link href="https://n-flix-project.netlify.app/">View Project</Link>
        ),
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white"></div>
        ),
    },
    {
        title: "E-Commerce React App",
        description:
            "This project is an e-commerce web application developed with React, focusing on creating a clean and intuitive user interface. The goal of this project was to deepen understanding of React and state management, showcasing essential e-commerce features such as product listings, product details and cart management.",
        link: (
            <Link href="https://ecomdevstore.netlify.app/">View Project</Link>
        ),
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white"></div>
        ),
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="min-h-screen max-w-5xl mx-auto rounded-md text-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden p-4 flex flex-col">
                <h2 className="text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-1">
                    Projects
                </h2>
                <div className="p-10">
                    <StickyScroll content={content} />
                </div>
            </div>
        </section>
    );
};

export default Projects;
