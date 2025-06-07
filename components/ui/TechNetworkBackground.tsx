"use client"

import { useEffect, useRef } from "react"

interface TechNetworkBackgroundProps {
    isDarkMode: boolean
}

export default function TechNetworkBackground({ isDarkMode }: TechNetworkBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d")

        if (!canvas || !ctx) return

        let width = window.innerWidth
        let height = window.innerHeight
        canvas.width = width
        canvas.height = height

        const dots = Array.from({ length: 80 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: Math.random() * 0.5 - 0.25,
            vy: Math.random() * 0.5 - 0.25,
        }))

        const draw = () => {
            ctx.clearRect(0, 0, width, height)
            ctx.fillStyle = isDarkMode
                ? "#D62828ee"     // Tema escuro: vermelho com 93% opacidade
                : "#2B2D4280"     // Tema claro: cinza escuro com 50% opacidade

            // LINHAS
            ctx.strokeStyle = isDarkMode
                ? "#D62828bb"     // Tema escuro: vermelho com ~73% opacidade
                : "#2B2D4270"

            dots.forEach((dot, i) => {
                ctx.beginPath()
                ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2)
                ctx.fill()

                for (let j = i + 1; j < dots.length; j++) {
                    const dx = dot.x - dots[j].x
                    const dy = dot.y - dots[j].y
                    const dist = dx * dx + dy * dy

                    if (dist < 10000) {
                        ctx.beginPath()
                        ctx.moveTo(dot.x, dot.y)
                        ctx.lineTo(dots[j].x, dots[j].y)
                        ctx.stroke()
                    }
                }

                dot.x += dot.vx
                dot.y += dot.vy

                if (dot.x < 0 || dot.x > width) dot.vx *= -1
                if (dot.y < 0 || dot.y > height) dot.vy *= -1
            })

            requestAnimationFrame(draw)
        }

        draw()

        const handleResize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [isDarkMode])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
            style={{
                mixBlendMode: isDarkMode ? "lighten" : "darken",
                willChange: "transform",
                transform: "translateZ(0)",
            }}
        />
    )
}