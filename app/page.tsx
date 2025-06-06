"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Download,
  ArrowRight,
  Terminal,
  Cpu,
  Server,
  Layers,
  Brain,
  Rocket,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


const tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

const skills = [
  { name: "JavaScript", level: 95, icon: Code, category: "Frontend" },
  { name: "React/Next.js", level: 92, icon: Globe, category: "Frontend" },
  { name: "Node.js", level: 88, icon: Server, category: "Backend" },
  { name: "TypeScript", level: 90, icon: Terminal, category: "Language" },
  { name: "Python", level: 85, icon: Cpu, category: "Language" },
  { name: "Database", level: 87, icon: Database, category: "Backend" },
  { name: "DevOps", level: 82, icon: Layers, category: "Infrastructure" },
  { name: "Mobile Dev", level: 80, icon: Smartphone, category: "Mobile" },
]

const projects = [
  {
    title: "Neural Analytics Platform",
    description:
      "Advanced AI-powered analytics dashboard with real-time data visualization, machine learning insights, and predictive modeling capabilities for enterprise clients.",
    tech: ["React", "Python", "TensorFlow", "D3.js", "WebGL", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: true,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Quantum E-Commerce",
    description:
      "Next-generation e-commerce platform with blockchain integration, AR product visualization, and AI-driven personalized recommendations.",
    tech: ["Next.js", "Solidity", "Three.js", "Stripe", "MongoDB"],
    github: "#",
    live: "#",
    featured: true,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "CyberSync Workspace",
    description:
      "Real-time collaborative workspace with holographic interfaces, quantum encryption, and seamless team synchronization.",
    tech: ["React", "WebRTC", "Socket.io", "Rust", "WebAssembly"],
    github: "#",
    live: "#",
    featured: false,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Matrix Code Generator",
    description:
      "Advanced code generation tool using GPT-4 integration with syntax highlighting and real-time collaboration features.",
    tech: ["TypeScript", "OpenAI API", "Monaco Editor", "Redis"],
    github: "#",
    live: "#",
    featured: false,
    image: "/placeholder.svg?height=300&width=400",
  },
]

const LINE_COUNT = 40;

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeTab, setActiveTab] = useState("home")
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const mouseShadow = document.querySelector(".mouse-shadow")

    const moveCursor = (e: MouseEvent) => {
      if (mouseShadow) {
        const x = e.clientX - 30 // Center the 60px shadow
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
      const scrollPosition = window.scrollY + 100 // Offset for header

      // Special case for home section
      if (scrollPosition < (document.getElementById("about")?.offsetTop || 0) - 100) {
        if (activeTab !== "home") {
          setActiveTab("home")
        }
        return
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          const sectionId = section.id
          if (sectionId !== activeTab) {
            setActiveTab(sectionId)
          }
          break
        }
      }
    }

    // Set initial active tab based on scroll position
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeTab])

  const scrollToSection = (sectionId: string) => {
    console.log("Scrolling to:", sectionId);
    setActiveTab(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Dentro do componente React:
  const techLinePositions = useMemo(() => {
  if (!hasMounted) return [];
  return [...Array(LINE_COUNT)].map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 20 + Math.random() * 15,
  }));
}, [hasMounted]);

  return (
    <>
      <style jsx global>{`
        .mouse-shadow {
          position: fixed;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          background: radial-gradient(circle, rgba(251, 75, 78, 0.3) 0%, rgba(251, 75, 78, 0) 70%);
          filter: blur(30px);
          transition: transform 0.1s ease-out;
          will-change: transform;
        }
      `}</style>
      <div className="mouse-shadow"></div>
      <div
        className={`min-h-screen ${isDarkMode ? "bg-black" : "bg-[#FAFAFA]"} ${isDarkMode ? "text-white" : "text-[#333]"} relative overflow-hidden `}
      >
        {/* Continuous Animated Tech Background */}
        <div className="fixed inset-0 z-0">

          {/* Large Rotating Orbital Structures */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`orbital-${i}`}
              className="absolute"
              style={{
                left: `${5 + (i % 4) * 22}%`,
                top: `${5 + Math.floor(i / 4) * 25}%`,
                width: "300px",
                height: "300px",
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 25 + i * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <svg width="300" height="300" viewBox="0 0 300 300" className="opacity-15">
                <circle
                  cx="150"
                  cy="150"
                  r="120"
                  fill="none"
                  stroke={isDarkMode ? "rgb(214, 40, 40)" : "rgb(43, 45, 66)"}
                  strokeWidth="1"
                  strokeDasharray="8,8"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="90"
                  fill="none"
                  stroke={isDarkMode ? "rgb(214, 40, 40)" : "rgb(43, 45, 66)"}
                  strokeWidth="0.8"
                  opacity="0.7"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="60"
                  fill="none"
                  stroke={isDarkMode ? "rgb(214, 40, 40)" : "rgb(43, 45, 66)"}
                  strokeWidth="0.6"
                  opacity="0.5"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="30"
                  fill="none"
                  stroke={isDarkMode ? "rgb(214, 40, 40)" : "rgb(43, 45, 66)"}
                  strokeWidth="0.4"
                  opacity="0.3"
                />
                {/* Cross lines */}
                <line
                  x1="150"
                  y1="30"
                  x2="150"
                  y2="270"
                  stroke={isDarkMode ? "rgb(214, 40, 40)" : "rgb(43, 45, 66)"}
                  strokeWidth="0.5"
                  opacity="0.4"
                />
                <line
                  x1="30"
                  y1="150"
                  x2="270"
                  y2="150"
                  stroke={isDarkMode ? "rgb(214, 40, 40)" : "rgb(43, 45, 66)"}
                  strokeWidth="0.5"
                  opacity="0.4"
                />
                {/* Diagonal lines */}
                <line
                  x1="85"
                  y1="85"
                  x2="215"
                  y2="215"
                  stroke={isDarkMode ? "rgb(214, 40, 40)" : "rgb(43, 45, 66)"}
                  strokeWidth="0.3"
                  opacity="0.3"
                />
                <line
                  x1="215"
                  y1="85"
                  x2="85"
                  y2="215"
                  stroke={isDarkMode ? "rgb(214, 40, 40)" : "rgb(43, 45, 66)"}
                  strokeWidth="0.3"
                  opacity="0.3"
                />
              </svg>
            </motion.div>
          ))}

          {/* Medium Rotating Wireframes */}
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={`wireframe-${i}`}
              className="absolute"
              style={{
                width: "120px",
                height: "120px",
                left: `${2 + (i % 8) * 12}%`,
                top: `${10 + Math.floor(i / 8) * 20 + (i % 4) * 20}%`,
              }}
              animate={{
                rotate: [0, -360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 18 + i * 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-20">
                <polygon
                  points="60,10 100,40 100,80 60,110 20,80 20,40"
                  fill="none"
                  stroke={isDarkMode ? "rgb(214, 40, 40)" : "rgb(43, 45, 66)"}
                  strokeWidth="1"
                />
                <polygon
                  points="60,25 85,42.5 85,77.5 60,95 35,77.5 35,42.5"
                  fill="none"
                  stroke={isDarkMode ? "rgb(214, 40, 40)" : "rgb(43, 45, 66)"}
                  strokeWidth="0.6"
                  opacity="0.7"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="15"
                  fill="none"
                  stroke={isDarkMode ? "rgb(214, 40, 40)" : "rgb(43, 45, 66)"}
                  strokeWidth="0.4"
                  opacity="0.5"
                />
              </svg>
            </motion.div>
          ))}

          {/* Floating Tech Lines */}



          <AnimatePresence>
            {techLinePositions.map((pos, i) => (
              <motion.div
                key={`tech-line-${i}`}
                className="absolute"
                layout // Isso ativa transições automáticas ao mudar estilo/posição
                initial={{ opacity: 0, scaleX: 0.8 }}
                animate={{ opacity: 0.6, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0.5, transition: { duration: 3 } }}
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  width: "150px",
                  height: "2px",
                }}
                transition={{
                  duration: pos.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </AnimatePresence>

          {/* Circuit Network Background */}
          <svg className="absolute inset-0 w-full h-full opacity-8">
            {[...Array(30)].map((_, i) => {
              const x1 = Math.random() * 100
              const y1 = Math.random() * 100
              const x2 = Math.random() * 100
              const y2 = Math.random() * 100
              return (
                <motion.line
                  key={`circuit-${i}`}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke={isDarkMode ? "rgb(214, 40, 40)" : "rgb(43, 45, 66)"}
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{
                    duration: 12 + Math.random() * 8,
                    delay: Math.random() * 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              )
            })}

            {/* Additional Circuit Patterns */}
            {[...Array(25)].map((_, i) => {
              const startX = Math.random() * 100
              const startY = Math.random() * 100
              const endX = startX + (Math.random() - 0.5) * 40
              const endY = startY + (Math.random() - 0.5) * 40
              const midX = (startX + endX) / 2 + (Math.random() - 0.5) * 20
              const midY = (startY + endY) / 2 + (Math.random() - 0.5) * 20

              return (
                <motion.path
                  key={`circuit-pattern-${i}`}
                  d={`M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`}
                  fill="none"
                  stroke={isDarkMode ? "rgb(214, 40, 40)" : "rgb(43, 45, 66)"}
                  strokeWidth="0.3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.2 }}
                  transition={{
                    duration: 15 + Math.random() * 10,
                    delay: Math.random() * 8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              )
            })}
          </svg>

          {/* Small Rotating Geometric Elements */}
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={`geo-${i}`}
              className={`absolute border ${isDarkMode ? "border-[#D62828]/25" : "border-[#2B2D42]/25"}`}
              style={{
                width: "40px",
                height: "40px",
                left: `${5 + (i % 8) * 12}%`,
                top: `${10 + Math.floor(i / 8) * 15 + (i % 4) * 20}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}

          {/* Micro Geometric Elements */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`micro-geo-${i}`}
              className={`absolute ${isDarkMode ? "border-[#D62828]/15" : "border-[#2B2D42]/15"}`}
              style={{
                width: "20px",
                height: "20px",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderRadius: i % 3 === 0 ? "50%" : "0",
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 20 + i * 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}

          {/* Floating Connection Nodes */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className={`absolute w-2 h-2 rounded-full ${isDarkMode ? "bg-[#D62828]/20" : "bg-[#2B2D42]/20"}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 50, -30, 0],
                y: [0, -40, 60, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 25 + Math.random() * 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20">
          {/* Fixed Header */}

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
                  {/* ––– Toggle de tema ––– */}
                  <label className="inline-flex items-center relative">
                    <input
                      className="peer hidden"
                      id="toggle"
                      type="checkbox"
                      checked={isDarkMode}
                      onChange={() => setIsDarkMode(!isDarkMode)}
                    />
                    <div
                      className={`relative w-[88px] h-[40px] cursor-pointer bg-[#FAFAFA] peer-checked:bg-black rounded-full
              after:absolute after:content-[''] after:w-[32px] after:h-[32px]
              after:bg-gradient-to-r from-[#b91c1c] to-[#ef4444]
              peer-checked:from-[#7f1d1d] peer-checked:to-[#dc2626]
              after:rounded-full after:top-[3.2px] after:left-[4.1px] active:after:w-[50px]
              peer-checked:after:left-[82px] peer-checked:after:translate-x-[-100%]
              shadow-sm duration-300 after:duration-300 border ${isDarkMode ? "border-[#5a5a5a]" : "border-[#2B2D42]/20"
                        }`}
                    >
                      {/* Ícone de Sol (esquerda) */}
                      <svg
                        viewBox="0 0 24 24"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5
                fill-yellow-400 peer-checked:opacity-0 transition-opacity duration-300"
                      >
                        <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5…" />
                      </svg>
                      {/* Ícone de Lua (direita) */}
                      <svg
                        viewBox="0 0 24 24"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5
                fill-[#2B2D42] opacity-0 peer-checked:opacity-100 transition-opacity duration-300"
                      >
                        <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725…" />
                      </svg>
                    </div>
                  </label>

                  {/* Botão “Resume” */}
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${isDarkMode ? "border-[#D62828] text-[#D62828]" : "border-[#2B2D42] text-[#2B2D42]"
                      } hover:bg-[#D62828] hover:text-white transition-all duration-300`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Button>

                  {/* Botão mobile “hambúrguer” (apenas em md<) */}
                  <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>

              {/** Apenas UMA instância do dropdown abaixo, condicional em menuOpen **/}
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
                          scrollToSection(tab.id);
                          setMenuOpen(false);
                        }}
                        className={`px-4 py-2 text-sm font-medium text-left ${activeTab === tab.id
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
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20" >
          <div className="text-center max-w-6xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-7xl md:text-9xl font-bold mb-8 relative"
            >
              <span
                className={`bg-gradient-to-r ${isDarkMode ? "from-[#D62828] via-[#FF4D6D] to-[#E76F51]" : "from-[#D62828] via-[#E76F51] to-[#FF4D6D]"} bg-clip-text text-transparent`}
              >
                David Gomes
              </span>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? "from-[#D62828] via-[#FF4D6D] to-[#E76F51]" : "from-[#D62828] via-[#E76F51] to-[#FF4D6D]"} bg-clip-text text-transparent blur-2xl opacity-50 -z-10`}
              >
                David Gomes
              </div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="space-y-8"
            >
              <p className={`text-3xl md:text-4xl ${isDarkMode ? "text-gray-300" : "text-[#444]"} font-light`}>
                <span className={`${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} font-mono text-2xl`}>&lt;</span>
                <span className="mx-2">Full-Stack Developer</span>
                <span className={`${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} font-mono text-2xl`}>
                  /&gt;
                </span>
              </p>
              <p
                className={`text-xl ${isDarkMode ? "text-gray-400" : "text-[#444]"} max-w-4xl mx-auto leading-relaxed`}
              >
                Architecting the future of digital experiences through cutting-edge technology, neural networks, and
                immersive web applications that push the boundaries of innovation.
              </p>
              <div className="flex justify-center space-x-6 pt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className={`bg-gradient-to-r from-[#D62828] to-[#E76F51] hover:from-[#D62828] hover:to-[#FF4D6D] text-white text-lg px-8 py-4 group shadow-lg ${isDarkMode ? "shadow-[#D62828]/25" : "shadow-[#2B2D42]/25"}`}
                  >
                    <Github className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                    GitHub
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className={`border-[#D62828] ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} hover:bg-[#D62828] hover:text-white text-lg px-8 py-4 group backdrop-blur-sm`}
                  >
                    <Linkedin className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    LinkedIn
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6" >
          <div className="container mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r ${isDarkMode ? "from-[#D62828] to-[#FF4D6D]" : "from-[#D62828] to-[#E76F51]"} bg-clip-text text-transparent`}
            >
              Neural Profile
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
                    I'm a quantum-enhanced developer with over 7 years of experience crafting next-generation digital
                    experiences. My expertise spans neural network architectures, immersive AR/VR applications, and
                    scalable cloud infrastructures.
                  </p>
                  <p className={`text-xl ${isDarkMode ? "text-gray-300" : "text-[#444]"} leading-relaxed mb-8`}>
                    Currently pioneering the intersection of AI and web development, I specialize in building systems
                    that push the boundaries of what's possible in the digital realm.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center space-x-3 ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} p-3 rounded-lg bg-[#D62828]/10 border border-[#D62828]/20`}
                    >
                      <Brain className="w-6 h-6" />
                      <span className="text-lg">Neural Networks</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center space-x-3 ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} p-3 rounded-lg bg-[#D62828]/10 border border-[#D62828]/20`}
                    >
                      <Cpu className="w-6 h-6" />
                      <span className="text-lg">Quantum Computing</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center space-x-3 ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} p-3 rounded-lg bg-[#D62828]/10 border border-[#D62828]/20`}
                    >
                      <Globe className="w-6 h-6" />
                      <span className="text-lg">Web3 Technologies</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center space-x-3 ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} p-3 rounded-lg bg-[#D62828]/10 border border-[#D62828]/20`}
                    >
                      <Rocket className="w-6 h-6" />
                      <span className="text-lg">AR/VR Development</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-gradient-to-b from-transparent via-[#D62828]/5 to-transparent" >
          <div className="container mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r ${isDarkMode ? "from-[#D62828] to-[#FF4D6D]" : "from-[#D62828] to-[#E76F51]"} bg-clip-text text-transparent`}
            >
              Tech Arsenal
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
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
                    className={`${isDarkMode ? "bg-black/40" : "bg-[#FAFAFA]/40"} backdrop-blur-xl ${isDarkMode ? "border-[#D62828]/30" : "border-[#2B2D42]/30"} hover:border-[#D62828]/50 transition-all duration-500 h-full`}
                  >
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-[#D62828]/20 to-[#E76F51]/20 rounded-xl mx-auto w-fit mb-4">
                          <skill.icon className={`w-12 h-12 ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"}`} />
                        </div>
                        <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-[#2B2D42]"} mb-2`}>
                          {skill.name}
                        </h3>
                        <span className={`text-sm ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} font-mono`}>
                          {skill.category}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6" >
          <div className="container mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r ${isDarkMode ? "from-[#D62828] to-[#FF4D6D]" : "from-[#D62828] to-[#E76F51]"} bg-clip-text text-transparent`}
            >
              Digital Constructs
            </motion.h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className={`group ${project.featured ? "lg:col-span-2" : ""}`}
                >
                  <Card
                    className={`${isDarkMode ? "bg-black/40" : "bg-[#FAFAFA]/40"} backdrop-blur-xl ${isDarkMode ? "border-[#D62828]/30" : "border-[#2B2D42]/30"} hover:border-[#D62828]/50 transition-all duration-500 h-full overflow-hidden`}
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        {project.featured && (
                          <div className="absolute top-4 right-4">
                            <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#D62828] to-[#E76F51] text-white text-xs rounded-full">
                              FEATURED
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
                              <Button
                                variant="outline"
                                size="sm"
                                className={`border-[#D62828] ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} hover:bg-[#D62828] hover:text-white transition-all duration-300`}
                              >
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <Button
                                variant="outline"
                                size="sm"
                                className={`border-[#D62828] ${isDarkMode ? "text-[#D62828]" : "text-[#D62828]"} hover:bg-[#D62828] hover:text-white transition-all duration-300`}
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live
                              </Button>
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

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6" >
          <div className="container mx-auto max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r ${isDarkMode ? "from-[#D62828] to-[#FF4D6D]" : "from-[#D62828] to-[#E76F51]"} bg-clip-text text-transparent`}
            >
              Neural Link
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
                  className={`text-2xl ${isDarkMode ? "text-gray-300" : "text-[#444]"} mb-12 max-w-3xl mx-auto leading-relaxed`}
                >
                  Ready to build the future together? Let's connect and create something extraordinary that pushes the
                  boundaries of digital innovation and transforms ideas into reality.
                </p>
                <div className="flex justify-center mb-12">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className={`bg-gradient-to-r from-[#D62828] to-[#E76F51] hover:from-[#D62828] hover:to-[#FF4D6D] text-white text-xl px-12 py-6 group shadow-lg ${isDarkMode ? "shadow-[#D62828]/25" : "shadow-[#2B2D42]/25"}`}
                    >
                      <Mail className="mr-4 h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
                      david.gomes@neural.dev
                      <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </motion.div>
                </div>
                <div className="flex justify-center space-x-12">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`${isDarkMode ? "text-gray-400" : "text-[#444]"} hover:text-[#D62828] transition-colors duration-300`}
                  >
                    <Github className="w-12 h-12" />
                  </motion.a>
                  <motion.a
                    href="#"
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

        {/* Footer */}
        <footer 
          className={`${isDarkMode ? "bg-black/90" : "bg-[#FAFAFA]/90"} border-t ${isDarkMode ? "border-[#D62828]/30" : "border-[#2B2D42]/30"} py-12 backdrop-blur-xl`
          }
        >
          <div className="container mx-auto px-6 text-center">
            <p className={`${isDarkMode ? "text-gray-400" : "text-[#444]"} font-mono text-lg`}>
              ©  David Gomes
            </p>
          </div>
        </footer>
      </div >
    </>
  )
}
