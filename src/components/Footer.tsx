import { Mail, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-14 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">

          <div className="max-w-sm">
            <h3 className="text-xl font-bold mb-1">NeuroTremor Glove</h3>
            <p className="text-slate-400 text-sm mb-4">Restoring Steadiness. Restoring Dignity.</p>
            <p className="text-slate-500 text-xs leading-relaxed">
              Inventor: Sivansh Gupta · Kolkata, West Bengal, India<br />
              Patent application filed - Indian Patent Office<br />
              Prototype-stage innovation. Not a certified or clinically approved medical device.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold text-slate-400 tracking-widest mb-4">LINKS</div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#problem" className="hover:text-cyan-400 transition-colors">The Problem</a></li>
              <li><a href="#solution" className="hover:text-cyan-400 transition-colors">The Innovation</a></li>
              <li><a href="#cta" className="hover:text-cyan-400 transition-colors">Partner With Us</a></li>
              <li>
                <a href="https://www.youtube.com/watch?v=IIARF8aOjas" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Prototype Demo ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold text-slate-400 tracking-widest mb-4">CONTACT</div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:sivansh.gupta@gmail.com"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div className="text-center md:text-left">
              <p>Developed for the <span className="text-cyan-400 font-semibold">Viksit Bharat Buildathon 2025</span></p>
              <p className="mt-1">© 2026 Sivansh Gupta / NeuroTremor Labs. All rights reserved.</p>
            </div>
            <p className="text-slate-600 italic text-center">
              Research references: Indian Parkinson's Disease Association · NIMHANS · Rocon et al. 2007 · Meng et al. 2015
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-slate-900 rounded-xl border border-slate-800">
          <p className="text-slate-600 text-xs leading-relaxed text-center italic">
            Disclaimer: The NeuroTremor Glove is a prototype-stage engineering innovation. Performance figures cited (20–50% suppression) are preliminary bench testing results and have not been validated in formal clinical trials. This device has not received certification or regulatory endorsement as a medical device from any authority including CDSCO. This website does not constitute a medical claim.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;