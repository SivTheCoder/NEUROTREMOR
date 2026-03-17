import { ArrowDown, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

function Hero() {
  const [visible, setVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#040b14] overflow-hidden">
      {/* Ambient grid */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Mouse glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`,
          background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
          transition: 'all 0.4s ease-out'
        }}
      />

      {/* Static glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />

      {/* Pulse rings */}
      <div className="absolute top-16 right-16 w-48 h-48 border border-cyan-500/15 rounded-full animate-pulse" />
      <div className="absolute bottom-24 left-8 w-32 h-32 border border-blue-500/15 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-1/2 right-8 w-20 h-20 border border-cyan-400/10 rounded-full animate-pulse" style={{ animationDelay: '1.4s' }} />

      <div className={`relative z-10 text-center px-6 max-w-5xl transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-cyan-500/8 border border-cyan-500/25 rounded-full backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300/90 text-xs font-semibold tracking-[0.2em]">PATENT PENDING · INDIA</span>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4 leading-[0.9] tracking-tighter">
          <span
            className="block"
            style={{ background: 'linear-gradient(135deg, #67e8f9 0%, #38bdf8 50%, #818cf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            NeuroTremor
          </span>
          <span className="block text-white/90">Glove</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-7">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400/60" />
          <span className="text-cyan-300/70 text-xs font-bold tracking-[0.3em]">INTELLIGENT TREMOR SUPPRESSION</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400/60" />
        </div>

        {/* Tagline */}
        <p className="text-3xl md:text-4xl text-white/90 font-light mb-6 leading-relaxed">
          <span className="font-semibold text-cyan-300">Restoring Steadiness.</span> Restoring Dignity.
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          A hybrid passive-active wearable glove that detects and suppresses pathological hand tremors in real time — engineered for India, designed for every patient who deserves independence.
        </p>

        {/* Spec pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { label: '<40ms Latency Budget' },
            { label: '4–12 Hz Tremor Band' },
            { label: 'Dual Hardware Tiers' },
            { label: '5-Module Architecture' },
          ].map((item, i) => (
            <div key={i} className="px-4 py-1.5 bg-slate-800/60 border border-slate-600/50 rounded-full text-slate-300 text-sm font-medium backdrop-blur-sm">
              {item.label}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToNext}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-cyan-500/30"
          >
            <span>Explore the Innovation</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold border border-cyan-500/40 text-cyan-300 hover:border-cyan-400 hover:text-white transition-all duration-300 hover:bg-cyan-500/10"
          >
            <span>Partner With Us</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;