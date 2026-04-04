import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Trophy, Star, Users, Award } from 'lucide-react';

// Animated counter hook
function useCounter(target, inView) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, target, {
            duration: 2,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (v) => setCount(Math.floor(v)),
        });
        return controls.stop;
    }, [inView, target]);
    return count;
}

const stats = [
    { value: 1, suffix: "🥇", label: "Gold Medal", sub: "Olimpiade Informatika Nasional" },
    { value: 6, suffix: "+", label: "Proyek Selesai", sub: "Hardware, Software & IoT" },
    { value: 3, suffix: "x", label: "Leadership", sub: "Kepemimpinan Organisasi" },
    { value: 2, suffix: "+", label: "Tahun Pengalaman", sub: "Industri & Akademik" },
];

const awards = [
    {
        icon: Trophy,
        color: "from-yellow-500 to-amber-600",
        glow: "rgba(234,179,8,0.3)",
        border: "border-yellow-500/40",
        title: "🥇 Medali Emas",
        event: "Olimpiade Informatika Nasional",
        org: "Tingkat Nasional",
        desc: "Berhasil meraih medali emas dalam olimpiade informatika yang diikuti peserta dari seluruh Indonesia.",
    },
    {
        icon: Star,
        color: "from-brandRed to-red-700",
        glow: "rgba(229,9,20,0.3)",
        border: "border-brandRed/40",
        title: "🏆 Ketua Panitia",
        event: "Olimpiade HMTI 2025",
        org: "HMTI UNIPI — Tingkat Nasional",
        desc: "Memimpin penyelenggaraan Cisco Packet Tracer Challenge berbasis SKKNI untuk peserta dari seluruh Indonesia.",
    },
    {
        icon: Users,
        color: "from-blue-500 to-indigo-600",
        glow: "rgba(59,130,246,0.3)",
        border: "border-blue-500/40",
        title: "👑 Pemimpin Organisasi",
        event: "HMTI UNIPI — Hima TI",
        org: "Universitas PGRI Indonesia",
        desc: "Dipercaya memimpin himpunan mahasiswa Teknik Informatika sebagai tokoh utama kepemimpinan kampus.",
    },
];

// Each stat as its own component so hook rules are respected
function StatCard({ stat, index, inView }) {
    const count = useCounter(stat.value, inView);
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm text-center group hover:border-brandRed/50 transition-colors duration-500"
        >
            <div className="text-3xl md:text-6xl font-heading font-black text-zinc-100 leading-none mb-2">
                {count}<span className="text-brandRed">{stat.suffix}</span>
            </div>
            <p className="text-zinc-200 font-bold text-xs md:text-sm uppercase tracking-widest">{stat.label}</p>
            <p className="text-zinc-600 text-[10px] md:text-xs mt-1 font-sans">{stat.sub}</p>
        </motion.div>
    );
}

export default function Achievements() {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="py-20 md:py-32 bg-[#050505] relative z-10 overflow-hidden">
            {/* Giant background text */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[20rem] font-heading font-black text-transparent opacity-[0.02] pointer-events-none select-none whitespace-nowrap"
                style={{ WebkitTextStroke: "2px #E50914" }}
            >
                PRESTASI
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 md:mb-20"
                >
                    <p className="text-brandRed font-bold tracking-[0.3em] uppercase text-xs mb-4">// Achievements</p>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-zinc-100 uppercase tracking-tighter leading-none">
                        Prestasi &amp; <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">Penghargaan</span>
                    </h2>
                </motion.div>

                {/* Stat Counters */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20">
                    {stats.map((stat, i) => (
                        <StatCard key={i} stat={stat} index={i} inView={inView} />
                    ))}
                </div>

                {/* Award Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {awards.map((award, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            className={`group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-zinc-900/30 backdrop-blur-xl border ${award.border} hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden cursor-default`}
                            style={{ boxShadow: `0 0 0 0 ${award.glow}` }}
                            whileHover={{ boxShadow: `0 0 60px 0 ${award.glow}` }}
                        >
                            {/* Background gradient glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none`}></div>

                            <div className="relative z-10">
                                <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${award.color} shadow-lg flex-shrink-0`}>
                                        <award.icon size={20} className="text-white" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 border border-zinc-800 px-3 py-1 rounded-full">
                                        {award.org}
                                    </span>
                                </div>

                                <h3 className="text-lg md:text-2xl font-heading font-black text-zinc-100 uppercase tracking-tight mb-1 group-hover:text-white transition-colors">
                                    {award.title}
                                </h3>
                                <p className={`text-transparent bg-clip-text bg-gradient-to-r ${award.color} font-bold text-xs md:text-sm uppercase tracking-widest mb-3`}>
                                    {award.event}
                                </p>
                                <p className="text-zinc-400 font-sans text-sm leading-relaxed">
                                    {award.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
