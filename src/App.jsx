import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const activitiesImages = [
  'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513040261439-350c9ffb1b24?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509475249576-5c1f5b0b31d2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922284-7b6831ab2b6b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975661595-64534002aa27?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1200&auto=format&fit=crop',
];

const achievementsImages = [
  'https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571907480495-4f1b7183d46f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1590658011435-72ee9a1fdc17?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1607990280768-8ac1147ab5d2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975738230-513fe4a94a05?q=80&w=1200&auto=format&fit=crop',
];

const foundersImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop',
];

function Carousel({ images, interval = 3500 }) {
  const [index, setIndex] = useState(0);
  const safeImages = images || [];

  useEffect(() => {
    if (safeImages.length === 0) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % safeImages.length), interval);
    return () => clearInterval(id);
  }, [safeImages.length, interval]);

  return (
    <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-white/10">
      {safeImages.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt={`slide-${i}`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {safeImages.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-6 rounded-full transition-all ${i === index ? 'bg-sky-300' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [current, setCurrent] = useState('Home');

  const pageBg = useMemo(() => {
    return 'bg-[radial-gradient(1200px_800px_at_10%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(1000px_600px_at_110%_10%,rgba(59,130,246,0.22),transparent)] bg-slate-950 text-sky-50';
  }, [current]);

  return {
    /* top-level wrapper */
  } && (
    <div className={`min-h-screen ${pageBg} font-['Inter','Manrope','Geist','system-ui']`}>
      <Navbar current={current} onChange={setCurrent} />

      <Hero />

      <main className="relative max-w-7xl mx-auto px-6">
        <Section current={current} name="Home">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-sky-200 to-blue-300">
                Welcome to Blue Stride Club
              </h3>
              <p className="mt-4 text-sky-100/80 leading-relaxed">
                We bring runners together through weekly activities, friendly competitions, and community events. Explore our achievements and join our next run.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl p-4 bg-white/[0.06] border border-white/10">
                  <p className="text-2xl font-bold text-sky-200">150+</p>
                  <p className="text-xs text-sky-200/70">Active Members</p>
                </div>
                <div className="rounded-xl p-4 bg-white/[0.06] border border-white/10">
                  <p className="text-2xl font-bold text-sky-200">75</p>
                  <p className="text-xs text-sky-200/70">Events / Year</p>
                </div>
                <div className="rounded-xl p-4 bg-white/[0.06] border border-white/10">
                  <p className="text-2xl font-bold text-sky-200">∞</p>
                  <p className="text-xs text-sky-200/70">Good Vibes</p>
                </div>
              </div>
            </div>
            <Carousel images={[
              'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1520975594083-8f21607b094b?q=80&w=1400&auto=format&fit=crop',
            ]} />
          </div>
        </Section>

        <Section current={current} name="Activities">
          <Gallery title="Activities" images={activitiesImages} />
        </Section>

        <Section current={current} name="Achievements">
          <Gallery title="Achievements" images={achievementsImages} />
        </Section>

        <Section current={current} name="Founders">
          <Gallery title="Founders" images={foundersImages} />
        </Section>

        <Section current={current} name="Order">
          <div className="py-16">
            <h3 className="text-3xl md:text-4xl font-bold text-sky-100">Order Our Official Jersey</h3>
            <p className="mt-3 text-sky-200/80 max-w-2xl">Rep the club colors with our premium kit. Use the link below to place your order.</p>
            <a
              href="https://forms.gle/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-900/30 hover:brightness-110"
            >
              Open Jersey Order Form
            </a>
          </div>
        </Section>

        <Section current={current} name="Register">
          <div className="py-16">
            <h3 className="text-3xl md:text-4xl font-bold text-sky-100">Join the Club</h3>
            <p className="mt-3 text-sky-200/80 max-w-2xl">Register to get event invitations, training plans, and member perks.</p>
            <a
              href="https://forms.gle/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-900/30 hover:brightness-110"
            >
              Open Registration Form
            </a>
          </div>
        </Section>

        <Section current={current} name="Contact">
          <div className="py-16 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-sky-100">Get in touch</h3>
              <p className="mt-3 text-sky-200/80">Have questions or want to collaborate? Drop us a message.</p>
              <ul className="mt-6 space-y-2 text-sky-200/90">
                <li>Email: hello@bluestride.run</li>
                <li>Instagram: @bluestrideclub</li>
              </ul>
            </div>
            <form className="bg-white/[0.06] border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sky-100 placeholder-sky-200/50" placeholder="Name" />
                <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sky-100 placeholder-sky-200/50" placeholder="Email" />
              </div>
              <textarea className="mt-4 w-full h-32 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sky-100 placeholder-sky-200/50" placeholder="Message" />
              <button type="button" className="mt-4 px-5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-900/30 hover:brightness-110">
                Send
              </button>
            </form>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
