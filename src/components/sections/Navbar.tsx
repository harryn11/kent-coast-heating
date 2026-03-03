import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl transition-all duration-500 rounded-2xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] ${scrolled ? 'bg-white/95 shadow-[0_12px_40px_rgba(0,0,0,0.12)] border-white/60' : 'bg-white/70 backdrop-blur-xl'} py-3 lg:py-4 px-6 lg:px-8`}>
      <div className="relative flex items-center justify-between">
        <a href="/" className="text-xl lg:text-2xl font-bold tracking-tight text-stone-900 flex items-center gap-3 group">
          <div className="flex flex-col gap-1.5 transition-transform duration-300 group-hover:scale-110">
            {/* Logo Icon: Three Horizontal Orange Bars (Heat Vents) */}
            <div className="w-8 h-2 bg-brand-secondary rounded-full" />
            <div className="w-6 h-2 bg-brand-secondary rounded-full" />
            <div className="w-8 h-2 bg-brand-secondary rounded-full" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[#0A2540]">KENT COAST</span>
            <span className="text-brand-secondary text-[10px] tracking-widest font-bold uppercase mt-1">Heating Ltd</span>
          </div>
        </a>

        {/* Absolute Centered Links */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 w-max">
          <a href="#" className="text-stone-600 hover:text-brand-primary font-medium transition-all duration-200 relative group">
            Our Expertise
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#" className="text-stone-600 hover:text-brand-secondary font-medium transition-all duration-200 relative group">
            Case Studies
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#" className="text-stone-600 hover:text-brand-secondary font-medium transition-all duration-200 relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="tel:07123456789" className="flex items-center gap-2 text-stone-900 font-semibold hover:text-brand-primary transition-colors duration-200 group">
            <Phone className="w-4 h-4 text-brand-primary group-hover:scale-110 transition-transform" />
            07123 456789
          </a>
          <button className="px-5 py-2.5 bg-brand-secondary text-white rounded-full font-medium hover:bg-brand-secondary/90 transition-all duration-300 shadow-sm hover:shadow-brand-secondary/20 hover:-translate-y-0.5">
            Get a Quote
          </button>
        </div>

        <button
          className="md:hidden p-2 text-stone-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl rounded-2xl p-6 md:hidden flex flex-col gap-4 animate-fade-in-down overflow-hidden">
          <a href="#" className="text-lg font-medium text-stone-900 py-2 transition-colors duration-200 hover:text-brand-primary">Our Expertise</a>
          <a href="#" className="text-lg font-medium text-stone-900 py-2 transition-colors duration-200 hover:text-brand-secondary">Case Studies</a>
          <a href="#" className="text-lg font-medium text-stone-900 py-2 transition-colors duration-200 hover:text-brand-secondary">About Us</a>
          <button className="w-full py-4 bg-brand-secondary text-white rounded-xl font-bold mt-2 hover:bg-brand-secondary/90 transition-all duration-300 shadow-lg shadow-brand-secondary/10">
            Get a Free Quote
          </button>
        </div>
      )}
    </nav>
  );
};
