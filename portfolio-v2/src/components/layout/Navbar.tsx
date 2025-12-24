import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 w-full z-[1000] flex justify-center px-6">
            <nav className={`w-full max-w-[1200px] transition-all duration-300 ease-in-out rounded-2xl border border-white/10 ${scrolled ? 'bg-[#0a0a0c]/80 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-5'
                }`}>
                <div className="px-8 flex justify-between items-center">
                    <a href="#home" className="text-2xl font-extrabold font-['Outfit'] tracking-tight">
                        <span className="text-gradient">Sneha Patil</span>
                    </a>

                    <div className="hidden md:flex items-center gap-10">
                        <ul className="flex gap-8">
                            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-primary px-5 py-2 text-sm">Resume</button>
                    </div>

                    <button className="md:hidden p-2 text-zinc-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
