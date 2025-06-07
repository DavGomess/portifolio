import React, { useEffect, useRef } from "react"

const TechNetworkBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement | null
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let width = window.innerWidth
        let height = window.innerHeight
        canvas.width = width
        canvas.height = height

        const particles: {
            x: number
            y: number
            vx: number
            vy: number
        }[] = []
        const numParticles = Math.floor(width * 0.15)

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
            })
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height)

            const isDark = document.documentElement.classList.contains("dark")
            const pointColor = isDark ? "#ffffff44" : "#00000044"
            const lineColor = isDark ? "#ffffff22" : "#00000022"

            particles.forEach((p) => {
                ctx.beginPath()
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
                ctx.fillStyle = pointColor
                ctx.fill()
            })

            for (let i = 0; i < numParticles; i++) {
                for (let j = i + 1; j < numParticles; j++) {
                    const a = particles[i]
                    const b = particles[j]
                    const dx = a.x - b.x
                    const dy = a.y - b.y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 100) {
                        ctx.beginPath()
                        ctx.moveTo(a.x, a.y)
                        ctx.lineTo(b.x, b.y)
                        ctx.strokeStyle = lineColor
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                }
            }

            particles.forEach((p) => {
                p.x += p.vx
                p.y += p.vy
                if (p.x < 0 || p.x > width) p.vx *= -1
                if (p.y < 0 || p.y > height) p.vy *= -1
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
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
        />
    )
}

export default TechNetworkBackground
