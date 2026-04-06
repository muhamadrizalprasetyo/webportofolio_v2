import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import foto from '../assets/foto.jpg';

export default function About() {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="py-16 md:py-32 px-6 md:px-12 bg-[#050505] relative z-10 flex items-center justify-center min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none"></div>
            <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-10 lg:gap-24 items-center relative z-10">

                {/* Avatar — 3D Tilt Interaction */}
                <div className="lg:w-1/3 flex justify-center order-2 lg:order-1">
                    <motion.div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative group w-full max-w-[280px] md:max-w-[320px] lg:max-w-[400px] cursor-pointer"
                    >
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-brandRed blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full"></div>

                        {/* Image Container */}
                        <div
                            style={{ transform: "translateZ(50px)" }}
                            className="w-full aspect-[4/5] rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-zinc-900/50 backdrop-blur-3xl relative overflow-hidden transform transition-all duration-500 group-hover:border-brandRed/50 shadow-2xl"
                        >
                            <motion.img
                                src={foto}
                                alt="Muhamad Rizal Prasetyo"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                initial={{ filter: "grayscale(100%) brightness(0.8)" }}
                                whileHover={{ filter: "grayscale(0%) brightness(1.1)" }}
                            />

                            {/* Inner glow sweep */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-tr from-brandRed/0 via-white/15 to-brandRed/0"
                                initial={{ x: "-100%", y: "100%" }}
                                whileHover={{ x: "100%", y: "-100%" }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                            />

                            {/* Overlay Texture */}
                            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            style={{ transform: "translateZ(80px)" }}
                            className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-zinc-100 text-black px-6 py-3 rounded-full font-heading font-bold text-xs md:text-sm shadow-xl hidden md:block"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Open for Work
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="lg:w-2/3 text-[1.05rem] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-black text-zinc-700 leading-[1.4] order-1 lg:order-2"
                >
                    <motion.p variants={item} className="mb-5 md:mb-8">
                        Saya <span className="text-zinc-100 hover:text-brandRed transition-colors duration-500 cursor-default">Muhamad Rizal Prasetyo</span> — Mahasiswa Teknologi Informasi yang membangun di persimpangan <span className="text-zinc-100 cursor-default">hardware, jaringan, dan software modern</span>.
                    </motion.p>
                    <motion.p variants={item} className="mb-5 md:mb-8">
                        Dari <span className="text-zinc-100 cursor-default">merakit mikrokontroler Arduino</span>, mengkonfigurasi <span className="text-zinc-100 cursor-default">infrastruktur jaringan Cisco</span>, hingga membangun <span className="text-zinc-100 cursor-default">web interaktif berbasis React</span> — saya tidak hanya belajar teori, tapi <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500 cursor-default">membangun hal nyata yang berfungsi</span>.
                    </motion.p>
                    <motion.p variants={item}>
                        Dipercaya sebagai <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandRed to-red-400 border-b-2 border-brandRed/40 pb-1 cursor-default">Peraih Medali Emas Olimpiade Informatika Nasional</span> dan pemimpin aktif di HIMA TI — saya membawa semangat kompetitif ke dalam setiap baris kode.
                    </motion.p>
                </motion.div>

            </div>
        </section>
    );
}
