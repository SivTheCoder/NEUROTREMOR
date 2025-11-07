import { MapPin, Users, Heart, IndianRupee, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Impact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const impacts = [
    {
      icon: Users,
      value: '1M+',
      label: 'Potential Beneficiaries',
      description: 'Indians with Parkinson\'s regaining independence',
      color: 'cyan'
    },
    {
      icon: IndianRupee,
      value: '₹2,000',
      label: 'Affordable Cost',
      description: '10x cheaper than existing solutions',
      color: 'blue'
    },
    {
      icon: MapPin,
      value: 'Made in India',
      label: 'Local Manufacturing',
      description: 'Locally sourced & engineered',
      color: 'cyan'
    },
    {
      icon: Zap,
      value: '100%',
      label: 'Accessibility',
      description: 'Non-invasive & wearable design',
      color: 'blue'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-white via-cyan-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className={`max-w-6xl mx-auto transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <span className="text-cyan-600 text-sm font-semibold tracking-widest">IMPACT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Built for India.<br />Built with <span className="text-cyan-600">Dignity</span>.
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-8"></div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-16 mb-16 shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 opacity-10"></div>
          <blockquote className="text-2xl md:text-3xl text-white text-center italic leading-relaxed font-light relative z-10">
            <span className="font-semibold text-cyan-300">"In a nation of 1.4 billion,</span> where every innovation has the power to touch millions, the NeuroTremor Glove represents more than technology—it's a promise of independence, a restoration of confidence, and a testament to <span className="font-semibold text-cyan-300">India's capacity to solve its own challenges</span> with ingenuity and compassion."
          </blockquote>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            const bgColor = impact.color === 'cyan' ? 'bg-cyan-500/10' : 'bg-blue-500/10';
            const borderColor = impact.color === 'cyan' ? 'border-cyan-500/30' : 'border-blue-500/30';
            const textColor = impact.color === 'cyan' ? 'text-cyan-600' : 'text-blue-600';

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 hover:${borderColor} overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative z-10 p-6">
                  <div className={`w-14 h-14 rounded-xl ${bgColor} border ${borderColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${textColor}`} />
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1">
                    {impact.value}
                  </div>
                  <div className={`text-sm font-bold ${textColor} mb-2`}>
                    {impact.label}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Transforming Lives Across India
          </h3>
          <p className="text-lg text-slate-700 leading-relaxed mb-10 text-center max-w-4xl mx-auto">
            This Make-in-India assistive technology empowers over <span className="font-bold text-cyan-600">1 million Indians</span> with Parkinson's disease to regain control and confidence in their daily lives. From writing letters to enjoying a cup of tea, the NeuroTremor Glove restores the simple joys that define human dignity.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-cyan-600 mt-2 flex-shrink-0"></div>
              <span className="text-slate-700 font-medium">Independence in daily activities</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
              <span className="text-slate-700 font-medium">Improved quality of life</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-cyan-600 mt-2 flex-shrink-0"></div>
              <span className="text-slate-700 font-medium">Affordable for all income levels</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
              <span className="text-slate-700 font-medium">Non-invasive solution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;
