import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-corp-black text-corp-black dark:text-white font-sans selection:bg-gold-500 selection:text-white transition-colors duration-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-de-privacidad" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
