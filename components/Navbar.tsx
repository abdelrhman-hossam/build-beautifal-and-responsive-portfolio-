"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-dark/90 backdrop-blur-md border-b border-neon/10 py-4 shadow-lg" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="#" className="flex items-center gap-2 text-2xl font-bold group">
                    <FaCode className="text-neon transition-transform group-hover:rotate-12" />
                    <span className="bg-gradient-to-r from-foreground to-neon bg-clip-text text-transparent">
                        Eng-Abdelrhman
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-gray-300 hover:text-neon transition-colors font-medium text-sm lg:text-base py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-neon after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-gray-300 hover:text-neon transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed top-[70px] left-0 w-full h-screen bg-dark/95 backdrop-blur-xl transform transition-transform duration-300 flex flex-col items-center justify-center gap-8 ${isOpen ? "translate-x-0" : "translate-x-full"
                        } md:hidden`}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl text-gray-300 hover:text-neon font-semibold transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
