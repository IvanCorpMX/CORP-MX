import React, { useState } from 'react';
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

  return (
    <section id="empresas" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium text-gold-500 uppercase tracking-widest mb-3">El HUB Corporativo</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-corp-black">Cuatro pilares. <br/><span className="text-corp-black/40">Un solo frente.</span></h3>
          </div>
          <p className="text-corp-black/70 mt-6 md:mt-0 max-w-sm text-sm">
            Nuestras divisiones operan como entidades especializadas que se integran perfectamente para ofrecer soluciones unificadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCompany(company)}
              className="group relative h-[400px] md:h-[450px] rounded-xl overflow-hidden cursor-pointer border border-corp-black/5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={company.image} 
                  alt={company.name} 
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${company.color} mix-blend-multiply opacity-50`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-white shadow-sm border border-corp-black/5 flex items-center justify-center ${company.accent}`}>
                    <company.icon size={24} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-corp-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={20} className="text-corp-black" />
                  </div>
                </div>
                
                <h4 className="text-xs font-bold uppercase tracking-widest text-corp-black/50 mb-2">{company.category}</h4>
                <h3 className="text-3xl font-display font-bold mb-3 text-corp-black group-hover:text-gold-500 transition-colors">{company.name}</h3>
                
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                  <p className="text-sm text-corp-black/70 leading-relaxed pt-2 border-t border-corp-black/10">
                    {company.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
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
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[90vh]"
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
                  className="absolute top-4 right-4 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-corp-black hover:bg-white transition-colors shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8 md:p-10 overflow-y-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-white shadow-sm border border-corp-black/5 flex items-center justify-center shrink-0 ${selectedCompany.accent}`}>
                    <selectedCompany.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-1">{selectedCompany.category}</h4>
                    <h3 className="text-3xl font-display font-bold text-corp-black">{selectedCompany.name}</h3>
                  </div>
                </div>
                
                <p className="text-corp-black/70 leading-relaxed mb-8">
                  {selectedCompany.fullDescription}
                </p>
                
                <div className="flex justify-end pt-6 border-t border-corp-black/10">
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
