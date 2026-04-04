import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth, snappy spring for core dot
    const coreSpring = { damping: 25, stiffness: 600, mass: 0.1 };
    const coreX = useSpring(cursorX, coreSpring);
    const coreY = useSpring(cursorY, coreSpring);

    // Slower, trailing spring for aura ring
    const auraSpring = { damping: 30, stiffness: 150, mass: 0.8 };
    const auraX = useSpring(cursorX, auraSpring);
    const auraY = useSpring(cursorY, auraSpring);

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable =
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer');

            setIsHovered(isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* The Aura ring — no box-shadow for perf */}
            <motion.div
                style={{
                    x: auraX,
                    y: auraY,
                    translateX: "-50%",
                    translateY: "-50%",
                    willChange: "transform"
                }}
                animate={{
                    scale: isHovered ? 2 : 1,
                    opacity: isHovered ? 0 : 0.35,
                }}
                transition={{ duration: 0.2 }}
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-brandRed pointer-events-none z-[9998] hidden md:block"
            />

            {/* The Core dot */}
            <motion.div
                style={{
                    x: coreX,
                    y: coreY,
                    translateX: "-50%",
                    translateY: "-50%",
                    willChange: "transform",
                    backgroundColor: '#E50914'
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    opacity: isHovered ? 0.8 : 1,
                }}
                transition={{ duration: 0.15 }}
                className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] hidden md:block"
            />
        </>
    );
}
