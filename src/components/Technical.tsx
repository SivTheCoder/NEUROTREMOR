import { Activity, Brain, Zap, TrendingDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Technical() {
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

  const steps = [
    {
      icon: Activity,
      step: 'Step 1',
      title: 'Sensing',
      description: '9-axis IMU (MPU-9250 / ICM-42688-P) detects tremor at 200–500 Hz. Optional EMG electrodes provide 50–100ms predictive lead before motion onset.',
      color: 'cyan',
      metric: '9-Axis IMU',
      detail: '200–500 Hz sampling'
    },
    {
      icon: Brain,
      step: 'Step 2',
      title: 'Computation',
      description: 'Onboard embedded processor executes FFT analysis, IIR band-pass filtering (3–12 Hz), and phase-advance tremor state estimation to pre-compensate for system latency.',
      color: 'blue',
      metric: 'Phase-Advance',
      detail: 'Predictive control'
    },
    {
      icon: Zap,
      step: 'Step 3',
      title: 'Counteraction',
      description: 'DRV8833-driven wrist motors apply precisely timed counter-forces via tendon-cable Bowden system to finger joints — in anti-phase with the detected tremor.',
      color: 'cyan',
      metric: 'Tendon-Driven',
      detail: '0.5–2.0 N per finger'
    },
    {
      icon: TrendingDown,
      step: 'Step 4',
      title: 'Result',
      description: 'Tremor amplitude reduced 20–50% in bench testing (Standard Tier, preliminary). Total system latency ~23.5ms — well within the 40ms stability budget.',
      color: 'blue',
      metric: '20–50%*',
      detail: 'Preliminary bench data'
    }
  ];

  const latencyItems = [
    { label: 'IMU internal filter delay', std: '2.0', adv: '2.0' },
    { label: 'DMA transfer + SPI', std: '0.5', adv: '0.3' },
    { label: 'IIR filter group delay', std: '5.0', adv: '5.0' },
    { label: 'FFT window processing', std: '1.0', adv: '1.0' },
    { label: 'Kalman / PLL update', std: '—', adv: '0.5' },
    { label: 'ML inference', std: '—', adv: '2.0' },
    { label: 'Control + PWM dispatch', std: '2.0', adv: '1.5' },
    { label: 'Motor electrical constant', std: '8.0', adv: '8.0' },
    { label: 'Bowden cable compliance', std: '5.0', adv: '3.0' },
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />

      <div className={`max-w-6xl mx-auto transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-300 text-xs font-bold tracking-widest">ENGINEERING</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Technical Overview</h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-6" />
          <p className="text-xl text-slate-400 font-light">From tremor detection to counter-force delivery in milliseconds</p>
        </div>

        {/* 4-step pipeline */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCyan = step.color === 'cyan';
            return (
              <div
                key={index}
                className={`group relative bg-slate-800/40 backdrop-blur p-8 rounded-2xl border border-slate-700/60 hover:border-${step.color}-500/50 transition-all duration-300 hover:bg-slate-800/60 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform ${isCyan ? 'bg-cyan-500/15 border border-cyan-500/30' : 'bg-blue-500/15 border border-blue-500/30'}`}>
                    <Icon className={`w-7 h-7 ${isCyan ? 'text-cyan-300' : 'text-blue-300'}`} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold tracking-widest mb-1">{step.step}</div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed mb-5 text-sm">{step.description}</p>
                <div className="pt-4 border-t border-slate-700/60">
                  <div className="text-xs text-slate-500 mb-1">{step.detail}</div>
                  <div className={`text-lg font-bold ${isCyan ? 'text-cyan-400' : 'text-blue-400'}`}>{step.metric}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Waveform display */}
        <div className="bg-slate-800/40 backdrop-blur border border-slate-700/60 p-8 md:p-12 rounded-3xl mb-12">
          <h3 className="text-2xl font-bold text-white mb-10 text-center">Real-Time Performance</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-xs text-slate-500 mb-3 font-bold tracking-widest">WITHOUT GLOVE</div>
              <div className="bg-slate-900/60 rounded-2xl p-6 h-36 flex items-center border border-slate-700/60 overflow-hidden">
                <svg viewBox="0 0 400 80" className="w-full h-full">
                  <path
                    d="M0 40 Q10 20, 20 40 T40 40 Q50 60, 60 40 T80 40 Q90 22, 100 40 T120 40 Q130 58, 140 40 T160 40 Q170 28, 180 40 T200 40 Q210 52, 220 40 T240 40 Q250 24, 260 40 T280 40 Q290 56, 300 40 T320 40 Q330 32, 340 40 T360 40 Q370 48, 380 40 L400 40"
                    stroke="#f87171"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  >
                    <animate attributeName="d" dur="2s" repeatCount="indefinite"
                      values="
                        M0 40 Q10 20, 20 40 T40 40 Q50 60, 60 40 T80 40 Q90 22, 100 40 T120 40 Q130 58, 140 40 T160 40 Q170 28, 180 40 T200 40 Q210 52, 220 40 T240 40 Q250 24, 260 40 T280 40 Q290 56, 300 40 T320 40 Q330 32, 340 40 T360 40 Q370 48, 380 40 L400 40;
                        M0 40 Q10 58, 20 40 T40 40 Q50 22, 60 40 T80 40 Q90 56, 100 40 T120 40 Q130 24, 140 40 T160 40 Q170 52, 180 40 T200 40 Q210 28, 220 40 T240 40 Q250 58, 260 40 T280 40 Q290 22, 300 40 T320 40 Q330 54, 340 40 T360 40 Q370 30, 380 40 L400 40;
                        M0 40 Q10 20, 20 40 T40 40 Q50 60, 60 40 T80 40 Q90 22, 100 40 T120 40 Q130 58, 140 40 T160 40 Q170 28, 180 40 T200 40 Q210 52, 220 40 T240 40 Q250 24, 260 40 T280 40 Q290 56, 300 40 T320 40 Q330 32, 340 40 T360 40 Q370 48, 380 40 L400 40
                      "
                    />
                  </path>
                </svg>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
                <span className="text-xs font-semibold text-red-400">High Amplitude Pathological Tremor (4–12 Hz)</span>
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-3 font-bold tracking-widest">WITH NEUROTREMOR GLOVE</div>
              <div className="bg-slate-900/60 rounded-2xl p-6 h-36 flex items-center border border-slate-700/60 overflow-hidden">
                <svg viewBox="0 0 400 80" className="w-full h-full">
                  <path
                    d="M0 40 Q10 36, 20 40 T40 40 Q50 44, 60 40 T80 40 Q90 37, 100 40 T120 40 Q130 43, 140 40 T160 40 Q170 38, 180 40 T200 40 Q210 42, 220 40 T240 40 Q250 38, 260 40 T280 40 Q290 42, 300 40 T320 40 Q330 38, 340 40 T360 40 Q370 42, 380 40 L400 40"
                    stroke="#22d3ee"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  >
                    <animate attributeName="d" dur="2s" repeatCount="indefinite"
                      values="
                        M0 40 Q10 36, 20 40 T40 40 Q50 44, 60 40 T80 40 Q90 37, 100 40 T120 40 Q130 43, 140 40 T160 40 Q170 38, 180 40 T200 40 Q210 42, 220 40 T240 40 Q250 38, 260 40 T280 40 Q290 42, 300 40 T320 40 Q330 38, 340 40 T360 40 Q370 42, 380 40 L400 40;
                        M0 40 Q10 43, 20 40 T40 40 Q50 37, 60 40 T80 40 Q90 42, 100 40 T120 40 Q130 38, 140 40 T160 40 Q170 41, 180 40 T200 40 Q210 39, 220 40 T240 40 Q250 42, 260 40 T280 40 Q290 38, 300 40 T320 40 Q330 41, 340 40 T360 40 Q370 39, 380 40 L400 40;
                        M0 40 Q10 36, 20 40 T40 40 Q50 44, 60 40 T80 40 Q90 37, 100 40 T120 40 Q130 43, 140 40 T160 40 Q170 38, 180 40 T200 40 Q210 42, 220 40 T240 40 Q250 38, 260 40 T280 40 Q290 42, 300 40 T320 40 Q330 38, 340 40 T360 40 Q370 42, 380 40 L400 40
                      "
                    />
                  </path>
                </svg>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-semibold text-cyan-400">20–50% Suppression* · ~23.5ms Latency · Zero voluntary-motion impedance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Latency budget table */}
        <div className="bg-slate-800/40 backdrop-blur border border-slate-700/60 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-white mb-6">Latency Budget (ms)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-400 font-semibold py-3 pr-6">Component</th>
                  <th className="text-center text-cyan-400 font-semibold py-3 px-4">Standard Tier</th>
                  <th className="text-center text-blue-400 font-semibold py-3 px-4">Advanced Tier</th>
                </tr>
              </thead>
              <tbody>
                {latencyItems.map((item, i) => (
                  <tr key={i} className="border-b border-slate-700/40">
                    <td className="text-slate-300 py-2.5 pr-6 font-medium">{item.label}</td>
                    <td className="text-center text-slate-300 py-2.5 px-4">{item.std}</td>
                    <td className="text-center text-slate-300 py-2.5 px-4">{item.adv}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-slate-600">
                  <td className="text-white font-bold py-3 pr-6">Total τ_sys</td>
                  <td className="text-center text-cyan-400 font-black py-3 px-4">~23.5ms ✓</td>
                  <td className="text-center text-blue-400 font-black py-3 px-4">~23.3ms ✓</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-4">Both tiers achieve latency well within the 40ms stability budget. The Advanced Tier additionally compensates for this latency via Kalman-based phase-advance prediction.</p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
          <p className="text-amber-300/80 text-xs leading-relaxed">
            <span className="font-bold">* Preliminary data.</span> 20–50% suppression figures are from bench testing of the Standard Tier prototype and require formal experimental validation. 55–75% suppression for the Advanced Tier represents a control-theoretic projected upper bound, not yet experimentally confirmed. This device is a prototype-stage engineering innovation and has not received certification, clinical trial validation, or regulatory endorsement as a medical device.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Technical;