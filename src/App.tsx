import { MotionConfig } from 'motion/react';
import { AmbientBackground } from './components/layout/AmbientBackground';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { TechStack } from './sections/TechStack';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Volunteering } from './sections/Volunteering';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { ScrollProgress } from './components/layout/ScrollProgress';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative isolate z-10 min-h-screen flex flex-col text-[#F8FAFC]">
        <ScrollProgress />
        <AmbientBackground />
        <Navbar />
        <main id="main-content" className="relative z-10 flex-1">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
          <Volunteering />
          <Achievements />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </MotionConfig>
  );
}
