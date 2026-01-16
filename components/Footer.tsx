"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark pt-20 pb-10 relative overflow-hidden">
            {/* Masterpiece Top Border Glow */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon to-transparent opacity-50 shadow-[0_0_20px_#2afc85]"></div>

            {/* Background Ambient Glow */}
            <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-neon/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-extrabold bg-gradient-to-r from-white via-neon to-white bg-clip-text text-transparent inline-block animate-gradient-text"
                        >
                            Eng-Abdelrhman
                        </motion.h3>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Cyber Security Consultant and Full Stack Web Developer. Creating digital masterpieces that are secure by design and beautiful by nature.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-neon rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, idx) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-neon transition-all flex items-center gap-3 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-neon/50 group-hover:bg-neon group-hover:scale-150 transition-all duration-300"></span>
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
                            Connect
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-neon rounded-full"></span>
                        </h4>
                        <div className="flex gap-5">
                            {[FaGithub, FaLinkedin, FaTwitter, FaDribbble].map((Icon, idx) => (
                                <motion.a
                                    key={idx}
                                    href="#"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, type: "spring" }}
                                    whileHover={{ y: -5, rotate: 10 }}
                                    className="w-12 h-12 rounded-xl bg-dark border border-gray-800 flex items-center justify-center text-gray-400 hover:border-neon hover:text-neon hover:shadow-[0_0_20px_rgba(42,252,133,0.3)] transition-all duration-300 relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-neon/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <Icon size={20} className="relative z-10" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800/50 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="flex items-center gap-2">
                        &copy; {currentYear} <span className="text-neon font-semibold">Eng-Abdelrhman</span>. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1">
                        Made by <span className="text-neon font-semibold">Eng-Abdelrhman Hossam Abozahra</span>
                    </p>
                </div>
            </div>
        </footer >
    );
}
