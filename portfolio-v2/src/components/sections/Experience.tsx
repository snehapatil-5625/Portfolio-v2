import React from 'react';

const experiences = [
    {
        role: "Software Engineer",
        company: "Anthaathi Private Limited",
        period: "Jan 2023 - Present",
        description: "Leading the development of a flagship SaaS platform using React, Node.js, and AWS. Optimized database queries by 40% and improved frontend performance.",
        tech: ["Next.js", "Tailwind CSS", "Baseui", "Shopify"]
    },
    {
        role: "Software Engineer-Intern",
        company: "Anthaathi Private Limited",
        period: "Oct 2022 - Dec 2022",
        description: "Built responsive websites for multiple clients. Collaborated closely with designers to implement pixel-perfect UIs and smooth animations.",
        tech: ["JavaScript", "HTML/CSS", "React"]
    },
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24 relative">
            <div className="section-container">
                <div className="mb-16 space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-bold font-['Outfit'] tracking-tight text-left">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-l from-blue-500 to-purple-500 rounded-full mr-auto"></div>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="relative group grid md:grid-cols-12 gap-8 items-start"
                        >
                            {/* Timeline Connector Only on Desktop */}
                            <div className="hidden md:flex md:col-span-3 pt-6 flex-col items-end">
                                <span className="text-sm font-bold text-zinc-500 tracking-widest uppercase">
                                    {exp.period}
                                </span>
                                <div className="w-12 h-px bg-zinc-800 mt-4 group-hover:w-20 group-hover:bg-blue-500 transition-all duration-500"></div>
                            </div>

                            {/* Card */}
                            <div className="md:col-span-9 p-8 rounded-3xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 group-hover:bg-white/[0.04] transition-all duration-500 text-left">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg text-blue-500 font-medium">{exp.company}</p>
                                    </div>
                                    <span className="md:hidden text-xs font-bold text-zinc-500 tracking-widest uppercase">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-xs text-blue-400 font-medium"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
