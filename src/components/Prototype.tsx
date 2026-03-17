import { Lightbulb, Wrench, TestTube, PlayCircle, FlaskConical } from 'lucide-react'; // PlayCircle still used in prototype cards
import { useEffect, useRef, useState } from 'react';

function Prototype() {
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

  const stages = [
    {
      icon: Lightbulb,
      title: 'Concept',
      description: 'Clinical research, signal processing design, and control architecture planning'
    },
    {
      icon: Wrench,
      title: 'Assembly',
      description: 'PCB design, tendon actuation integration, and tuned mass damper fabrication'
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Bench-level tremor simulator validation across 4–12 Hz frequency range'
    },
    {
      icon: FlaskConical,
      title: 'Validation',
      description: '20–50% suppression measured in preliminary bench testing (Standard Tier)'
    }
  ];

  const validationStages = [
    {
      phase: 'Phase 1',
      title: 'Bench Validation',
      status: 'Completed (preliminary)',
      description: 'Mechanical tremor simulator at programmable 4–12 Hz, 1–15 mm amplitude. 20–50% suppression measured.',
      statusColor: 'cyan'
    },
    {
      phase: 'Phase 2',
      title: 'Healthy Participant Study',
      status: 'Planned (n ≥ 10)',
      description: 'Externally-induced tremor via vibrotactile stimulator. Measures suppression ratio and voluntary motion preservation.',
      statusColor: 'blue'
    },
    {
      phase: 'Phase 3',
      title: 'Pilot Clinical Study',
      status: 'Planned (n ≥ 20)',
      description: 'PD and ET patients. Primary: tremor amplitude reduction. Secondary: UPDRS-III scores, ADL independence, wearability.',
      statusColor: 'slate'
    },
    {
      phase: 'Phase 4',
      title: 'Field Evaluation',
      status: 'Planned (4 weeks)',
      description: '5–10 patients, home use with Wi-Fi telemetry monitoring for reliability, battery longevity, and daily impact.',
      statusColor: 'slate'
    }
  ];

  return (
    <section ref={sectionRef} className="py-28 px-6 bg-slate-900">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-300 text-xs font-bold tracking-widest">DEVELOPMENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">From Lab to Life</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-4" />
          <p className="text-slate-400">The journey of engineering innovation and rigorous validation</p>
        </div>

        {/* Stage timeline */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div
                key={index}
                className={`relative text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-cyan-500/15 border-2 border-cyan-500/60 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-9 h-9 text-cyan-400" />
                  </div>
                  {index < stages.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-cyan-500/40 to-cyan-500/10" />
                  )}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{stage.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{stage.description}</p>
              </div>
            );
          })}
        </div>

        {/* Prototype cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Wrench, title: 'Hardware Assembly', desc: 'ESP32 integration with 9-axis IMU, DRV8833 motor drivers, and tendon cable routing through Bowden sheaths' },
            { icon: TestTube, title: 'Wearable Integration', desc: 'Breathable mesh glove with wrist-mounted motor array and dorsal/wrist tuned mass damper modules embedded' },
            { icon: PlayCircle, title: 'Live Testing', desc: 'Real-time tremor suppression validated on mechanical simulator across the full 4–12 Hz clinical tremor band' },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="bg-slate-800 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className="text-center">
                    <Icon className="w-14 h-14 text-cyan-400/70 mx-auto mb-2" />
                    <p className="text-slate-500 text-xs">{card.title}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Validation roadmap */}
        <div className="bg-gradient-to-br from-slate-800 to-blue-950 rounded-3xl p-8 md:p-12 border border-slate-700 mb-8">
          <h3 className="text-2xl font-bold text-white mb-8">Experimental Validation Roadmap</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {validationStages.map((v, i) => {
              const statusColors: Record<string, string> = {
                cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
                blue: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
                slate: 'bg-slate-700/50 text-slate-400 border-slate-600/40',
              };
              return (
                <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="text-xs text-slate-500 font-bold tracking-wide mb-1">{v.phase}</div>
                      <div className="text-white font-bold">{v.title}</div>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold flex-shrink-0 ${statusColors[v.statusColor]}`}>
                      {v.status}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Video + performance badges */}
        <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-3xl p-8 md:p-12 border border-slate-700">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Watch the Prototype in Action</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                See how the NeuroTremor Glove detects and counteracts tremors in real time, providing immediate relief and improved motor control for Parkinson's and Essential Tremor patients.
              </p>
              <div className="flex gap-3 flex-wrap">
                <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-300 text-xs font-semibold">
                  ~23.5ms System Latency
                </div>
                <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-300 text-xs font-semibold">
                  20–50% Suppression*
                </div>
                <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-300 text-xs font-semibold">
                  Zero Voluntary Impedance
                </div>
              </div>
              <p className="text-slate-500 text-xs mt-4">* Preliminary bench testing. Formal clinical validation in progress.</p>
            </div>
            <div className="w-full md:w-96 aspect-video rounded-xl overflow-hidden border border-cyan-500/30 flex-shrink-0">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/IIARF8aOjas"
                title="NeuroTremor Glove — Viksit Bharat Buildathon 2025"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prototype;