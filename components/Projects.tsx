"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "Secure Chat App",
            description: "End-to-end encrypted messaging application built with MERN stack and Socket.io. Features real-time communication and AES-256 encryption.",
            tags: ["React", "Node.js", "Socket.io", "MongoDB"],
            image: "https://placehold.co/600x400/0c0f17/2afc85?text=Secure+Chat"
        },
        {
            title: "Vulnerability Scanner",
            description: "Python-based automated security scanner for web applications. Detects SQL injection, XSS, and misconfigurations.",
            tags: ["Python", "Security", "Automation"],
            image: "https://placehold.co/600x400/0c0f17/2afc85?text=Scanner"
        },
        {
            title: "E-commerce Platform",
            description: "Full-featured online store with secure payment gateway integration, admin dashboard, and responsive design.",
            tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
            image: "https://placehold.co/600x400/0c0f17/2afc85?text=E-commerce"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-dark/50">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Recent <span className="text-neon">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-neon mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-dark rounded-xl overflow-hidden border border-gray-800 hover:border-neon transition-all duration-300 group shadow-lg"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href="#" className="p-3 bg-neon text-dark rounded-full hover:bg-white transition-colors">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href="#" className="p-3 bg-neon text-dark rounded-full hover:bg-white transition-colors">
                                        <FaExternalLinkAlt size={18} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-neon/10 text-neon border border-neon/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
