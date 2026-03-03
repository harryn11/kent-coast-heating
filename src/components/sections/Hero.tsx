import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowDown, Check } from 'lucide-react';
import { SplitText } from '../ui/SplitText';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.hero-image', {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      delay: 0.5
    });

    gsap.from('.hero-badge', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      stagger: 0.2
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-transparent z-10" />
        <img
          src="/hero-boiler-bathroom.jpg"
          alt="Premium Boiler and Bathroom Specialist"
          className="hero-image w-full h-full object-cover opacity-90"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto text-center space-y-6 lg:space-y-8">

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-stone-900 leading-[0.9]">
          <SplitText delay={0.2}>Whitstable Comfort,</SplitText>
          <br />
          <SplitText delay={0.4} className="text-brand-primary">Done Right.</SplitText>
        </h1>

        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-stone-600 font-light leading-relaxed mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          Kent Coast Heating Ltd: Experts in luxury bathroom transformations, high-efficiency boiler installations, and smart heating across Whitstable.
        </p>

        <div className="flex justify-center gap-6 mb-2">
          <div className="hero-badge flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] uppercase tracking-wider font-bold text-orange-700">
            <Check className="w-3 h-3" />
            Gas Safe Registered
          </div>
          <div className="hero-badge flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] uppercase tracking-wider font-bold text-orange-700">
            <Check className="w-3 h-3" />
            VBA Accredited
          </div>
        </div>

        <div className="pt-8 lg:pt-12 flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-secondary text-white rounded-full font-bold text-lg hover:bg-brand-secondary/90 transition-all duration-300 shadow-lg shadow-brand-secondary/20 hover:-translate-y-1 flex items-center justify-center gap-2 group">
              Get a Free Quote
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-bold text-lg hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1">
              See Our Work
            </button>
          </div>
        </div>

        <div className="mt-12 lg:mt-20 py-6 px-10 flex flex-wrap justify-center items-center gap-10 opacity-0 animate-fade-in-up bg-white/40 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)]" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
          <span className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">Partnered With</span>
          <div className="flex flex-wrap justify-center items-center gap-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <span className="text-xl font-black text-stone-800 tracking-tighter">WORCESTER</span>
            <span className="text-xl font-black text-stone-800 tracking-tighter">VAILLANT</span>
            <span className="text-xl font-black text-stone-800 tracking-tighter">BAXI</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowDown className="w-6 h-6 text-stone-400" />
      </div>
    </section>
  );
};
