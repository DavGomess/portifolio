import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

interface SkillsProps {
    isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
    return (
        <section id="skills" className="py-12 px-0 bg-gradient-to-b from-transparent via-[#D62828]/5 to-transparent" >
    <div className="container mx-auto max-w-7xl">
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r ${isDarkMode ? "from-[#D62828] to-[#FF4D6D]" : "from-[#D62828] to-[#E76F51]"} bg-clip-text text-transparent`}>
            Habilidades
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
            {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        className="group"
                    >
                        <Card
                            className={`${isDarkMode ? "bg-black/40" : "bg-[#FAFAFA]/40"} backdrop-blur-xl ${isDarkMode ? "border-[#D62828]/30" : "border-[#2B2D42]/30"} hover:border-[#D62828]/50 transition-all duration-500 h-full w-full sm:w-44 max-w-[13.5rem]`}
                        >
                            <CardContent className="p-4">
                                <div className="text-center">
                                    <div className="p-4 bg-gradient-to-br from-[#D62828]/20 to-[#E76F51]/20 rounded-xl mx-auto w-fit mb-4">
                                        <Icon className={`w-12 h-12 ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"}`} />
                                    </div>
                                    <h3 className={`text-base sm:text-lg md:text-xl font-semibold ${isDarkMode ? "text-white" : "text-[#2B2D42]"} mb-2`}>
                                        {skill.name}
                                    </h3>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                );
            })}
        </div>
    </div>
</section>
    )
}