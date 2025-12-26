import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import { ThemeProvider } from './context/ThemeContext';
import './styles/index.css';
import Skills from './components/sections/Skills';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-[var(--bg-color)] min-h-screen transition-colors duration-300">
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
        <footer className="py-12 border-t border-[var(--border-color)]">
          <div className="section-container flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[var(--text-secondary)] text-sm">© 2024 Sneha Patil. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">Github</a>
              <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">LinkedIn</a>
              <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">X</a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
