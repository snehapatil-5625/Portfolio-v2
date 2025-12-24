import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-[#0a0a0c]/30">
            <div className="section-container">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="flex-1">
                        <div className="space-y-8 animate-[fadeInUp_1s_ease_out_forwards]">
                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-5xl font-bold font-['Outfit'] tracking-tight">
                                    About <span className="text-gradient">Me</span>
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            </div>

                            <p className="text-lg text-zinc-400 leading-relaxed">
                                I am a passionate Full Stack Developer with a deep-rooted love for clean code and elegant UI.
                                My goal is to breathe life into digital concepts using modern tech stacks.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Experience", val: "3+ Years", color: "blue" },
                                    { label: "Projects", val: "10+ Total", color: "purple" }
                                ].map((stat) => (
                                    <div key={stat.label} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
                                        <h3 className={`text-2xl font-bold text-${stat.color}-500 group-hover:scale-110 transition-transform origin-left`}>
                                            {stat.val}
                                        </h3>
                                        <p className="text-xs text-zinc-500 uppercase font-bold tracking-tighter mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-zinc-400">
                                I specialize in <span className="text-white font-medium">React, TypeScript, and Node.js</span>.
                                Beyond code, I enjoy exploring motion design and interaction patterns that make the web feel more human.
                            </p>

                            <div className="pt-4">
                                <a href="#contact" className="group text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                    Let's create something modern
                                    <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative z-10 aspect-square max-w-[400px] ml-auto rounded-3xl overflow-hidden glass-effect p-3 transform rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl">
                            <div className="w-full h-full bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-800 text-7xl font-black">
                                SP
                            </div>
                        </div>
                        {/* Accents */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-[80px] rounded-full -z-10 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
