import { Clock, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Problem() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '1.2M+', label: 'Indians with Parkinson\'s Disease' },
    { value: '40M+', label: 'Global Essential Tremor patients' },
    { value: '₹1.5–3L', label: 'Cost of existing clinical devices' },
  ];

  return (
    <section id="problem" ref={sectionRef} className="py-28 px-6 bg-white">
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        <div className="flex items-center justify-center gap-3 mb-8">
          <Clock className="w-7 h-7 text-red-500" />
          <Heart className="w-7 h-7 text-red-500 animate-pulse" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6 leading-tight">
          Every 10 minutes, a new Indian is diagnosed with Parkinson's Disease.
        </h2>

        <p className="text-xl text-gray-500 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Behind every tremor lies the quiet tragedy of lost handwriting, spilt tea, and stolen dignity — compounded by treatments that are either ineffective, inaccessible, or unaffordable.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-4xl font-black text-slate-900 mb-2">{s.value}</div>
              <div className="text-slate-500 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Problem narrative */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-2xl font-bold mb-6 text-cyan-300">Why existing solutions fall short</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Pharmacotherapy',
                text: 'Provides incomplete relief, loses efficacy over time, and carries systemic side effects.'
              },
              {
                title: 'Deep Brain Stimulation',
                text: 'Invasive surgery costing ₹8–15 lakh — inaccessible to most patients outside metro centres.'
              },
              {
                title: 'Commercial Wearables',
                text: 'Priced ₹1.5–3 lakh. Lack predictive control, voluntary-motion discrimination, and personalisation.'
              }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-white/5 rounded-xl border border-white/10">
                <div className="text-red-400 font-bold mb-2 text-sm tracking-wide">✗ {item.title}</div>
                <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;