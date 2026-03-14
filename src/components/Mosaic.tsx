import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Server, ShieldCheck, Zap, Briefcase, ArrowUpRight, X, ExternalLink } from 'lucide-react';

const companies = [
  {
    id: 'ib',
    name: 'IB México',
    category: 'Infraestructura TI',
    description: 'Diseño, implementación y mantenimiento de redes corporativas, centros de datos y conectividad de alto rendimiento.',
    fullDescription: 'IB México es la división especializada en Infraestructura de Tecnologías de la Información. Nos enfocamos en diseñar, implementar y mantener redes corporativas robustas, centros de datos eficientes y soluciones de conectividad de alto rendimiento que aseguran la continuidad operativa de tu negocio. Nuestro equipo de ingenieros certificados trabaja con las mejores marcas del mercado para ofrecer soluciones a la medida de tus necesidades.',
    url: 'https://ib-mexico.com/',
    icon: Server,
    color: 'from-blue-900/20 to-white',
    accent: 'text-blue-600',
    image: '/images/ib-mexico.webp'
  },
  {
    id: 'r2a',
    name: 'R2A México',
    category: 'Seguridad Electrónica',
    description: 'Sistemas avanzados de videovigilancia, control de acceso, alarmas y monitoreo inteligente para protección total.',
    fullDescription: 'R2A México es la división experta en Seguridad Electrónica. Proveemos sistemas avanzados de videovigilancia (CCTV), control de acceso biométrico y vehicular, sistemas de detección de incendio y alarmas. Nuestro objetivo es blindar tus instalaciones y proteger tus activos más valiosos mediante tecnología de punta y monitoreo inteligente, garantizando un entorno seguro para tu operación.',
    url: 'https://r2a.com.mx/',
    icon: ShieldCheck,
    color: 'from-red-900/20 to-white',
    accent: 'text-red-600',
    image: '/images/r2a-mexico.webp'
  },
  {
    id: 's3s',
    name: 'S3S México',
    category: 'Energía',
    description: 'Soluciones de respaldo, calidad de energía, UPS y sistemas eléctricos para garantizar continuidad operativa 24/7.',
    fullDescription: 'S3S México es la división dedicada a soluciones de Energía y Respaldo. Entendemos que la energía es el motor de tu empresa. Por ello, ofrecemos sistemas de alimentación ininterrumpida (UPS), plantas de emergencia, supresores de picos y acondicionadores de línea. Garantizamos la calidad de energía y la continuidad operativa 24/7, protegiendo tu infraestructura crítica contra fallas eléctricas.',
    url: 'https://s3s-mx.com/',
    icon: Zap,
    color: 'from-amber-900/20 to-white',
    accent: 'text-amber-600',
    image: '/images/s3s-mexico.webp'
  },
  {
    id: 'g4w',
    name: 'G4W Consultores',
    category: 'Administración',
    description: 'Gestión de proyectos, consultoría operativa, optimización de recursos y administración integral de servicios.',
    fullDescription: 'G4W Consultores es la división enfocada en la Administración y Consultoría Estratégica. Brindamos servicios de gestión de proyectos (PMO), consultoría operativa, optimización de recursos y administración integral de servicios tecnológicos. Nuestro enfoque metodológico asegura que cada proyecto se ejecute en tiempo, forma y presupuesto, maximizando el retorno de inversión de nuestros clientes.',
    url: 'https://g4w.mx/',
    icon: Briefcase,
    color: 'from-emerald-900/20 to-white',
    accent: 'text-emerald-600',
    image: '/images/g4w-consultores.webp'
  }
];

