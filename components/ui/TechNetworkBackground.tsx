"use client"

import { useEffect, useRef, useState } from "react"

interface TechNetworkBackgroundProps {
    isDarkMode: boolean
}

export default function TechNetworkBackground({ isDarkMode }: TechNetworkBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 640) // md breakpoint
        }

        updateIsMobile()
        window.addEventListener("resize", updateIsMobile)
        return () => window.removeEventListener("resize", updateIsMobile)
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d")
        if (!canvas || !ctx) return

        let width = window.innerWidth
        let height = window.innerHeight
        canvas.width = width
        canvas.height = height

        const dotCount = isMobile ? 30 : 80
        const speedFactor = isMobile ? 0.08 : 0.2
        const radius = isMobile ? 1.5 : 2

        const dots = Array.from({ length: dotCount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: Math.random() * speedFactor - speedFactor / 2,
            vy: Math.random() * speedFactor - speedFactor / 2,
        }))

        const draw = () => {
            ctx.clearRect(0, 0, width, height)

            ctx.fillStyle = isDarkMode ? "#d6282866" : "#2B2D424D"
            ctx.strokeStyle = isDarkMode ? "#ff4d6d66" : "#2B2D4233"

            dots.forEach((dot, i) => {
                ctx.beginPath()
                ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2)
                ctx.fill()

                for (let j = i + 1; j < dots.length; j++) {
                    const dx = dot.x - dots[j].x
                    const dy = dot.y - dots[j].y
                    const dist = dx * dx + dy * dy
                    if (dist < 9000) {
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
    }, [isDarkMode, isMobile])

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
