import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-corp-black border-t border-corp-black/10 dark:border-white/10 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              {/* Light mode logo */}
              <img src="/images/logo1.png" alt="Corp-MX Logo" className="h-12 w-auto object-contain dark:hidden" />
              {/* Dark mode logo */}
              <img src="/images/logo2.png" alt="Corp-MX Logo" className="h-12 w-auto object-contain hidden dark:block" />
            </div>
            <p className="text-sm text-corp-black/60 dark:text-white/60 leading-relaxed mb-6">
              Un ecosistema empresarial que protege, conecta y respalda tu operación a través de soluciones integrales.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-corp-black dark:text-white mb-6">Empresas</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-corp-black/60 dark:text-white/60 hover:text-gold-500 dark:hover:text-gold-500 transition-colors">Inside Business México</a></li>
              <li><a href="#" className="text-sm text-corp-black/60 dark:text-white/60 hover:text-gold-500 dark:hover:text-gold-500 transition-colors">R2A México</a></li>
              <li><a href="#" className="text-sm text-corp-black/60 dark:text-white/60 hover:text-gold-500 dark:hover:text-gold-500 transition-colors">S3S México</a></li>
              <li><a href="#" className="text-sm text-corp-black/60 dark:text-white/60 hover:text-gold-500 dark:hover:text-gold-500 transition-colors">G4W Consultores</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-corp-black dark:text-white mb-6">Certificaciones</h4>
            <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-corp-black/5 dark:border-white/5 inline-flex items-center gap-4">
              <img 
                src="/images/iso27001.png" 
                alt="Certificación ISO 27001" 
                className="h-12 w-auto object-contain dark:brightness-0 dark:invert transition-all"
              />
              <div className="text-xs text-corp-black/60 dark:text-white/60 text-left">
                <span className="font-bold text-corp-black dark:text-white block">ISO/IEC 27001</span>
                Gestión de Seguridad de la Información
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-corp-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
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
