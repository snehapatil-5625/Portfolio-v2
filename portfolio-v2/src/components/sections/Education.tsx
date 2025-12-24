import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, School } from 'lucide-react';

const educationData = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Tatyasaheb Kore Institute of Engineering and Technology",
        duration: "2018 - 2022",
        icon: <GraduationCap className="w-5 h-5" />,
        achievements: [
            "I hold a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering from Tatyasaheb Kore Institute of Engineering and Technology, Warananagar, graduating with a 9.2 CGPA.",
        ]
    },
    {
        degree: "Higher Secondary Education (HSC)",
        institution: "Vidhyamandir Junior College",
        duration: "2016 - 2018",
        icon: <BookOpen className="w-5 h-5" />,
        achievements: [
            "Completed my Higher Secondary Education (HSC) from Vidhyamandir Junior College, Islampur, with a 74.62% score. This gave me a solid foundation in subjects that helped me pursue my career in computer engineering.",
        ]
    },
    {
        degree: "Secondary School Certificate (SSC)",
        institution: "Chatrapati Shivaji High School",
        duration: "2016",
        icon: <School className="w-5 h-5" />,
        achievements: [
            "Completed my Secondary School Certificate (SSC) from Chatrapati Shivaji High School, Ghunaki, with a 91.40% score. This achievement motivated me to choose the science stream for my further studies and career path.",
        ]
    }
];

const Education: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="education" className="py-24 relative overflow-hidden bg-[#030303]">
            <div className="section-container">
                <div className="mb-20 text-center space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-bold font-['Outfit'] tracking-tight">
                        Educational <span className="text-gradient">Journey</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto"></div>
                    <p className="text-zinc-400 max-w-xl mx-auto text-lg pt-2">
                        A timeline of my academic milestones and key technical foundations.
                    </p>
                </div>

                <div ref={containerRef} className="relative max-w-6xl mx-auto">
                    {/* Animated Central Line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-zinc-800">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-teal-500 to-blue-500 shadow-[0_0_15px_rgba(20,184,166,0.5)]"
                        />
                    </div>

                    <div className="space-y-16 md:space-y-24">
                        {educationData.map((edu, idx) => {
                            const isEven = idx % 2 === 0;

                            return (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal group">
                                    {/* Timeline Node */}
                                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-10 h-10 rounded-full bg-[#14b8a6] border-4 border-[#030303] flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.4)] z-20 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-[#030303]">
                                            {edu.icon}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        className={`ml-16 md:ml-0 md:w-[45%] p-8 rounded-3xl bg-[#0a0a0c]/40 border border-white/5 hover:border-teal-500/20 transition-all duration-300 relative group-hover:bg-[#0a0a0c]/60 ${isEven ? 'md:ml-auto' : 'md:mr-auto'
                                            }`}
                                    >
                                        <div className="flex flex-col gap-4 mb-6">
                                            <div className="flex items-center justify-between gap-4">
                                                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-bold tracking-widest uppercase">
                                                    <Calendar className="w-3 h-3" />
                                                    {edu.duration}
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1 group-hover:text-teal-400 transition-colors">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-teal-500/80 font-semibold text-base md:text-lg">
                                                    {edu.institution}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-4 border-t border-white/5">
                                            <div className="flex items-center gap-2 text-[#fbbf24] font-bold text-xs tracking-wider uppercase">
                                                <Award className="w-4 h-4" />
                                                Key Achievements
                                            </div>
                                            <ul className="space-y-3">
                                                {edu.achievements.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 group/item">
                                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#14b8a6] group-hover/item:scale-125 transition-transform"></div>
                                                        <span className="text-zinc-400 text-sm leading-relaxed group-hover/item:text-zinc-200 transition-colors">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
