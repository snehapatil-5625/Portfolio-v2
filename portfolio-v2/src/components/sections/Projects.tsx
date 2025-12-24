import React from 'react';

const projects = [
    {
        title: "EcoCloud Dashboard",
        category: "Web Application",
        description: "An advanced cloud monitoring dashboard for green energy data visualizations.",
        tech: ["Next.js", "Tailwind", "Three.js", "Chart.js"],
        image: "https://images.unsplash.com/photo-1551288049-bbda38a594a0?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "NeuroLink App",
        category: "Mobile Design",
        description: "AI-driven wellness application focused on cognitive focus and mental clarity.",
        tech: ["React Native", "Firebase", "TensorFlow"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
    },
    {
        title: "CyberFlow Wallet",
        category: "Web3 / Blockchain",
        description: "Secure, decentralized wallet for managing multi-chain assets with zero-knowledge proofs.",
        tech: ["Solidity", "TypeScript", "Ethers.js"],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2164&auto=format&fit=crop"
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="section-container">
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-bold font-['Outfit'] tracking-tight">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <p className="text-zinc-400 max-w-lg text-lg">
                            Selected works that showcase my technical expertise and design philosophy.
                        </p>
                    </div>
                    <button className="text-blue-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        See All Works
                        <span>→</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative rounded-3xl overflow-hidden glass-effect border border-white/5 hover:border-blue-500/30 transition-all duration-500 bg-[#0a0a0c]"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-all z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 rounded-lg bg-[#030303]/60 backdrop-blur-md border border-white/10 text-blue-400 text-xs font-bold tracking-widest uppercase">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 space-y-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[10px] text-zinc-400 uppercase font-black"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 flex items-center justify-between">
                                    <a href="#" className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                                        Learn More <span className="text-blue-500">→</span>
                                    </a>
                                    <div className="flex gap-4">
                                        {/* Icons Placeholder */}
                                        <div className="w-5 h-5 bg-white/10 rounded-full"></div>
                                        <div className="w-5 h-5 bg-white/10 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
