import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Empresas', href: '/#empresas' },
    { name: 'Sinergias', href: '/#sinergias' },
    { name: 'Filosofía', href: '/#filosofia' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-corp-black/90 backdrop-blur-md py-4 border-b border-corp-black/10 dark:border-white/10 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          {/* Light mode logo */}
          <img src="/images/logo1.png" alt="Corp-MX Logo" className="h-10 w-auto object-contain dark:hidden" />
          {/* Dark mode logo */}
          <img src="/images/logo2.png" alt="Corp-MX Logo" className="h-10 w-auto object-contain hidden dark:block" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-corp-black/70 dark:text-white/70 hover:text-gold-500 dark:hover:text-gold-500 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#contacto"
            className="px-6 py-2.5 bg-gold-500 hover:bg-gold-400 text-white font-semibold text-sm uppercase tracking-wider rounded-sm transition-colors"
          >
            Hablemos
          </a>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-corp-black dark:text-white"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-corp-black dark:text-white"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-corp-black dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-corp-black border-b border-corp-black/10 dark:border-white/10 py-4 px-6 md:hidden flex flex-col gap-4 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-corp-black/80 dark:text-white/80 hover:text-gold-500 dark:hover:text-gold-500 uppercase tracking-wider py-2 border-b border-corp-black/5 dark:border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contacto"
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