export default function Mosaic() {
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate the active mosaic piece
  useEffect(() => {
    if (isPaused || selectedCompany) return;
    
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % companies.length);
    }, 5000); // Cambia cada 5 segundos
    
    return () => clearInterval(timer);
  }, [isPaused, selectedCompany]);

  return (
    <section id="empresas" className="py-24 bg-white dark:bg-corp-black relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium text-gold-500 uppercase tracking-widest mb-3">El HUB Corporativo</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-corp-black dark:text-white">Empresas que conforman el corporativo.</h3>
          </div>
          <p className="text-corp-black/70 dark:text-white/70 mt-6 md:mt-0 max-w-sm text-sm">
            Nuestras divisiones operan como entidades especializadas que se integran perfectamente para ofrecer soluciones unificadas.
          </p>
        </div>

        {/* Dynamic Mosaic Container */}
        <div 
          className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px] w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {companies.map((company, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div
                key={company.id}
                onClick={() => {
                  if (isActive) setSelectedCompany(company);
                  else setActiveIndex(index);
                }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
                  isActive ? 'flex-[4] lg:flex-[5]' : 'flex-[1]'
                }`}
              >
                {/* Backgrounds */}
                <img 
                  src={company.image} 
                  alt={company.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${company.color} mix-blend-multiply transition-opacity duration-700 ${isActive ? 'opacity-60' : 'opacity-80'}`}></div>
                <div className={`absolute inset-0 bg-gradient-to-t from-corp-black via-corp-black/50 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-90' : 'opacity-70'}`}></div>

                {/* Active Content */}
                <div className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end transition-opacity duration-500 delay-100 ${isActive ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 ${company.accent}`}>
                      <company.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-1">{company.category}</h4>
                      <h3 className="text-2xl md:text-4xl font-display font-bold text-white">{company.name}</h3>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 max-w-2xl hidden md:block">
                    {company.description}
                  </p>
                  <div>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-white font-semibold text-sm uppercase tracking-wider rounded-sm transition-all shadow-sm group/btn">
                      Conocer más
                      <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Inactive Content (Desktop) */}
                <div className={`hidden lg:flex absolute inset-0 flex-col items-center justify-end pb-8 transition-opacity duration-500 ${isActive ? 'opacity-0 -z-10' : 'opacity-100 z-10'}`}>
                  <h3 className="text-xl font-display font-bold text-white tracking-widest uppercase -rotate-90 whitespace-nowrap mb-24 opacity-90">
                    {company.name}
                  </h3>
                  <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 ${company.accent}`}>
                    <company.icon size={24} />
                  </div>
                </div>

                {/* Inactive Content (Mobile) */}
                <div className={`flex lg:hidden absolute inset-0 items-center px-6 gap-4 transition-opacity duration-500 ${isActive ? 'opacity-0 -z-10' : 'opacity-100 z-10'}`}>
                  <div className={`w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0 ${company.accent}`}>
                    <company.icon size={20} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white tracking-wider uppercase">
                    {company.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCompany && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCompany(null)}
              className="fixed inset-0 bg-corp-black/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="relative h-48 md:h-64 shrink-0">
                <img 
                  src={selectedCompany.image} 
                  alt={selectedCompany.name} 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedCompany.color} mix-blend-multiply opacity-40`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
                
                <button 
                  onClick={() => setSelectedCompany(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-corp-black dark:text-white hover:bg-white dark:hover:bg-black transition-colors shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8 md:p-10 overflow-y-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-corp-black/5 dark:border-white/5 flex items-center justify-center shrink-0 ${selectedCompany.accent}`}>
                    <selectedCompany.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-1">{selectedCompany.category}</h4>
                    <h3 className="text-3xl font-display font-bold text-corp-black dark:text-white">{selectedCompany.name}</h3>
                  </div>
                </div>
                
                <p className="text-corp-black/70 dark:text-white/70 leading-relaxed mb-8">
                  {selectedCompany.fullDescription}
                </p>
                
                <div className="flex justify-end pt-6 border-t border-corp-black/10 dark:border-white/10">
                  <a 
                    href={selectedCompany.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-white font-semibold text-sm uppercase tracking-wider rounded-sm transition-all shadow-sm group"
                  >
                    Visitar Sitio Web
                    <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
