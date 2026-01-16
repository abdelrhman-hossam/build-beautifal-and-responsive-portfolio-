"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Contact <span className="text-neon">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-neon mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-white">Let's Work Together</h3>
                        <p className="text-gray-400">
                            I'm open to freelance opportunities, collaboration, or just a chat about security and web development.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Email</h4>
                                    <p className="text-gray-400">abdo01017417@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Phone</h4>
                                    <p className="text-gray-400">01017417323</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Location</h4>
                                    <p className="text-gray-400">Alexandria</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-dark/50 p-8 rounded-2xl border border-gray-800"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Name</label>
                                    <input type="text" className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Email</label>
                                    <input type="email" className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Subject</label>
                                <input type="text" className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none transition-colors" placeholder="Project Inquiry" />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none transition-colors" placeholder="Hello..." />
                            </div>
                            <button type="submit" className="w-full bg-neon text-dark font-bold py-3 rounded-lg hover:bg-neon-hover transition-colors">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
