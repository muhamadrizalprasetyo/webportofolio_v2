import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "Operator Produksi",
        company: "PT. Kiantaka Rasa",
        date: "MEI 2024 - SEKARANG",
        desc: "Menangani proses mixing dan packing berstandar mutu ketat ISO 9001:2015 & ISO 22000:2018."
    },
    {
        role: "Picker",
        company: "PT. Midi Utama Indonesia Tbk.",
        date: "SEPT 2023 - MEI 2024",
        desc: "Mengelola logistik dan penyiapan barang secara presisi untuk distribusi retail serta Stock Opname (SO)."
    },
    {
        role: "IT Support",
        company: "PT. Arthawenasakti Gemilang",
        date: "APR 2022 - MEI 2022",
        desc: "Memastikan stabilitas infrastruktur jaringan, hardware workstation, dan melakukan Restore Data/troubleshooting."
    }
];

const techStack = [
    // Frontend
    { name: "React JS", icon: "https://cdn.simpleicons.org/react/61DAFB", category: "Frontend" },
    { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF", category: "Frontend" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", category: "Frontend" },
    { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/ffffff", category: "Frontend" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", category: "Frontend" },
    // Backend & Tools
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", category: "Backend" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4", category: "Backend" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", category: "Backend" },
    { name: "REST API", icon: "https://cdn.simpleicons.org/fastapi/009688", category: "Backend" },
    // DevOps & Tooling
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", category: "Tools" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff", category: "Tools" },
    { name: "Linux CLI", icon: "https://cdn.simpleicons.org/linux/ffffff", category: "Tools" },
    { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC", category: "Tools" },
    // Hardware & Network
    { name: "Arduino", icon: "https://cdn.simpleicons.org/arduino/00979D", category: "Hardware" },
    { name: "Cisco", icon: "https://cdn.simpleicons.org/cisco/1BA0D7", category: "Hardware" },
    { name: "Raspberry Pi", icon: "https://cdn.simpleicons.org/raspberrypi/A22846", category: "Hardware" },
    { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C", category: "Hardware" },
];

const categoryColors = {
    Frontend: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    Backend: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    Tools: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    Hardware: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
};

export default function ExperienceStack() {
    return (
        <section className="py-20 md:py-32 bg-[#0a0a0a] relative z-10 border-y border-zinc-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Timeline */}
                <div className="lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 flex items-center gap-4"
                    >
                        <Briefcase className="text-brandRed" size={36} />
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-zinc-100 uppercase tracking-tight italic">Experience</h2>
                    </motion.div>

                    <div className="space-y-8 relative border-l border-zinc-800/50 ml-4 md:ml-6 pl-6 md:pl-12">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="relative group"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[29px] md:-left-[53px] top-6 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-zinc-600 group-hover:border-brandRed group-hover:bg-brandRed group-hover:scale-125 transition-all duration-500 z-20"></div>

                                {/* Glass Card */}
                                <div className="p-6 md:p-8 rounded-3xl bg-zinc-900/30 backdrop-blur-xl border border-white/5 group-hover:border-brandRed/40 group-hover:bg-zinc-900/60 transition-all duration-500 shadow-2xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brandRed/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                    <div className="mb-3 relative z-10">
                                        <span className="inline-block px-3 py-1 bg-black/50 border border-white/10 rounded-full text-[10px] font-black text-brandRed uppercase tracking-widest">{exp.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-heading font-black text-zinc-200 uppercase tracking-tight group-hover:text-white transition-colors relative z-10">{exp.role}</h3>
                                    <p className="text-white/60 font-bold text-xs tracking-widest mb-5 mt-1 relative z-10">{exp.company}</p>
                                    <p className="text-zinc-400 font-sans text-sm md:text-base leading-relaxed relative z-10">{exp.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack — Interactive Logo Grid */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-black text-zinc-100 uppercase tracking-tight mb-4"
                    >
                        Tech <span className="text-brandRed italic">Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-zinc-500 font-sans text-sm mb-10 tracking-widest uppercase"
                    >
                        Hover untuk detail · {techStack.length} teknologi
                    </motion.p>

                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {techStack.map((tech, i) => {
                            const cat = categoryColors[tech.category];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.04 }}
                                    whileHover={{ y: -6, scale: 1.05 }}
                                    className={`group relative flex flex-col items-center gap-2 p-4 rounded-2xl border ${cat.border} ${cat.bg} backdrop-blur-sm cursor-default transition-all duration-300 hover:border-opacity-60 hover:shadow-lg`}
                                >
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                    />
                                    <span className="text-zinc-400 group-hover:text-zinc-100 font-bold text-[10px] md:text-xs text-center tracking-widest transition-colors leading-tight">
                                        {tech.name}
                                    </span>
                                    <span className={`text-[8px] uppercase tracking-widest font-black ${cat.text} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                                        {tech.category}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}

