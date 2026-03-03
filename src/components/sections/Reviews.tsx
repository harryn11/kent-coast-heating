import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Mark R.",
    date: "2 days ago",
    text: "Top quality work. The boiler installation was handled professionally and the house is warmer than it's ever been.",
    location: "Whitstable"
  },
  {
    name: "Sarah W.",
    date: "2 weeks ago",
    text: "Reliable, friendly and clearly know their stuff. Highly recommend for anyone looking for modern heating solutions.",
    location: "Herne Bay"
  },
  {
    name: "Peter M.",
    date: "1 month ago",
    text: "Fantastic service. They helped us navigate the boiler upgrade process and the installation was flawless.",
    location: "Whitstable"
  },
  {
    name: "Claire H.",
    date: "3 weeks ago",
    text: "Absolutely brilliant from start to finish. The team were respectful, tidy, and the new bathroom looks stunning.",
    location: "Faversham"
  },
  {
    name: "David K.",
    date: "5 days ago",
    text: "Sorted our ancient boiler out in no time. Great communication and a genuinely fair price.",
    location: "Canterbury"
  }
];

const ReviewCard: React.FC<{ review: typeof reviews[0] }> = ({ review }) => (
  <div className="w-[300px] sm:w-[380px] bg-white p-8 rounded-[2rem] shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-stone-100 flex-shrink-0 hover:border-orange-100 transition-colors">
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-1 text-orange-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <span className="text-xs font-bold text-stone-300 uppercase tracking-widest">{review.date}</span>
    </div>
    <p className="text-base text-stone-700 mb-8 leading-relaxed font-light italic">"{review.text}"</p>
    <div className="flex items-center gap-3 border-t border-stone-50 pt-6">
      <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center font-bold text-base uppercase">
        {review.name.charAt(0)}
      </div>
      <div>
        <div className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
          {review.name}
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
        <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">{review.location} Resident</div>
      </div>
    </div>
  </div>
);

export const Reviews: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-stone-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-3 mb-6 bg-white px-6 py-2.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-stone-100">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <span className="font-semibold text-stone-900 tracking-tight text-sm">Verified Google Reviews</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-stone-900 mb-6 tracking-tighter">
          Trusted by Homeowners
        </h2>
        <div className="flex items-center justify-center gap-3 text-stone-900">
          <span className="text-3xl font-black">5.0</span>
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-stone-400 text-sm border-l border-stone-200 pl-3 font-normal">25 verified reviews</span>
        </div>
      </div>

      {/* Mobile: native horizontal scroll (swipeable) */}
      <div className="md:hidden overflow-x-auto pb-4 px-6 flex gap-5 snap-x snap-mandatory scroll-smooth [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {reviews.map((review, index) => (
          <div key={index} className="snap-start">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

      {/* Desktop: CSS marquee (fast, seamless) */}
      <div className="hidden md:block relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stone-100 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Duplicate for seamless loop */}
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};
