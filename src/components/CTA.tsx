import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="cta" className="py-32 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-300 text-xs font-bold tracking-widest">PARTNERSHIP</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Join Us in Shaping a Steadier Future
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-8" />
          <p className="text-xl text-slate-300 mb-4 leading-relaxed">
            Partner with us for the next stage of development and help bring this innovation to millions across India.
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            We are seeking collaborators for clinical validation studies, manufacturing partnerships, and funding to progress from prototype to certified medical device.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <Mail className="w-6 h-6 text-cyan-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Name *</label>
                  <input
                    type="text" id="name" name="name" required
                    value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Email *</label>
                  <input
                    type="email" id="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-slate-300 mb-2">Organization</label>
                <input
                  type="text" id="organization" name="organization"
                  value={formData.organization} onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-500"
                  placeholder="Your organization or institution"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Message *</label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-500 resize-none"
                  placeholder="Tell us about your interest in collaborating — clinical research, manufacturing, investment, or otherwise..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2"
              >
                {submitted ? <span>Message Sent!</span> : <><span>Send Message</span><Send className="w-5 h-5" /></>}
              </button>
            </form>

            {submitted && (
              <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl">
                <p className="text-green-300 text-center font-semibold">
                  Thank you for your interest! We'll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;