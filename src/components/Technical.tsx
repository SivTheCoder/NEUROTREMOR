import { Activity, Brain, Zap, TrendingDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Technical() {
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

  const steps = [
    {
      icon: Activity,
      title: 'Sensing',
      description: 'MPU6050 detects tremor frequencies in real-time with 6-axis precision',
      color: 'cyan',
      metric: '6-Axis',
      detail: 'Inertial Measurement'
    },
    {
      icon: Brain,
      title: 'Computation',
      description: 'ESP32 dual-core processor runs adaptive vibration algorithms',
      color: 'blue',
      metric: 'Dual-Core',
      detail: '240MHz Processing'
    },
    {
      icon: Zap,
      title: 'Counteraction',
      description: 'Precision micro-motors produce counter-vibrations via DRV8833',
      color: 'cyan',
      metric: 'Precision',
      detail: 'Motor Control'
    },
    {
      icon: TrendingDown,
      title: 'Result',
      description: 'Tremor amplitude reduced up to 46% with 38ms latency',
      color: 'blue',
      metric: '46%',
      detail: 'Tremor Reduction'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className={`max-w-6xl mx-auto transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <span className="text-cyan-300 text-sm font-semibold tracking-widest">ENGINEERING</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Technical Overview
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 font-light">
            From detection to correction in milliseconds
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const bgColor = step.color === 'cyan' ? 'bg-cyan-500/20' : 'bg-blue-500/20';
            const textColor = step.color === 'cyan' ? 'text-cyan-300' : 'text-blue-300';
            const borderColor = step.color === 'cyan' ? 'hover:border-cyan-500' : 'hover:border-blue-500';

            return (
              <div
                key={index}
                className={`group relative bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700 ${borderColor} transition-all duration-300 hover:bg-slate-800/70 overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl ${bgColor} border border-${step.color}-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${textColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-400 font-semibold tracking-widest mb-1">STEP {index + 1}</div>
                      <h3 className="text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4 pl-18">
                    {step.description}
                  </p>
                  <div className="pl-18 pt-4 border-t border-slate-700">
                    <div className="text-xs text-gray-500 mb-1">{step.detail}</div>
                    <div className={`text-lg font-bold text-${step.color}-400`}>
                      {step.metric}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur border border-slate-700 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Real-Time Performance
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group">
                <div className="text-xs text-gray-400 mb-4 font-semibold tracking-widest">BEFORE TREATMENT</div>
                <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 h-40 flex items-center border border-slate-700 group-hover:border-red-500/50 transition-colors">
                  <svg viewBox="0 0 400 80" className="w-full h-full">
                    <path
                      d="M0 40 Q10 20, 20 40 T40 40 Q50 60, 60 40 T80 40 Q90 25, 100 40 T120 40 Q130 55, 140 40 T160 40 Q170 30, 180 40 T200 40 Q210 50, 220 40 T240 40 Q250 28, 260 40 T280 40 Q290 52, 300 40 T320 40 Q330 35, 340 40 T360 40 Q370 45, 380 40 L400 40"
                      stroke="#ef4444"
                      strokeWidth="3"
                      fill="none"
                      className="tremor-wave"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="text-sm font-semibold text-red-400">High Amplitude Tremor</div>
                </div>
              </div>
              <div className="group">
                <div className="text-xs text-gray-400 mb-4 font-semibold tracking-widest">AFTER: WITH NEUROTREMOR GLOVE</div>
                <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 h-40 flex items-center border border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                  <svg viewBox="0 0 400 80" className="w-full h-full">
                    <path
                      d="M0 40 Q10 35, 20 40 T40 40 Q50 45, 60 40 T80 40 Q90 37, 100 40 T120 40 Q130 43, 140 40 T160 40 Q170 38, 180 40 T200 40 Q210 42, 220 40 T240 40 Q250 39, 260 40 T280 40 Q290 41, 300 40 T320 40 Q330 39, 340 40 T360 40 Q370 41, 380 40 L400 40"
                      stroke="#06b6d4"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                  <div className="text-sm font-semibold text-cyan-400">46% Reduction | 38ms Latency</div>
                </div>
              </div>
            </div>
            <div className="mt-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-black text-cyan-400">38ms</div>
                  <div className="text-xs text-gray-400 mt-1">Latency</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-cyan-400">46%</div>
                  <div className="text-xs text-gray-400 mt-1">Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-cyan-400">₹2K</div>
                  <div className="text-xs text-gray-400 mt-1">Cost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technical;