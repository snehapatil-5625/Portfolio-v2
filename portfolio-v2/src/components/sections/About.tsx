import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-[var(--bg-color)]">
            <div className="section-container">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="flex-1">
                        <div className="space-y-8 animate-[fadeInUp_1s_ease_out_forwards]">
                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-5xl font-bold font-['Outfit'] tracking-tight">
                                    About <span className="text-gradient">Me</span>
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full"></div>
                            </div>

                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                I am a passionate Full Stack Developer with a deep-rooted love for clean code and elegant UI.
                                My goal is to breathe life into digital concepts using modern tech stacks.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Experience", val: "3+ Years", color: "emerald" },
                                    { label: "Projects", val: "10+ Total", color: "sky" }
                                ].map((stat) => (
                                    <div key={stat.label} className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)]/20 transition-all group">
                                        <h3 className={`text-2xl font-bold text-[var(--accent-primary)] group-hover:scale-110 transition-transform origin-left`}>
                                            {stat.val}
                                        </h3>
                                        <p className="text-xs text-[var(--text-secondary)] uppercase font-bold tracking-tighter mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-[var(--text-secondary)]">
                                I specialize in <span className="text-[var(--text-primary)] font-medium">React, TypeScript, and Node.js</span>.
                                Beyond code, I enjoy exploring motion design and interaction patterns that make the web feel more human.
                            </p>

                            <div className="pt-4">
                                <a href="#contact" className="group text-[var(--text-primary)] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                    Let's create something modern
                                    <span className="text-[var(--accent-primary)] group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative z-10 aspect-square max-w-[400px] ml-auto rounded-3xl overflow-hidden glass-effect p-3 transform rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl">
                            <div className="w-full h-full bg-[var(--bg-card)] rounded-2xl flex items-center justify-center text-[var(--text-secondary)] text-7xl font-black">
                                SP
                            </div>
                        </div>
                        {/* Accents */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--accent-primary)]/5 blur-[80px] rounded-full -z-10 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
