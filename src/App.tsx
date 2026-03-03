import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Hero } from './components/sections/Hero';
import { Trust } from './components/sections/Trust';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { Team } from './components/sections/Team';
import { Reviews } from './components/sections/Reviews';
import { Footer } from './components/sections/Footer';
import { Navbar } from './components/sections/Navbar';
import { Process } from './components/sections/Process';
import { ChatButton } from './components/ui/ChatButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Synchronize ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Refresh ScrollTrigger after a short delay and again on window load
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.removeEventListener('load', handleLoad);
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="font-sans antialiased text-stone-900 bg-stone-50 selection:bg-brand-secondary/30 selection:text-brand-primary">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <ProductShowcase />
        <Process />
        <Team />
        <Reviews />
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
}

export default App;
