import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const scrollYText = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Lower stiffness = smoother, less janky
    const smoothX = useSpring(mouseX, { damping: 60, stiffness: 200 });

    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        // Reduced from 30 to 15px for subtler parallax
        const xResult = ((e.clientX / innerWidth) - 0.5) * 15;
        mouseX.set(xResult);
    };

    const nameVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden"
        >
            {/* Massive Hollow Background Marquee — hidden on mobile for performance */}
            <motion.div
                className="absolute top-1/2 left-0 -translate-y-1/2 font-heading font-black whitespace-nowrap text-transparent opacity-[0.03] pointer-events-none max-w-none text-[18rem] lg:text-[30rem] z-0 select-none will-change-transform hidden sm:block"
                style={{
                    WebkitTextStroke: "2px #E50914",
                    x: useTransform(scrollYProgress, [0, 1], ["5%", "-40%"])
                }}
            >
                INNOVATOR — LEADER — RIZAL —
            </motion.div>

            <motion.div
                style={{ y: scrollYText, opacity, x: smoothX }}
                className="z-10 flex flex-col items-start max-w-7xl mx-auto w-full will-change-transform"
            >
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-brandRed font-sans font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm mb-6 md:mb-8"
                >
                    // IT Innovator &amp; Leader
                </motion.p>

                <motion.h1
                    variants={nameVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-[3.2rem] sm:text-[5rem] md:text-[7rem] lg:text-[11rem] font-heading font-black leading-[0.85] tracking-tighter uppercase text-zinc-100 flex flex-col relative z-20"
                >
                    <motion.span variants={itemVariants} className="block hover:text-brandRed transition-colors duration-300 cursor-default">Muhamad</motion.span>
                    <motion.span variants={itemVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-400 italic hover:from-brandRed hover:to-red-500 transition-all duration-500 cursor-default">Rizal</motion.span>
                    <motion.span variants={itemVariants} className="block hover:text-brandRed transition-colors duration-300 cursor-default">Prasetyo<span className="text-brandRed">.</span></motion.span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 md:mt-16 flex items-center gap-6 md:gap-12"
                >
                    <div className="w-10 md:w-32 h-[2px] bg-brandRed flex-shrink-0"></div>
                    <p className="text-zinc-400 font-sans max-w-sm md:max-w-md text-sm md:text-lg leading-relaxed font-medium">
                        Membangun ekosistem teknologi yang efektif, elegan, dan berdampak nyata.
                    </p>
                </motion.div>
            </motion.div>

            {/* Interactive Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4 z-20"
            >
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-sans">Scroll</span>
                <div className="w-[1px] h-12 md:h-16 bg-zinc-800 overflow-hidden relative">
                    <motion.div
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-full h-1/2 bg-brandRed absolute top-0"
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    );
}
