import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectsProps {
    isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
    return (
        <section id="projects" className="py-24 px-6" >
            <div className="container mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r ${isDarkMode ? "from-[#D62828] to-[#FF4D6D]" : "from-[#D62828] to-[#E76F51]"} bg-clip-text text-transparent`}>
                    Projetos
                </motion.h2>
                <div className="grid lg:grid-cols-2 gap-8 justify-center">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={"group"}
                        >
                            <Card
                                className={`${isDarkMode ? "bg-black/40" : "bg-[#FAFAFA]/40"} backdrop-blur-xl ${isDarkMode ? "border-[#D62828]/30" : "border-[#2B2D42]/30"} hover:border-[#D62828]/50 transition-all duration-500 h-full overflow-hidden`}
                            >
                                <CardContent className="p-0">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image || "/dashboard.png"}
                                            alt={project.title}
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        {project.featured && (
                                            <div className="absolute top-4 right-4">
                                                <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#D62828] to-[#E76F51] text-white text-xs rounded-full">
                                                    Destaque
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-start justify-between mb-6">
                                            <div>
                                                <h3
                                                    className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-[#2B2D42]"} mb-2 group-hover:text-[#D62828] transition-colors duration-300`}
                                                >
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <div className="flex space-x-3">
                                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className={`border-[#D62828] ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} hover:bg-[#D62828] hover:text-white transition-all duration-300`}
                                                        >
                                                            <Github className="w-4 h-4 mr-2" />
                                                            Code
                                                        </Button>
                                                    </a>
                                                </motion.div>
                                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                                    <a
                                                        href={project.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className={`border-[#D62828] ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} hover:bg-[#D62828] hover:text-white transition-all duration-300`}
                                                        >
                                                            <ExternalLink className="w-4 h-4 mr-2" />
                                                            Live
                                                        </Button>
                                                    </a>
                                                </motion.div>
                                            </div>
                                        </div>
                                        <p className={`${isDarkMode ? "text-gray-300" : "text-[#444]"} mb-6 leading-relaxed text-lg`}>
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            {project.tech.map((tech) => (
                                                <motion.span
                                                    key={tech}
                                                    whileHover={{ scale: 1.05 }}
                                                    className={`px-4 py-2 bg-[#D62828]/20 ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} rounded-full text-sm border border-[#D62828]/30 hover:bg-[#D62828]/30 transition-colors duration-300`}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}