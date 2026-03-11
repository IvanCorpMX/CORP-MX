import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Empresas', href: '#empresas' },
    { name: 'Sinergias', href: '#sinergias' },
    { name: 'Filosofía', href: '#filosofia' },
    { name: 'Equipo', href: '#equipo' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-corp-black/10 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          {/* Reemplaza este archivo en la carpeta public/images/logo.png */}
          <img src="/images/logo.png" alt="Corp-MX Logo" className="h-10 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-corp-black/70 hover:text-gold-500 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-6 py-2.5 bg-gold-500 hover:bg-gold-400 text-white font-semibold text-sm uppercase tracking-wider rounded-sm transition-colors"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-corp-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-corp-black/10 py-4 px-6 md:hidden flex flex-col gap-4 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-corp-black/80 hover:text-gold-500 uppercase tracking-wider py-2 border-b border-corp-black/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 text-center px-6 py-3 bg-gold-500 text-white font-semibold text-sm uppercase tracking-wider rounded-sm"
            >
              Hablemos de tu proyecto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
