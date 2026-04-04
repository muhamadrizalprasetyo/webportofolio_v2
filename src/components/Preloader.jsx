import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const step = Math.floor(Math.random() * 15) + 5;
                const next = prev + step;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onComplete(), 700); // Wait slightly on 100 before exiting
                    return 100;
                }
                return next;
            });
        }, 120);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[100] flex flex-col justify-end p-6 md:p-12 bg-[#050505] text-zinc-300 pointer-events-none"
        >
            <div className="flex justify-between items-end overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="font-heading text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter"
                >
                    <span>Muhamad Rizal</span>
                    <br />
                    <span className="text-zinc-600">Prasetyo<span className="text-brandRed">.</span></span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-heading text-6xl md:text-9xl lg:text-[12rem] font-black tracking-tighter text-brandRed leading-none overflow-hidden"
                >
                    <motion.span
                        key={progress}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="inline-block"
                    >
                        {progress}
                    </motion.span>
                    <span className="text-4xl md:text-6xl text-zinc-700 ml-2">%</span>
                </motion.div>
            </div>
            {/* Loading bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900">
                <motion.div
                    className="h-full bg-brandRed"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear", duration: 0.1 }}
                />
            </div>
        </motion.div>
    );
}
