"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaCode, FaPaperPlane } from "react-icons/fa";

export default function Hero() {

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 px-6 max-w-7xl mx-auto relative overflow-visible"
        >
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full z-10">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 text-center lg:text-left"
                >
                    {/* Animated Text */}
                    {/* Animated Text */}
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1">
                        {"Eng-Abdelrhman Hossam Abozahra".split(" ").map((word, wordIndex) => (
                            <span key={wordIndex} className="whitespace-nowrap inline-block">
                                {word.split("").map((char, charIndex) => (
                                    <motion.span
                                        key={charIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: (wordIndex * 0.2) + (charIndex * 0.05),
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 10
                                        }}
                                        className="inline-block bg-gradient-to-r from-white via-neon to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neon drop-shadow-[0_0_10px_rgba(42,252,133,0.5)]">
                            Cyber Security Consultant
                        </h2>
                    </motion.div>

                    <p className="text-gray-300 text-lg mb-2">
                        I am a Penetration Tester and Cyber Security Consultant.
                    </p>
                    <h3 className="text-xl md:text-2xl font-medium text-white mb-4">
                        Web Developer and Software Engineer
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        I create responsive, user-friendly websites with experience in the
                        MERN stack. I am a Level 4 student at the Faculty of Computer and
                        Business Information Systems.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <Link
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-neon text-dark font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(42,252,133,0.4)] hover:shadow-[0_0_40px_rgba(42,252,133,0.6)] transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                        >
                            <FaCode /> View Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3 rounded-full border-2 border-neon text-neon font-bold flex items-center gap-2 hover:bg-neon hover:text-dark shadow-[0_0_15px_rgba(42,252,133,0.1)] hover:shadow-[0_0_30px_rgba(42,252,133,0.4)] transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaPaperPlane /> Contact Me
                        </Link>
                    </div>

                    <div className="flex gap-6 mt-10 justify-center lg:justify-start">
                        {[FaGithub, FaLinkedin, FaTwitter, FaDribbble].map((Icon, idx) => (
                            <Link
                                key={idx}
                                href="#"
                                className="text-3xl text-gray-400 hover:text-neon transform hover:scale-125 hover:rotate-6 transition-all duration-300 drop-shadow-lg"
                            >
                                <Icon />
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Image with Dazzling Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className="relative group"
                >
                    {/* Rotating Rings */}
                    <div className="absolute inset-0 w-full h-full rounded-full border-2 border-neon/30 border-dashed animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] rounded-full border border-neon/20 border-dotted animate-[spin_15s_linear_infinite_reverse]"></div>

                    <div className="w-72 h-72 md:w-96 md:h-96 relative z-10 rounded-full border-4 border-dark overflow-hidden shadow-[0_0_80px_rgba(42,252,133,0.6)] hover:shadow-[0_0_120px_rgba(42,252,133,0.8)] transition-shadow duration-500">
                        <Image
                            src="/profile-png.jpg"
                            alt="Profile"
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                            priority
                        />
                    </div>

                    {/* Glowing Orbs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon/20 blur-[80px] rounded-full animate-pulse -z-10"></div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-neon rounded-full blur-xl animate-pulse opacity-60"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full blur-xl animate-pulse opacity-40 delay-700"></div>
                </motion.div>
            </div>
        </section>
    );
}
