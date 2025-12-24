import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import './styles/index.css';

function App() {
  return (
    <div className="bg-[#030303] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>

      {/* Quick Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">© 2024 Sneha Patil. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">Github</a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">X</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
