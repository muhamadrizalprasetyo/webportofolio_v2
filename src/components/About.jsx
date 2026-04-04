import { motion } from 'framer-motion';

export default function About() {
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

                {/* Avatar — smaller and below text on mobile */}
                <div className="lg:w-1/3 flex justify-center order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative group perspective w-full max-w-[180px] md:max-w-[280px] lg:max-w-[320px]"
                    >
                        <div className="absolute inset-0 bg-brandRed blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full"></div>
                        <div className="w-full aspect-square rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-zinc-900/50 backdrop-blur-3xl flex items-center justify-center relative overflow-hidden transform transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-3 group-hover:border-brandRed/50 shadow-2xl">
                            <span className="font-heading font-black text-[4rem] md:text-[6rem] lg:text-[8rem] text-zinc-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-zinc-500 transition-all duration-700">MRP</span>

                            {/* Inner glow sweep */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-tr from-brandRed/0 via-white/10 to-brandRed/0"
                                initial={{ x: "-100%", y: "100%" }}
                                whileHover={{ x: "100%", y: "-100%" }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            />
                        </div>
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
