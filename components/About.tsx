"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-dark/50">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        About <span className="text-neon">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-neon mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-lg text-gray-300 leading-relaxed"
                    >
                        <p>
                            I am a passionate <span className="text-neon font-semibold">Cyber Security Consultant</span> and
                            <span className="text-neon font-semibold"> Full Stack Developer</span> based in Egypt.
                            With a strong foundation in Computer Science and Business Information Systems, I bridge the gap between building secure applications and identifying vulnerabilities in existing ones.
                        </p>
                        <p>
                            My journey started with a curiosity about how systems break, which led me to master Penetration Testing. simultaneously, I developed a love for creating beautiful, functional web applications using the MERN stack.
                        </p>
                        <p>
                            I am currently a Level 4 student, constantly evolving with the rapid changes in technology and security landscapes.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {[
                            { label: "Experience", value: "1 Year" },
                            { label: "Projects", value: "20+" },
                            { label: "Clients", value: "15+" },
                            { label: "Certificates", value: "5+" }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-dark border border-neon/20 p-6 rounded-xl text-center hover:border-neon transition-colors shadow-lg hover:shadow-neon/20 group">
                                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-neon transition-colors">{stat.value}</h3>
                                <p className="text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
