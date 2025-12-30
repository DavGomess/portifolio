import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

interface ContactProps {
    isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
    return (
        <section id="contact" className="py-24 px-6" >
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r ${isDarkMode ? "from-[#D62828] to-[#FF4D6D]" : "from-[#D62828] to-[#E76F51]"} bg-clip-text text-transparent`}>
                    Contatos
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div
                        className={`${isDarkMode ? "bg-black/40" : "bg-[#FAFAFA]/40"} backdrop-blur-xl border ${isDarkMode ? "border-[#D62828]/30" : "border-[#2B2D42]/30"} rounded-2xl p-12`}
                    >
                        <p
                            className={`text-2xl ${isDarkMode ? "text-gray-300" : "text-[#444]"} mb-12 max-w-3xl mx-auto leading-relaxed`}>
                            Conecte-se comigo através destes canais e vamos conversar sobre ideias, projetos e oportunidades.
                        </p>
                        <div className="flex justify-center mb-12">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <a href="mailto:davidgcontato7@gmail.com">
                                    <Button
                                        size="lg"
                                        className={`w-full max-w-xs mx-auto bg-gradient-to-r from-[#D62828] to-[#E76F51] hover:from-[#D62828] hover:to-[#FF4D6D] text-white text-xl px-8 py-4 group shadow-lg ${isDarkMode ? "shadow-[#D62828]/25" : "shadow-[#2B2D42]/25"}`}                    >
                                        <Mail className="mr-1 h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
                                        davidgcontato7@gmail.com
                                        <ArrowRight className="ml-1 h-7 w-7 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                </a>
                            </motion.div>
                        </div>
                        <div className="flex justify-center space-x-12">
                            <motion.a
                                href="https://github.com/DavGomess" 
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className={`${isDarkMode ? "text-gray-400" : "text-[#444]"} hover:text-[#D62828] transition-colors duration-300`}
                            >
                                <Github className="w-12 h-12" />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/DavGomess"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                className={`${isDarkMode ? "text-gray-400" : "text-[#444]"} hover:text-[#D62828] transition-colors duration-300`}
                            >
                                <Linkedin className="w-12 h-12" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}