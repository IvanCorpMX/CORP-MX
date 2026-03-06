import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mosaic from './components/Mosaic';
import Synergy from './components/Synergy';
import Turnkey from './components/Turnkey';
import Philosophy from './components/Philosophy';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-corp-black font-sans selection:bg-gold-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Mosaic />
        <Synergy />
        <Turnkey />
        <Philosophy />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
