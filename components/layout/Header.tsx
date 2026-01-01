import { tabs } from "@/data/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface HeaderProps {
    isDarkMode: boolean;
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
    activeTab: string;
    setActiveTab: (value: string) => void;
}

export default function Header({ isDarkMode, setIsDarkMode, activeTab, setActiveTab }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const scrollToSection = (sectionId: string) => {
        setActiveTab(sectionId)
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
        setMenuOpen(false)
    }

    const toggleTheme = () => setIsDarkMode((prev) => !prev);

    return (
        <div className="relative z-20">
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? "bg-black/90" : "bg-[#FAFAFA]/90"
                    } backdrop-blur-xl border-b ${isDarkMode ? "border-[#D62828]/30" : "border-[#2B2D42]/30"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <motion.div
                            className={`text-2xl font-bold bg-gradient-to-r ${isDarkMode ? "from-[#D62828] to-[#FF4D6D]" : "from-[#D62828] to-[#E76F51]"
                                } bg-clip-text text-transparent`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            {"<DG/>"}
                        </motion.div>

                        {/* Abas desktop */}
                        <div className="hidden md:flex space-x-6">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => {
                                        scrollToSection(tab.id);
                                        setMenuOpen(false);
                                    }}
                                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                        ? "text-[#D62828]"
                                        : isDarkMode
                                            ? "text-gray-400 hover:text-white"
                                            : "text-[#444] hover:text-[#2B2D42]"
                                        }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <motion.div
                                            className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${isDarkMode ? "from-[#D62828] to-[#FF4D6D]" : "from-[#D62828] to-[#E76F51]"
                                                }`}
                                            layoutId="activeTab"
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Botões de Toggle de Tema, Resume e Menu Mobile */}
                        <div className="flex items-center space-x-4">
                            {/* Toggle de tema */}
                            <label className="inline-flex items-center relative cursor-pointer select-none">
                                <input
                                    className="peer hidden"
                                    type="checkbox"
                                    checked={isDarkMode}
                                    onChange={toggleTheme}
                                />
                                <div
                                    className={`relative w-[88px] h-[40px] cursor-pointer bg-[#FAFAFA] peer-checked:bg-black rounded-full after:absolute after:content-[''] after:w-[32px] after:h-[32px] after:bg-gradient-to-r from-[#b91c1c] to-[#ef4444] peer-checked:from-[#7f1d1d] peer-checked:to-[#dc2626] after:rounded-full after:top-[3.2px] after:left-[4.1px] active:after:w-[50px] peer-checked:after:left-[82px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 border ${isDarkMode ? "border-[#5a5a5a]" : "border-[#2B2D42]/20"}`}
                                ></div>
                                <svg
                                    height="0"
                                    width="100"
                                    viewBox="0 0 24 24"
                                    data-name="Layer 1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-white peer-checked:opacity-60 absolute w-5 h-5 left-[10px] transition-opacity duration-300"
                                >
                                    <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
                                </svg>
                                <svg
                                    height="512"
                                    width="512"
                                    viewBox="0 0 24 24"
                                    data-name="Layer 1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`fill-[#2B2D42] opacity-60 peer-checked:opacity-100 ${isDarkMode ? "peer-checked:fill-[#e24444]" : "peer-checked:fill-[#D62828]"} absolute w-5 h-5 right-[10px] transition-all duration-300`}
                                >
                                    <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
                                </svg>
                            </label>

                            {/* Botão Resume */}
                            <a
                                href="/curriculo.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className={`${isDarkMode ? "border-[#D62828] text-[#D62828]" : "border-[#2B2D42] text-[#2B2D42]"
                                        } hover:bg-[#D62828] hover:text-white transition-all duration-300`}
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Currículo
                                </Button>
                            </a>

                            {/* Botão mobile “hambúrguer” (apenas em md<) */}
                            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/** Abas mobile **/}
                    <AnimatePresence>
                        {hasMounted && menuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden flex flex-col mt-4 space-y-2"
                            >
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setMenuOpen(false);
                                            setTimeout(() => {
                                                scrollToSection(tab.id);
                                            }, 100)
                                        }}
                                        className={`relative px-4 py-2 text-sm font-medium text-left ${activeTab === tab.id
                                            ? "text-[#D62828]"
                                            : isDarkMode
                                                ? "text-gray-400 hover:text-white"
                                                : "text-[#444] hover:text-[#2B2D42]"
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>
        </div>
    )
}