import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

const projects = [
    {
        id: 1,
        title: "Auto Engine Car Service",
        role: "Fullstack Developer",
        org: "Personal Project",
        desc: "Sistem manajemen bengkel digital berbasis web untuk mengelola status servis otomatis, generate invoice, dan mendata rekam jejak pelanggan.",
        image: "https://images.unsplash.com/photo-1625047509168-a71c663f70b2?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "IoT Smart Charity Box",
        role: "IoT Engineer",
        org: "HMTI UNIPI",
        desc: "Kotak amal interaktif berbasis mikrokontroler IoT yang memutar suara ucapan terima kasih secara otomatis saat sensor mendeteksi uang masuk.",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Arduino Bluetooth RC Car",
        role: "Hardware Engineer",
        org: "Personal Project",
        desc: "Mobil Remote Control (RC) rancangan kustom yang dirakit dan diprogram menggunakan mikrokontroler Arduino dengan konektivitas Bluetooth smartphone.",
        image: "https://images.unsplash.com/photo-1592862086435-0816a13d78c0?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Robot Pramusaji (Baki)",
        role: "Robotics Engineer",
        org: "Personal Project",
        desc: "Robot pramusaji (waiter) otomatis pengantar makanan menggunakan sensor navigasi dan kontrol penyeimbang agar baki tetap stabil saat berjalan.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Smart Trash Bin (Uno R3)",
        role: "Project Lead",
        org: "Personal Project",
        desc: "Inovasi tempat sampah pintar terintegrasi sensor sentuh dan kontrol aktuator untuk memisahkan sampah otomatis. Melatih hardware integration.",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Olimpiade HMTI 2025",
        role: "Ketua Panitia",
        org: "HMTI UNIPI",
        desc: "Menyelenggarakan Cisco Packet Tracer Challenge berbasis SKKNI untuk menguji kompetensi jaringan tingkat nasional yang diikuti puluhan peserta.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    }
];

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 80, damping: 25 });
    const mouseYSpring = useSpring(y, { stiffness: 80, damping: 25 });

    // Lower max rotation = smoother, less GPU work
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

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

    return (
        <div style={{ perspective: "2000px" }} className="w-[85vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] flex-shrink-0 relative">
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    willChange: "transform"
                }}
                className="w-full group cursor-pointer flex flex-col relative z-10"
            >
                {/* Giant Hollow Background Number — smaller on mobile */}
                <div
                    className="absolute -top-8 md:-top-32 -right-4 md:-right-16 text-[6rem] md:text-[16rem] font-heading font-black opacity-20 md:opacity-30 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay z-0 select-none"
                    style={{ WebkitTextStroke: "2px #E50914", color: "transparent" }}
                >
                    0{index + 1}
                </div>

                <div
                    className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 relative z-10 shadow-2xl"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100 filter grayscale group-hover:grayscale-0"
                    />

                    {/* Description overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent flex flex-col justify-end p-8 md:p-12 opacity-100 transition-opacity duration-500">
                        <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 drop-shadow-2xl">
                            <p className="text-zinc-200 font-sans text-sm md:text-lg leading-relaxed mb-6 font-medium max-w-xl">
                                {project.desc}
                            </p>
                            <span className="inline-block bg-white text-black px-6 py-3 rounded-full text-xs font-black font-heading tracking-widest uppercase hover:bg-brandRed hover:text-white transition-colors">
                                View Case Study
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-4 relative z-20 group-hover:px-6 transition-all duration-500">
                    <p className="text-brandRed font-bold text-sm tracking-widest uppercase flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-brandRed inline-block relative overflow-hidden">
                            <motion.span
                                className="absolute inset-0 bg-white"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5 }}
                            />
                        </span>
                        {project.role} &middot; {project.org}
                    </p>
                    <h3 className="text-4xl md:text-5xl font-heading font-black text-zinc-100 tracking-tight leading-tight group-hover:text-brandRed transition-colors">
                        {project.title}
                    </h3>
                </div>
            </motion.div>
        </div>
    );
};

export default function Projects() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    return (
        <section ref={targetRef} className="relative h-[500vh] bg-[#020202]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 md:gap-32 px-6 md:px-24 items-center">

                    {/* Header item */}
                    <div className="w-[85vw] md:w-[40vw] flex-shrink-0 flex flex-col justify-center translate-y-[-10%] md:translate-y-0 relative z-20">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-5xl md:text-[8rem] font-heading font-black italic uppercase tracking-tighter text-zinc-100 leading-none drop-shadow-2xl"
                        >
                            Selected <br />
                            <span className="text-brandRed">Works</span>
                        </motion.h2>
                        <p className="mt-4 md:mt-8 text-zinc-400 font-sans max-w-sm text-sm md:text-base">
                            Scroll horizontally to interact with my featured 3D project showcases.
                        </p>
                        <p className="mt-4 text-zinc-600 text-xs uppercase tracking-widest font-bold block md:hidden">← Swipe to explore →</p>
                    </div>

                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}

                    {/* End spacer */}
                    <div className="w-[10vw] flex-shrink-0"></div>

                </motion.div>
            </div>
        </section>
    );
}
