import React from 'react';
import { Home, Image as ImageIcon, Trophy, Users, Shirt, FileEdit, Mail } from 'lucide-react';

const navItems = [
  { key: 'Home', label: 'Home', icon: Home },
  { key: 'Activities', label: 'Activities', icon: ImageIcon },
  { key: 'Achievements', label: 'Achievements', icon: Trophy },
  { key: 'Founders', label: 'Founders', icon: Users },
  { key: 'Order', label: 'Jersey Order', icon: Shirt },
  { key: 'Register', label: 'Registration', icon: FileEdit },
  { key: 'Contact', label: 'Contact', icon: Mail },
];

export default function Navbar({ current, onChange }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-b from-sky-900/40 via-sky-800/30 to-transparent border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-blue-800/30" />
          <div className="text-sky-100">
            <p className="text-sm tracking-widest uppercase text-sky-300/80">Run Community</p>
            <h1 className="text-lg font-semibold">Blue Stride Club</h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`group inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-colors duration-200 hover:bg-white/10 ${
                current === key ? 'text-white bg-white/10' : 'text-sky-200/80'
              }`}
            >
              <Icon size={16} className="opacity-90" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <select
            value={current}
            onChange={(e) => onChange(e.target.value)}
            className="bg-transparent text-sky-100 border border-white/20 rounded-lg px-3 py-2"
          >
            {navItems.map(({ key, label }) => (
              <option key={key} value={key} className="bg-slate-900">
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
