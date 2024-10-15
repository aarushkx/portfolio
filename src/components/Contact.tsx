"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LampContainer } from "./ui/lamp";
import { FloatingDock } from "@/components/ui/floating-dock";
import MessageForm from "./example/MessageForm";

const links = [
    {
        title: "GitHub",
        icon: (
            <Image
                src={"/icons/github.svg"}
                width={20}
                height={20}
                alt="GitHub"
            />
        ),
        href: "https://github.com/aarushkx/",
    },
    {
        title: "Instagram",
        icon: (
            <Image
                src={"/icons/instagram.svg"}
                width={20}
                height={20}
                alt="Instagram"
            />
        ),
        href: "https://www.instagram.com/aarushx13/",
    },
    {
        title: "LinkedIn",
        icon: (
            <Image
                src={"/icons/linkedin.svg"}
                width={20}
                height={20}
                alt="LinkedIn"
            />
        ),
        href: "https://www.linkedin.com/in/aarush-kumar-05461b321/",
    },
];

const Contact = () => {
    return (
        <section id="contact">
            <div className="max-w-5xl mx-auto rounded-md text-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden felx flex-col justify-center">
                <LampContainer>
                    <h2 className="mt-4 text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-1">
                        Contact
                    </h2>
                    <p className="m-8">
                        Interested in working together? Let&apos;s get in touch!
                    </p>

                    <div>
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-1">
                            Reach me at
                            <br />
                            <div className="text-base hover:text-gray-400 hover:opacity-80 hover:underline">
                                <Link href="mailto:2005aarushkumar@gmail.com">
                                    2005aarushkumar@gmail.com
                                </Link>
                            </div>
                        </h3>
                    </div>

                    <div className="m-8">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-1">
                            Connect with me
                        </h3>
                        <div className="flex justify-center items-center">
                            <div className="mt-4">
                                <FloatingDock items={links} />
                            </div>
                        </div>
                    </div>
                    <div className="m-8">
                        <MessageForm />
                    </div>
                </LampContainer>
            </div>
        </section>
    );
};

export default Contact;
