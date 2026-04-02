import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-corp-black border-t border-corp-black/10 dark:border-white/10 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              {/* Light mode logo */}
              <img src="/images/logo1.png" alt="Corp-MX Logo" className="h-10 w-auto object-contain dark:hidden" />
              {/* Dark mode logo */}
              <img src="/images/logo2.png" alt="Corp-MX Logo" className="h-10 w-auto object-contain hidden dark:block" />
            </div>
            <p className="text-sm text-corp-black/60 dark:text-white/60 leading-relaxed max-w-md text-center md:text-left">
              Un ecosistema empresarial que protege, conecta y respalda tu operación a través de soluciones integrales.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/corpmxoficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-corp-black/70 dark:text-white/70 hover:bg-gold-500 hover:text-white dark:hover:bg-gold-500 dark:hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/corp.mx/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-corp-black/70 dark:text-white/70 hover:bg-gold-500 hover:text-white dark:hover:bg-gold-500 dark:hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/corp-mx/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-corp-black/70 dark:text-white/70 hover:bg-gold-500 hover:text-white dark:hover:bg-gold-500 dark:hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-corp-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-corp-black/50 dark:text-white/50">
            &copy; {new Date().getFullYear()} Corp-MX Holding. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/aviso-de-privacidad" className="text-xs text-corp-black/50 dark:text-white/50 hover:text-gold-500 dark:hover:text-gold-500 transition-colors">Aviso de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
