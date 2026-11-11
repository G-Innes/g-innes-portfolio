import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { TracingBeam } from './components/ui/tracing-beam';
import { Footer } from './components/Footer';

function App() {
  return (
    // reducedMotion="user" drops transform animations for visitors who ask for less motion
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-ink text-gray-100 bg-[radial-gradient(rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:28px_28px]">
        <Navbar />
        <main>
          <Home />
          <TracingBeam>
            <About />
            <Projects />
            <Contact />
          </TracingBeam>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
