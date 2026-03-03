import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Volume2, Smartphone, Leaf } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ProductShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // The image wrapper uses Tailwind's 'sticky top-0' for a native sticky effect,
    // so we don't need GSAP ScrollTrigger to pin it here.

    // Feature text animations
    gsap.utils.toArray('.feature-text').forEach((text: any) => {
      gsap.from(text, {
        opacity: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          toggleActions: 'play reverse play reverse'
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-stone-900 text-white py-24 min-h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-transparent to-stone-900 z-10" />
        <img
          ref={imageRef}
          src="/showcase-boiler.jpg"
          alt="Premium Boiler Engineering"
          className="w-full h-full object-cover opacity-60 scale-110"
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 space-y-[80vh] pt-[50vh] pb-[50vh]">
        <div className="feature-text text-center space-y-8 backdrop-blur-2xl bg-stone-900/60 p-16 rounded-[3rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
          <div className="w-20 h-20 bg-brand-secondary/20 rounded-full flex items-center justify-center mx-auto text-brand-secondary mb-8 border border-brand-secondary/30">
            <Zap className="w-10 h-10" />
          </div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight italic">Boiler Excellence</h2>
          <p className="text-xl md:text-3xl text-stone-300 font-light leading-relaxed max-w-3xl mx-auto">
            High-efficiency gas boiler upgrades. <span className="text-brand-secondary font-normal">Save on energy</span> with the latest A-rated technology from trusted brands.
          </p>
        </div>

        <div className="feature-text text-center space-y-8 backdrop-blur-2xl bg-stone-900/60 p-16 rounded-[3rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
          <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto text-blue-400 mb-8 border border-blue-500/30">
            <Volume2 className="w-10 h-10" />
          </div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight italic">Luxury Bathrooms</h2>
          <p className="text-xl md:text-3xl text-stone-300 font-light leading-relaxed max-w-3xl mx-auto">
            Bespoke bathroom design and installation. From contemporary wet rooms to classic suites, we handle everything from tiling to plumbing.
          </p>
        </div>

        <div className="feature-text text-center space-y-8 backdrop-blur-2xl bg-stone-900/60 p-16 rounded-[3rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
          <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto text-orange-400 mb-8 border border-orange-500/30">
            <Smartphone className="w-10 h-10" />
          </div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight italic">Smart Heating</h2>
          <p className="text-xl md:text-3xl text-stone-300 font-light leading-relaxed max-w-3xl mx-auto">
            Control your comfort from anywhere. Professional installation of Hive, Nest, and smart TRV systems for total efficiency.
          </p>
        </div>

        <div className="feature-text text-center space-y-8 backdrop-blur-2xl bg-stone-900/60 p-16 rounded-[3rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
          <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto text-orange-400 mb-8 border-orange-500/30">
            <Leaf className="w-10 h-10" />
          </div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight italic">Expert Care</h2>
          <p className="text-xl md:text-3xl text-stone-300 font-light leading-relaxed max-w-3xl mx-auto">
            Decades of local plumbing and heating experience. Reliability you can trust for every tap, radiator, and boiler in Whitstable.
          </p>
        </div>
      </div>
    </section>
  );
};
