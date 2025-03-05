"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

interface Props {
    children: React.ReactNode
}

export default function MagneticCursor({ children }: Props) {
    const [isHovered, setIsHovered] = useState(false)
    const [isMagnetic, setIsMagnetic] = useState(false)
    const [cursorText, setCursorText] = useState("")

    // Cursor positions with spring physics
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    // Smoothed cursor positions
    const smoothX = useSpring(cursorX, { damping: 25, stiffness: 250 })
    const smoothY = useSpring(cursorY, { damping: 25, stiffness: 250 })

    // Dot positions (follows cursor more closely)
    const dotX = useSpring(cursorX, { damping: 40, stiffness: 400 })
    const dotY = useSpring(cursorY, { damping: 40, stiffness: 400 })

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        window.addEventListener("mousemove", moveCursor)
        return () => {
            window.removeEventListener("mousemove", moveCursor)
        }
    }, [cursorX, cursorY])

    // Magnetic effect handler
    const handleMagneticMove = (event: React.MouseEvent<HTMLElement>) => {
        if (!isMagnetic) return

        const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const distance = Math.sqrt(Math.pow(event.clientX - centerX, 2) + Math.pow(event.clientY - centerY, 2))

        if (distance < 100) {
            const magneticPull = 0.4 // Adjust strength of magnetic effect
            cursorX.set(centerX + (event.clientX - centerX) * magneticPull)
            cursorY.set(centerY + (event.clientY - centerY) * magneticPull)
        }
    }

    return (
        <>
            {/* Main cursor circle */}
            <motion.div
                style={{
                    translateX: smoothX,
                    translateY: smoothY,
                }}
                animate={{
                    width: isHovered ? "20px" : "15px",
                    height: isHovered ? "20x" : "15px",
                    opacity: 1,
                }}
                className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            >
                <div
                    className={`relative w-full h-full ${isHovered ? "scale-150" : "scale-100"} transition-transform duration-200`}
                >
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border border-white/80 backdrop-blur-sm" />

                    {/* Text label */}
                    {isHovered && cursorText && (
                        <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium whitespace-nowrap">
                            {cursorText}
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Dot cursor */}
            <motion.div
                style={{
                    translateX: dotX,
                    translateY: dotY,
                }}
                className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            />

            {/* Wrap children with hover detection */}
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false)
                    setIsMagnetic(false)
                    setCursorText("")
                }}
                onMouseMove={handleMagneticMove}
            >
                {children}
            </div>
        </>
    )
}

