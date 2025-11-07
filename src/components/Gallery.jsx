import React from 'react';

export default function Gallery({ title, images = [] }) {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 via-blue-900/10 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-sky-100 mb-8">{title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl bg-slate-800/60 border border-sky-200/10">
              <img
                src={src}
                alt={`${title}-${idx}`}
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
