import React from 'react';

const skillCategories = [
    {
        title: "Frontend Development",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
        icon: (
            <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Backend & Database",
        skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "GraphQL"],
        icon: (
            <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        )
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "VS Code"],
        icon: (
            <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    }
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="section-container">
                <div className="mb-16 space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-bold font-['Outfit'] tracking-tight">
                        My <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <p className="text-zinc-400 max-w-xl text-lg">
                        A comprehensive set of tools and technologies I use to bring ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>

                            <div className="mb-6 p-4 rounded-2xl bg-white/[0.03] w-fit">
                                {category.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-zinc-400 hover:text-white hover:border-white/10 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
