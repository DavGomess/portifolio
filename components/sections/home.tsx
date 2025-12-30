"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Github, Linkedin } from "lucide-react";

interface HomeProps {
    isDarkMode: boolean;
}

export default function Home({ isDarkMode }: HomeProps) {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20" >
            <div className="text-center max-w-6xl mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-7xl md:text-9xl font-bold mb-8 relative"
                >
                    <span
                        className={`bg-gradient-to-r ${isDarkMode ? "from-[#D62828] via-[#FF4D6D] to-[#E76F51]" : "from-[#D62828] via-[#E76F51] to-[#FF4D6D]"} bg-clip-text text-transparent`}>
                        David Gomes
                    </span>
                    <div
                        className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? "from-[#D62828] via-[#FF4D6D] to-[#E76F51]" : "from-[#D62828] via-[#E76F51] to-[#FF4D6D]"} bg-clip-text text-transparent blur-2xl opacity-50 -z-10`}>
                        David Gomes
                    </div>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="space-y-8"
                >
                    <p className={`text-3xl md:text-4xl ${isDarkMode ? "text-gray-300" : "text-[#444]"} font-light`}>
                        <span className={`${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} font-mono text-2xl`}>&lt;</span>
                        <span className="mx-2">Desenvolvedor Full Stack</span>
                        <span className={`${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} font-mono text-2xl`}>
                            /&gt;
                        </span>
                    </p>
                    <div className="flex justify-center space-x-6 pt-1">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <a href="https://github.com/DavGomess" target="_blank" rel="noopener noreferrer">
                                <Button
                                    size="lg"
                                    className={`bg-gradient-to-r from-[#D62828] to-[#E76F51] hover:from-[#D62828] hover:to-[#FF4D6D] text-white text-lg px-8 py-4 group shadow-lg ${isDarkMode ? "shadow-[#D62828]/25" : "shadow-[#2B2D42]/25"}`}
                                >
                                    <Github className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                                    GitHub
                                </Button>
                            </a>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <motion.a
                                href="https://linkedin.com/in/DavGomess" target="_blank" rel="noopener noreferrer">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className={`border-[#D62828] ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} hover:bg-[#D62828] hover:text-white text-lg px-8 py-4 group backdrop-blur-sm`}
                                >
                                    <Linkedin className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                                    Linkedin
                                </Button>
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

