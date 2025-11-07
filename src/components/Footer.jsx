import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950/60">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sky-200/80 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Blue Stride Club · All rights reserved.</p>
        <p className="opacity-80">Made with passion for the run.</p>
      </div>
    </footer>
  );
}
