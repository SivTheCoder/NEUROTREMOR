import { Lightbulb, Wrench, TestTube, PlayCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Prototype() {
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

  const stages = [
    {
      icon: Lightbulb,
      title: 'Concept',
      description: 'Initial research and algorithm development'
    },
    {
      icon: Wrench,
      title: 'Assembly',
      description: 'PCB design and component integration'
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Real-world tremor simulation and calibration'
    },
    {
      icon: PlayCircle,
      title: 'Validation',
      description: '70% tremor reduction achieved'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-slate-900">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From Lab to Life
          </h2>
          <div className="h-1 w-32 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">
            The journey of innovation and iteration
          </p>
        </div>

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
                  <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  {index < stages.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-cyan-500/30"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{stage.title}</h3>
                <p className="text-gray-400 text-sm">{stage.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <div className="text-center">
                <Wrench className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">PCB & Circuit Design</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white mb-1">Hardware Assembly</h3>
              <p className="text-gray-400 text-sm">ESP32 integration with sensors and motors</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <div className="text-center">
                <TestTube className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Glove Design</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white mb-1">Wearable Integration</h3>
              <p className="text-gray-400 text-sm">Ergonomic design with embedded electronics</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <div className="text-center">
                <PlayCircle className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Testing Setup</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white mb-1">Live Testing</h3>
              <p className="text-gray-400 text-sm">Real-time tremor suppression validation</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-3xl p-8 md:p-12 border border-slate-700">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Watch the Prototype in Action</h3>
              <p className="text-gray-400 mb-6">
                See how the NeuroTremor Glove detects and counteracts tremors in real-time, providing immediate relief and improved motor control.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded-lg text-cyan-400 text-sm">
                  38ms Latency
                </div>
                <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded-lg text-cyan-400 text-sm">
                  70% Reduction
                </div>
                <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded-lg text-cyan-400 text-sm">
                  Real-time Feedback
                </div>
              </div>
            </div>
            <div className="w-full md:w-96 aspect-video bg-slate-900 rounded-xl flex items-center justify-center border border-cyan-500/30">
              <div className="text-center">
                <PlayCircle className="w-20 h-20 text-cyan-400 mx-auto mb-3 opacity-70" />
                <p className="text-gray-400 text-sm">Demo Video Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prototype;
