import { Clock, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Problem() {
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

  return (
    <section id="problem" ref={sectionRef} className="py-24 px-6 bg-white">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center justify-center gap-3 mb-8">
          <Clock className="w-8 h-8 text-red-500" />
          <Heart className="w-8 h-8 text-red-500 animate-pulse" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-8 leading-tight">
          Every 10 minutes, a new Indian is diagnosed with Parkinson's Disease.
        </h2>

        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          Behind every tremor lies the quiet tragedy of lost handwriting, spilt tea, and stolen dignity.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-slate-50 rounded-2xl">
            <div className="text-4xl font-bold text-slate-900 mb-2">1M+</div>
            <div className="text-gray-600">Indians with Parkinson's</div>
          </div>
          <div className="text-center p-6 bg-slate-50 rounded-2xl">
            <div className="text-4xl font-bold text-slate-900 mb-2">144</div>
            <div className="text-gray-600">New cases daily</div>
          </div>
          <div className="text-center p-6 bg-slate-50 rounded-2xl">
            <div className="text-4xl font-bold text-slate-900 mb-2">60+</div>
            <div className="text-gray-600">Average age of onset</div>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="relative h-64 bg-gradient-to-r from-slate-100 to-blue-50 rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="hand-illustration">
                  <svg viewBox="0 0 200 200" className="w-48 h-48 opacity-40">
                    <path
                      d="M100 150 L100 100 M80 120 L100 100 L120 120 M90 140 L100 130 L110 140 M100 100 L100 60 M100 60 C100 50, 110 50, 110 60 L110 90"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-slate-600 tremor-animation"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;
