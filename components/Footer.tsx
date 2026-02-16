import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Chu Seong-ik. All rights reserved.
        </p>
        <p className="text-xs text-slate-600">
          Designed for GO Inc. Application
        </p>
      </div>
    </footer>
  );
};

export default Footer;