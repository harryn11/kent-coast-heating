import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardCheck, PenTool, Wrench, HeartHandshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: ClipboardCheck,
    title: "Step 1: Design Consultation",
    description: "We discuss your heating requirements or dream bathroom vision to create a plan that fits your lifestyle perfectly."
  },
  {
    icon: PenTool,
    title: "Step 2: Technical Survey",
    description: "Our engineers assess your plumbing system or design your 3D bathroom layout with millimetre precision."
  },
  {
    icon: Wrench,
    title: "Step 3: Expert Installation",
    description: "Your new boiler or bathroom is installed by our own Gas Safe and plumbing team. No subcontractors, just quality."
  },
  {
    icon: HeartHandshake,
    title: "Step 4: Premium Handover",
    description: "We walk you through your new system or reveal your luxury bathroom, ensuring everything is exactly as you imagined."
  }
];

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const steps = gsap.utils.toArray('.process-step');

    steps.forEach((step: any, i) => {
      gsap.from(step, {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      });
    });

    gsap.from('.process-line', {
      height: 0,
      duration: 1.5,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Our Process
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            From the first survey to the final handover, we handle everything with precision and care.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 -translate-x-1/2 hidden md:block">
            <div className="process-line w-full bg-emerald-500 h-full origin-top" />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`process-step flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 text-center md:text-left">
                  <div className={`hidden md:block ${index % 2 === 0 ? 'text-right' : 'text-left'} bg-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-stone-100 hover:border-emerald-100 transition-all duration-300`}>
                    <h3 className="text-3xl font-bold text-stone-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-stone-500 leading-relaxed">{step.description}</p>
                  </div>
                  {/* Mobile only text */}
                  <div className="md:hidden bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                    <h3 className="text-2xl font-bold text-stone-900 mb-3">{step.title}</h3>
                    <p className="text-stone-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-8 border-stone-50 rounded-full flex items-center justify-center shadow-xl text-emerald-600 ring-2 ring-emerald-500/10">
                    <step.icon className="w-10 h-10 md:w-12 md:h-12" />
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
