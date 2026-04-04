import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';
import { Download } from 'lucide-react';

export default function Contact() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
    const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = ((e.clientX / innerWidth) - 0.5) * 50;
        const y = ((e.clientY / innerHeight) - 0.5) * 50;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section ref={ref} onMouseMove={handleMouseMove} className="pt-32 pb-16 px-6 md:px-12 bg-[#050505] relative min-h-screen flex flex-col justify-between overflow-hidden">
            {/* Giant radial glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[80vw] md:w-[800px] h-[800px] bg-brandRed rounded-full opacity-10 blur-[150px] pointer-events-none"></div>

            <div className="flex-1 flex flex-col justify-center items-center text-center relative z-10 gap-10">
                <motion.p
                    style={{ opacity, scale }}
                    className="text-brandRed font-bold tracking-[0.4em] uppercase text-xs md:text-sm mt-12 bg-zinc-900/50 backdrop-blur-md px-8 py-3 rounded-full border border-zinc-800 shadow-2xl"
                >
                    Open For Opportunities
                </motion.p>

                <motion.h2
                    style={{ opacity, scale, x: smoothX, y: smoothY }}
                    className="text-[4rem] md:text-[8rem] lg:text-[14rem] font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 uppercase tracking-tighter leading-none hover:from-brandRed hover:to-red-900 transition-colors duration-700 cursor-pointer drop-shadow-2xl z-20"
                >
                    <a href="mailto:mhmddrizal20@gmail.com">
                        Let's Talk
                    </a>
                </motion.h2>

                <motion.div style={{ opacity }} className="mt-8 z-30">
                    <MagneticButton>
                        <a href="/CV FINAL.pdf" download className="group relative inline-flex items-center gap-4 bg-brandRed text-white px-8 md:px-12 py-5 md:py-6 text-sm md:text-xl font-heading font-black uppercase tracking-widest rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(229,9,20,0.5)]">
                            <span className="relative z-10 flex items-center gap-3 md:gap-4 group-hover:text-black transition-colors mix-blend-difference">
                                Unduh CV <Download size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
                        </a>
                    </MagneticButton>
                </motion.div>
            </div>

            <div className="mt-32 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 font-bold uppercase tracking-widest text-[10px] md:text-xs relative z-10 border-t border-zinc-900/80 gap-6 md:gap-0">
                <p className="hover:text-zinc-300 transition-colors">© {new Date().getFullYear()} MUHAMAD RIZAL PRASETYO.</p>
                <div className="flex gap-6 md:gap-8">
                    <a href="https://wa.me/6288211178673" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
                    <a href="https://instagram.com/rzlcobraa" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
                    <a href="mailto:mhmddrizal20@gmail.com" className="hover:text-white transition-colors">Email</a>
                </div>
            </div>
        </section>
    );
}
