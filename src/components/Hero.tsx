import { ArrowDown } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 neural-network-bg"></div>
      </div>

      <div
        className="absolute w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
          transition: 'all 0.3s ease-out'
        }}
      ></div>

      <div className="absolute top-20 right-20 w-40 h-40 border border-cyan-500/20 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-32 left-10 w-32 h-32 border border-blue-500/20 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      <div className={`relative z-10 text-center px-6 max-w-5xl transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
          <span className="text-cyan-300 text-sm font-semibold tracking-widest">VIKSIT BHARAT BUILDATHON 2025</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">NeuroTremor</span>
          <br />
          <span>Glove</span>
        </h1>

        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
          <p className="text-cyan-300 font-semibold text-sm tracking-widest">INNOVATION</p>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"></div>
        </div>

        <p className="text-3xl md:text-4xl text-white font-light mb-8 leading-relaxed">
          <span className="font-semibold text-cyan-300">Restoring Steadiness.</span> Restoring Dignity.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          A smart neuro-mechanical glove that senses involuntary tremors and cancels them in real time. Engineered for India. Designed for humanity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={scrollToNext}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <span className="relative">Explore the Innovation</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform relative" />
          </button>
          <button
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold border-2 border-cyan-500/50 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300 hover:bg-cyan-500/10"
          >
            <span>Join Us</span>
          </button>
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
}

export default Hero;
