import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact</h2>
        <p className="text-slate-600 mb-12">
          ここまでご覧いただきありがとうございます。<br />
          ぜひ一度お話しさせてください。
        </p>

        <div className="flex flex-col items-center justify-center gap-8">
            {/* Direct Contact Info */}
            <a href="mailto:89nhuuhn@gmail.com" className="group flex items-center gap-5 p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 hover:border-purple-100 shadow-sm hover:shadow-md max-w-lg w-full justify-center">
                <div className="bg-white p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform ring-1 ring-slate-100">
                    <Mail className="text-purple-600" size={32} />
                </div>
                <div className="text-left">
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">Email</p>
                    <p className="font-bold text-xl md:text-2xl text-slate-900 break-all">89nhuuhn@gmail.com</p>
                </div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;