import { Mail, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">NeuroTremor Glove</h3>
            <p className="text-gray-400">Restoring Steadiness. Restoring Dignity.</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:contact@neurotremor.com"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">
              Developed for the <span className="text-cyan-400 font-semibold">Viksit Bharat Buildathon</span>
            </p>
            <p>© 2025 NeuroTremor Labs. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs italic">
            Research References: Indian Parkinson's Disease Association, National Institute of Mental Health and Neurosciences (NIMHANS)
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
