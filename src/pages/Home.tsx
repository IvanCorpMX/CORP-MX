import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Mosaic from '../components/Mosaic';
import Synergy from '../components/Synergy';
import Agreements from '../components/Agreements';
import Turnkey from '../components/Turnkey';
import Certification from '../components/Certification';
import Philosophy from '../components/Philosophy';
import CTA from '../components/CTA';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Mosaic />
      <Synergy />
      <Agreements />
      <Turnkey />
      <Certification />
      <Philosophy />
      <CTA />
    </main>
  );
}
