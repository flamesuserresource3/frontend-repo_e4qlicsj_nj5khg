import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-sky-950/40 via-sky-900/40 to-slate-950/80" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-sky-200 via-blue-200 to-sky-400 drop-shadow-xl">
          Run together. Faster. Further.
        </h2>
        <p className="mt-4 md:mt-6 text-sky-100/90 text-lg md:text-xl max-w-3xl mx-auto">
          A modern running community with activities, achievements, and style. Join us and feel the blue momentum.
        </p>
      </div>
    </section>
  );
}
