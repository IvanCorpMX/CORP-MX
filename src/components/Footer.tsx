import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-corp-black/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              {/* Reemplaza este archivo en la carpeta public/images/logo.png */}
              <img src="/images/logo.png" alt="Corp-MX Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm text-corp-black/60 leading-relaxed mb-6">
              Un ecosistema empresarial que protege, conecta y respalda tu operación a través de soluciones integrales.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-corp-black mb-6">Empresas</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-corp-black/60 hover:text-gold-500 transition-colors">IB México (TI)</a></li>
              <li><a href="#" className="text-sm text-corp-black/60 hover:text-gold-500 transition-colors">R2A México (Seguridad)</a></li>
              <li><a href="#" className="text-sm text-corp-black/60 hover:text-gold-500 transition-colors">S3S México (Energía)</a></li>
              <li><a href="#" className="text-sm text-corp-black/60 hover:text-gold-500 transition-colors">G4W Consultores (Admin)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-corp-black mb-6">Holding</h4>
            <ul className="space-y-3">
              <li><a href="#sinergias" className="text-sm text-corp-black/60 hover:text-gold-500 transition-colors">Sinergias</a></li>
              <li><a href="#filosofia" className="text-sm text-corp-black/60 hover:text-gold-500 transition-colors">Filosofía Corporativa</a></li>
              <li><a href="#equipo" className="text-sm text-corp-black/60 hover:text-gold-500 transition-colors">Equipo Directivo</a></li>
              <li><a href="#contacto" className="text-sm text-corp-black/60 hover:text-gold-500 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-corp-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-corp-black/50">
            &copy; {new Date().getFullYear()} Corp-MX Holding. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-corp-black/50 hover:text-gold-500 transition-colors">Aviso de Privacidad</a>
            <a href="#" className="text-xs text-corp-black/50 hover:text-gold-500 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
