import React, { useState, useEffect } from 'react';

const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"];

const Hero: React.FC = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleType = () => {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                setDisplayText(prev => prev.substring(0, prev.length - 1));
                setTypingSpeed(50);
            } else {
                setDisplayText(prev => currentRole.substring(0, prev.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && displayText === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex, typingSpeed]);

    return (
        <section id="home" className="min-h-screen flex items-center pt-32 pb-12 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full -z-10 animate-pulse delay-700"></div>

            <div className="section-container">
                <div className="max-w-4xl animate-[fadeInUp_1s_ease_out_forwards]">
                    <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold tracking-widest uppercase mb-8">
                        Building the future of web
                    </span>

                    <h1 className="text-5xl lg:text-[5.5rem] leading-[1] font-bold mb-8 font-['Outfit'] tracking-tight">
                        Hi, I'm <span className="text-gradient">Sneha Patil</span>
                    </h1>

                    <h2 className="text-2xl lg:text-4xl font-semibold mb-10 h-10 text-zinc-300">
                        I'm a <span className="text-blue-500">{displayText}</span>
                        <span className="animate-[blink_0.7s_infinite] text-blue-500 ml-1">|</span>
                    </h2>

                    <p className="text-lg lg:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
                        Crafting premium digital experiences by merging aesthetics with functionality.
                        I build high-performance, accessible web applications that leave a lasting impression.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <button className="btn btn-primary shadow-lg shadow-blue-500/20">View My Work</button>
                        <button className="btn border border-white/10 hover:bg-white/5 backdrop-blur-md">Contact Me</button>
                    </div>
                </div>

                {/* Visual Element */}
                <div className="mt-20 relative animate-[fadeInUp_1.2s_ease_out_forwards]">
                    <div className="w-[300px] h-[100px] bg-blue-500/5 blur-[50px] rounded-full absolute -bottom-10 left-0"></div>
                    <div className="text-zinc-500 text-sm font-medium tracking-widest opacity-50 flex flex-col items-start gap-4">
                        <span>SCROLL DOWN</span>
                        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent ml-6"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
