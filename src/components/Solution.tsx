import { Cpu, Radio, Zap, RotateCw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Solution() {
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

  const components = [
    {
      icon: Cpu,
      title: 'ESP32 Processor',
      description: 'Dual-core microcontroller for real-time processing',
      color: 'cyan'
    },
    {
      icon: Radio,
      title: 'MPU6050 Sensor',
      description: '6-axis inertial measurement for precise tremor detection',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'DRV8833 Driver',
      description: 'Dual motor driver for accurate counter-vibration',
      color: 'cyan'
    },
    {
      icon: RotateCw,
      title: 'Feedback Loop',
      description: 'Adaptive algorithm adjusts in real-time',
      color: 'blue'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            The NeuroTremor Glove
          </h2>
          <div className="h-1 w-32 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-2xl text-cyan-600 font-semibold mb-8">
            Converting Tragedy into Possibility
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            The NeuroTremor Glove is a smart wearable that detects tremors using an{' '}
            <span className="font-semibold text-cyan-600">MPU6050 inertial sensor</span> and instantly counteracts them through{' '}
            <span className="font-semibold text-cyan-600">DRV8833-powered precision motors</span>. The system, built on an{' '}
            <span className="font-semibold text-cyan-600">ESP32 processor</span>, achieves a{' '}
            <span className="font-bold text-slate-900 text-2xl">46% reduction</span> in tremor amplitude with just{' '}
            <span className="font-bold text-slate-900 text-2xl">38ms latency</span>—all under{' '}
            <span className="font-bold text-slate-900 text-2xl">₹2,000</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((component, index) => {
            const Icon = component.icon;
            return (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-${component.color}-100 flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 text-${component.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {component.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {component.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Solution;
