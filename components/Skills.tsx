"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaCode, FaServer, FaLock, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPython, SiKalilinux } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "Cyber Security", icon: FaShieldAlt, level: "95%" },
        { name: "Penetration Testing", icon: FaLock, level: "90%" },
        { name: "React.js", icon: FaReact, level: "90%" },
        { name: "Next.js", icon: SiNextdotjs, level: "85%" },
        { name: "Node.js", icon: FaNodeJs, level: "85%" },
        { name: "Python", icon: SiPython, level: "80%" },
        { name: "Kali Linux", icon: SiKalilinux, level: "90%" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: "95%" },
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        My <span className="text-neon">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-neon mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-dark/80 backdrop-blur-sm p-6 rounded-xl border border-neon/10 hover:border-neon/50 transition-all group hover:-translate-y-2"
                        >
                            <div className="text-4xl text-neon mb-4 group-hover:scale-110 transition-transform duration-300">
                                <skill.icon />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-neon shadow-[0_0_10px_#2afc85]"
                                    style={{ width: skill.level }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
