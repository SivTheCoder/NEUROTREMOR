import { Cpu, Radio, Zap, RotateCw, Shield, Wifi } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Solution() {
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

  const tiers = [
    {
      name: 'Standard Tier',
      price: '~₹2,500',
      compute: 'ESP32 (240 MHz dual-core)',
      suppression: '20–50%*',
      latency: '~23.5ms',
      features: ['9-axis IMU sensing', 'FFT + IIR filtering', 'Dual-band motion gate', 'Bluetooth telemetry', 'Tendon actuation', 'Tuned mass dampers'],
      color: 'cyan'
    },
    {
      name: 'Advanced Tier',
      price: '~₹6,000+',
      compute: 'Raspberry Pi Zero 2W',
      suppression: '55–75%†',
      latency: '~23.3ms',
      features: ['9-axis IMU + EMG + flex sensors', 'Kalman filter + phase-advance', 'ML motion classifier', 'Wi-Fi clinical dashboard', 'SMA-tuned mass dampers', 'Patient-specific calibration'],
      color: 'blue',
      highlighted: true
    }
  ];

  const modules = [
    { icon: Radio, title: '9-Axis IMU', description: 'MPU-9250 / ICM-42688-P inertial measurement unit with accelerometer, gyroscope, and magnetometer', color: 'cyan' },
    { icon: Cpu, title: 'Edge Computing', description: 'ESP32 (Standard) or Raspberry Pi Zero 2W (Advanced) — identical mechanical housing across both tiers', color: 'blue' },
    { icon: Zap, title: 'Tendon Actuation', description: 'Braided cable Bowden system via DRV8833-driven motors applying bidirectional counter-torque to finger joints', color: 'cyan' },
    { icon: RotateCw, title: 'Passive Damping', description: 'Tuned mass dampers at dorsal hand and wrist absorbing baseline oscillatory energy in the 4–12 Hz band', color: 'blue' },
    { icon: Shield, title: 'Safety Override', description: 'Immediate motor cutoff on excessive cable tension, sensor fault, or control loop loss — with haptic alert', color: 'cyan' },
    { icon: Wifi, title: 'Clinical Telemetry', description: 'Timestamped tremor severity metrics transmitted to remote clinician dashboard via Wi-Fi (Advanced Tier)', color: 'blue' },
  ];

  return (
    <section ref={sectionRef} className="py-28 px-6 bg-gradient-to-br from-slate-50 to-blue-50/40">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-600 text-xs font-bold tracking-widest">THE INVENTION</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">The NeuroTremor Glove</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-6" />
          <p className="text-xl text-cyan-600 font-semibold">Converting Tragedy into Possibility</p>
        </div>

        {/* Overview card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-100">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            The NeuroTremor Glove is a wearable hybrid passive-active tremor suppression device integrating a{' '}
            <span className="font-semibold text-cyan-600">9-axis Inertial Measurement Unit</span>, optional{' '}
            <span className="font-semibold text-cyan-600">electromyography electrodes</span>, and a{' '}
            <span className="font-semibold text-cyan-600">tendon-driven actuation system</span> with onboard edge computing and predictive phase-advance control — all within a closed-loop latency budget of under{' '}
            <span className="font-bold text-slate-900">40 milliseconds</span>.
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            Both hardware tiers share identical mechanical hardware — the glove substrate, tendon actuation, passive damping modules, and power system. The tier difference is confined entirely to the compute module and software depth, enabling field upgrade without mechanical disassembly.
          </p>
        </div>

        {/* Tier comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-gradient-to-br from-slate-900 to-blue-900 border-blue-500/50 shadow-2xl shadow-blue-500/20'
                  : 'bg-white border-slate-200 shadow-lg'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 rounded-full text-white text-xs font-bold tracking-wide">
                  ADVANCED
                </div>
              )}
              <div className={`text-sm font-bold tracking-widest mb-1 ${tier.highlighted ? 'text-blue-300' : 'text-cyan-600'}`}>
                {tier.name}
              </div>
              <div className={`text-4xl font-black mb-1 ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>
                {tier.price}
              </div>
              <div className={`text-sm mb-6 ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                {tier.compute}
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className={`rounded-xl p-3 text-center ${tier.highlighted ? 'bg-white/10' : 'bg-slate-50'}`}>
                  <div className={`text-2xl font-black ${tier.highlighted ? 'text-cyan-300' : 'text-slate-900'}`}>{tier.suppression}</div>
                  <div className={`text-xs mt-1 ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>Suppression</div>
                </div>
                <div className={`rounded-xl p-3 text-center ${tier.highlighted ? 'bg-white/10' : 'bg-slate-50'}`}>
                  <div className={`text-2xl font-black ${tier.highlighted ? 'text-cyan-300' : 'text-slate-900'}`}>{tier.latency}</div>
                  <div className={`text-xs mt-1 ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>Latency</div>
                </div>
              </div>
              <ul className="space-y-2">
                {tier.features.map((f, j) => (
                  <li key={j} className={`flex items-center gap-2 text-sm ${tier.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${tier.highlighted ? 'bg-cyan-400' : 'bg-cyan-500'}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mb-12 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 text-xs leading-relaxed">
          <span className="font-bold">*</span> 20–50% suppression: preliminary figures from bench testing of the Standard Tier prototype. Requires formal experimental validation per the methodology described in the technical specification. &nbsp;
          <span className="font-bold">†</span> 55–75% suppression: control-theoretic projected upper bound for the Advanced Tier. Not yet experimentally confirmed.
        </div>

        {/* 6 Modules */}
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Five-Module Architecture</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${m.color === 'cyan' ? 'bg-cyan-100' : 'bg-blue-100'}`}>
                  <Icon className={`w-6 h-6 ${m.color === 'cyan' ? 'text-cyan-600' : 'text-blue-600'}`} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{m.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{m.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Solution;