"use client";

import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: isVisible ? -150 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={cn(
                "fixed inset-x-0 max-w-md mx-auto z-50 transition-transform",
                "top-10",
                className
            )}
        >
            <Menu setActive={setActive}>
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Home"
                    href="#hero"
                />
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="About"
                    href="#about"
                />
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Projects"
                    href="#projects"
                />
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Contact"
                    href="#contact"
                />
            </Menu>
        </motion.div>
    );
};

export default Navbar;
