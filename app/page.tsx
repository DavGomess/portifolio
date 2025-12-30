"use client"

import { useState, useEffect } from "react"
import TechNetworkBackground from "@/components/ui/TechNetworkBackground";
import { tabs } from "@/data/tabs"
import Header from "@/components/layout/Header";
import Home from "@/components/sections/home";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Portfolio() {

  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeTab, setActiveTab] = useState("home")

  useEffect(() => {
    const mouseShadow = document.querySelector<HTMLElement>(".mouse-shadow")

    const moveCursor = (e: MouseEvent) => {
      if (mouseShadow) {
        const x = e.clientX - 30
        const y = e.clientY - 30

        mouseShadow.style.left = `${x}px`
        mouseShadow.style.top = `${y}px`
      }
    }

    document.addEventListener("mousemove", moveCursor)
    return () => document.removeEventListener("mousemove", moveCursor)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map((tab) => document.getElementById(tab.id)).filter(Boolean)
      const scrollPosition = window.scrollY + 100;

      if (scrollPosition < (document.getElementById("about")?.offsetTop || 0) - 100) {
        setActiveTab("home")
        return
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(section.id);
          break;
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="mouse-shadow"></div>
      <div
        className={`min-h-screen ${isDarkMode ? "bg-black" : "bg-[#FAFAFA]"} ${isDarkMode ? "text-white" : "text-[#333]"} relative overflow-hidden `}
      >
        {/* Fundo tecnológico animado contínuo */}
        <div className="pointer-events-none">
          <TechNetworkBackground isDarkMode={isDarkMode} />
        </div>

        {/* Fixed Header */}
        <Header
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {/* secao home */}
        <Home isDarkMode={isDarkMode} />

        {/* secao sobre */}
        <About isDarkMode={isDarkMode} />

        {/* secao habilidades */}
        <Skills isDarkMode={isDarkMode} />

        {/* secao projetos */}
        <Projects isDarkMode={isDarkMode} />

        {/* secao contato */}
        <Contact isDarkMode={isDarkMode} />

        {/* Footer */}
        <footer
          className={`${isDarkMode ? "bg-black/90" : "bg-[#FAFAFA]/90"} border-t ${isDarkMode ? "border-[#D62828]/30" : "border-[#2B2D42]/30"} py-12 backdrop-blur-xl`}>
          <div className="container mx-auto px-6 text-center">
            <p className={`${isDarkMode ? "text-gray-400" : "text-[#444]"} font-mono text-lg`}>
              © Copyright 2025 Feito por David Gomes
            </p>
          </div>
        </footer>
      </div >
    </>
  )
}
