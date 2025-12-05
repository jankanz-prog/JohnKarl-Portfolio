"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ScrollAnimationProps {
    children: React.ReactNode
    className?: string
    delay?: number
    variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight"
}

export function ScrollAnimation({
    children,
    className = "",
    delay = 0,
    variant = "fadeUp",
}: ScrollAnimationProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: "-50px" })

    const variants = {
        fadeUp: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        scaleIn: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        },
        slideLeft: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        },
        slideRight: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[variant]}
            transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
