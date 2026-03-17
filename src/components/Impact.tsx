import { MapPin, Users, Heart, IndianRupee, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Impact() {
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

  const impacts = [
    {
      icon: Users,
      value: '1.2M+',
      label: 'Potential Beneficiaries',
      description: 'Indians with Parkinson\'s disease who could regain independence',
      color: 'cyan'
    },
    {
      icon: IndianRupee,
      value: '~₹2,500',
      label: 'Standard Tier Cost',
      description: 'Up to 98% lower component cost vs imported clinical devices priced at ₹1.5–3 lakh',
      color: 'blue'
    },
    {
      icon: MapPin,
      value: '100%',
      label: 'Made in India',
      description: 'All components locally sourced and manufactured — no import dependency',
      color: 'cyan'
    },
    {
      icon: Zap,
      value: 'Non-Invasive',
      label: 'Wearable Design',
      description: 'No surgery, no hospitalisation — designed for daily home use',
      color: 'blue'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-white via-cyan-50/20 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />

      <div className={`max-w-6xl mx-auto transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-600 text-xs font-bold tracking-widest">IMPACT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Built for India.<br />Built with <span className="text-cyan-600">Dignity</span>.
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-8" />
        </div>

        {/* Quote */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-16 mb-16 shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(6,182,212,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.4) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
          <blockquote className="text-xl md:text-2xl text-white text-center italic leading-relaxed font-light relative z-10">
            <span className="font-semibold text-cyan-300">"In a nation of 1.4 billion,</span> where every innovation has the power to touch millions, the NeuroTremor Glove represents more than technology — it's a promise of independence, a restoration of confidence, and a testament to <span className="font-semibold text-cyan-300">India's capacity to solve its own challenges</span> with ingenuity and compassion."
          </blockquote>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            const isCyan = impact.color === 'cyan';
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isCyan ? 'bg-cyan-50 border border-cyan-200' : 'bg-blue-50 border border-blue-200'}`}>
                    <Icon className={`w-6 h-6 ${isCyan ? 'text-cyan-600' : 'text-blue-600'}`} />
                  </div>
                  <div className="text-2xl font-black text-slate-900 mb-1">{impact.value}</div>
                  <div className={`text-xs font-bold mb-2 tracking-wide ${isCyan ? 'text-cyan-600' : 'text-blue-600'}`}>{impact.label}</div>
                  <p className="text-slate-500 text-xs leading-relaxed">{impact.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Policy alignment */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Transforming Lives Across India</h3>
          <p className="text-base text-slate-600 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
            This Make-in-India assistive technology empowers over <span className="font-bold text-cyan-600">1.2 million Indians</span> with Parkinson's disease and millions more with Essential Tremor to regain control and confidence in their daily lives — from handwriting to self-feeding. All components are indigenously sourced, aligning with Atmanirbhar Bharat and the Ayushman Bharat Digital Health Mission.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { text: 'Atmanirbhar Bharat · Make in India — 100% indigenous BOM', color: 'cyan' },
              { text: 'Ayushman Bharat Digital Health Mission — Wi-Fi telemetry alignment', color: 'blue' },
              { text: 'UN SDG 3 · Good Health — extends assistive tech to underserved populations', color: 'cyan' },
              { text: 'UN SDG 9 · Innovation — student-led indigenous medical device development', color: 'blue' },
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-3 p-4 rounded-xl ${item.color === 'cyan' ? 'bg-cyan-50' : 'bg-blue-50'}`}>
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${item.color === 'cyan' ? 'bg-cyan-500' : 'bg-blue-500'}`} />
                <span className="text-slate-700 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;