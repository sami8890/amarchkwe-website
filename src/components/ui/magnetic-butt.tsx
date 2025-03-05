"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface Props {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    cursorText?: string
}

export default function MagneticButton({ children, className = "", onClick, cursorText = "" }: Props) {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = buttonRef.current?.getBoundingClientRect()
        if (!rect) return

        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2))

        if (distance < 100) {
            const magneticPull = 0.4
            setPosition({
                x: (e.clientX - centerX) * magneticPull,
                y: (e.clientY - centerY) * magneticPull,
            })
        }
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <motion.button
            ref={buttonRef}
            className={`relative ${className}`}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            data-cursor-text={cursorText}
        >
            {children}
        </motion.button>
    )
}

