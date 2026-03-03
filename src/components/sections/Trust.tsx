import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, UserCheck, Star, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Trust: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Removed animations for immediate visibility

  return (
    <section ref={containerRef} className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Engineers, Not Salespeople.
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            We guarantee respectful on-site behavior, transparent pricing, and industry-leading expertise. No jargon, just honest advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="trust-card group bg-white p-10 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-stone-100 hover:border-emerald-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 text-emerald-600 group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-stone-900 tracking-tight">Gas Safe Registered</h3>
            <p className="text-stone-500 leading-relaxed">
              Gas Safe Registered and VBA Accredited experts. Eligible for the <span className="text-emerald-800 font-medium">Boiler Upgrade Scheme</span> grant of £7,500.
            </p>
          </div>

          <div className="trust-card group bg-white p-10 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-stone-100 hover:border-orange-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 text-orange-500 group-hover:scale-110 transition-transform duration-500">
              <UserCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-stone-900 tracking-tight">Engineer-Led</h3>
            <p className="text-stone-500 leading-relaxed">
              A personal behavioural promise: we arrive on time, never smoke on site, and clean up every single day.
            </p>
          </div>

          <div className="trust-card group bg-white p-10 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-stone-100 hover:border-blue-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-500 group-hover:scale-110 transition-transform duration-500">
              <Star className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-stone-900 tracking-tight">Fixed Pricing</h3>
            <p className="text-stone-500 leading-relaxed">
              No hidden costs or mid-job surprises. Transparent, itemised quotes matched against any local competitor.
            </p>
          </div>

          <div className="trust-card group bg-white p-10 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-stone-100 hover:border-purple-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 text-purple-500 group-hover:scale-110 transition-transform duration-500">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-stone-900 tracking-tight">HIES Member</h3>
            <p className="text-stone-500 leading-relaxed">
              Consumer protection and insurance-backed guarantees for your complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
