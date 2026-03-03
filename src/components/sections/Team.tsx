import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const engineers = [
  {
    name: "Your Name",
    role: "Founder & Master Plumber",
    image: "/avatar-1.png",
    quote: "I've been creating luxury bathrooms in Kent for 30 years. Craftsmanship is my only priority."
  },
  {
    name: "Your Name",
    role: "Lead Heating Engineer",
    image: "/avatar-2.png",
    quote: "Ensuring every boiler we install is perfectly balanced for maximum efficiency and savings."
  },
  {
    name: "Your Name",
    role: "Bathroom Designer",
    image: "/avatar-3.png",
    quote: "Great design turns a standard bathroom into a sanctuary. We focus on every detail."
  }
];

export const Team: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.team-card', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Meet Your Installers
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            No subcontractors. No random vans. Just our dedicated, full-time team of accredited engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {engineers.map((engineer, index) => (
            <div key={index} className="team-card group">
              <div className="relative overflow-hidden rounded-2xl aspect-square sm:aspect-[3/4] mb-6 shadow-lg bg-stone-100 border border-stone-200">
                {engineer.image ? (
                  <img
                    src={engineer.image}
                    alt={engineer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-stone-300">
                    <User className="w-24 h-24 stroke-1 mb-4" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium italic">"{engineer.quote}"</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-stone-900">{engineer.name}</h3>
              <p className="text-brand-primary font-medium">{engineer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
