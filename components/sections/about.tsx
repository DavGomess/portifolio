"use client";

import { motion } from "framer-motion";
import { Database, Code, GitBranch, Server } from "lucide-react";

interface AboutProps {
    isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
    return (
        <section id="about" className="py-24 px-6" >
            <div className="container mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r ${isDarkMode ? "from-[#D62828] to-[#FF4D6D]" : "from-[#D62828] to-[#E76F51]"} bg-clip-text text-transparent`}>
                    Sobre Mim
                </motion.h2>
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl w-full"
                    >
                        <div
                            className={`${isDarkMode ? "bg-black/40" : "bg-[#FAFAFA]/40"} backdrop-blur-xl border ${isDarkMode ? "border-[#D62828]/30" : "border-[#2B2D42]/30"} rounded-2xl p-8`}
                        >
                            <p className={`text-xl ${isDarkMode ? "text-gray-300" : "text-[#444]"} leading-relaxed mb-6`}>
                                Sou estudante de Análise e Desenvolvimento de Sistemas e desenvolvo projetos web práticos. Gosto de resolver problemas com lógica, aprender rápido e transformar ideias em soluções fáceis de usar. Busco oportunidade para aplicar e ampliar minhas habilidades.
                            </p>
                            <p className={`text-xl ${isDarkMode ? "text-gray-300" : "text-[#444]"} leading-relaxed mb-8`}>
                                Atualmente concentro meus estudos em desenvolvimento web com foco em back-end, construindo soluções orientadas à resolução de problemas reais.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className={`flex items-center space-x-3 p-2 sm:p-3 ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} p-3 rounded-lg bg-[#D62828]/10 border border-[#D62828]/20`}>
                                    <Code className="w-6 h-6" />
                                    <span className="text-base sm:text-lg">Desenvolvimento Web</span>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className={`flex items-center space-x-3 p-2 sm:p-3 ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} p-3 rounded-lg bg-[#D62828]/10 border border-[#D62828]/20`}>
                                    <Server className="w-6 h-6" />
                                    <span className="text-base sm:text-lg">APIs e Servidores</span>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className={`flex items-center space-x-3 p-2 sm:p-3 ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} p-3 rounded-lg bg-[#D62828]/10 border border-[#D62828]/20`}>
                                    <Database className="w-6 h-6" />
                                    <span className="text-base sm:text-lg">Modelagem de Dados</span>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className={`flex items-center space-x-3 p-2 sm:p-3 ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} p-3 rounded-lg bg-[#D62828]/10 border border-[#D62828]/20`}>
                                    <GitBranch className="w-6 h-6" />
                                    <span className="text-base sm:text-lg">Lógica e Estruturas</span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}