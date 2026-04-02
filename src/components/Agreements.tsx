import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Handshake, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Agreements() {
  const agreements = [
    {
      partner: 'Asociación Mexicana de Hoteles y Moteles de Tabasco, A.C.',
      company: 'Inside Business Mexico (IB México)',
      description: 'Convenio de colaboración tecnológica para fortalecer la infraestructura de TI y conectividad en el sector hotelero de la región.',
      logo: '/images/logo-hoteles-tabasco.png',
      companyLogo: '/images/logo-ib-mexico.png'
    },
    {
      partner: 'COPARMEX Chiapas',
      company: 'Inside Business Mexico (IB México)',
      description: 'Alianza estratégica para impulsar el desarrollo tecnológico y la competitividad empresarial en el estado de Chiapas.',
      logo: '/images/logo-coparmex-chiapas.png',
      companyLogo: '/images/logo-ib-mexico.png'
    },
    {
      partner: 'Express by Sistel',
      company: 'R2A México',
      description: 'Alianza estratégica para la provisión de planes de renta y equipos celulares',
      logo: '/images/logo-express-sistel.png',
      companyLogo: '/images/logo-r2a-mexico.png'
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth >= 768 
        ? scrollContainerRef.current.clientWidth / 2 
        : scrollContainerRef.current.clientWidth;
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-corp-black relative border-t border-corp-black/5 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-medium text-gold-500 uppercase tracking-widest mb-3">Red de Valor</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-corp-black dark:text-white">Convenios Institucionales.</h3>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-corp-black/10 dark:border-white/10 flex items-center justify-center text-corp-black dark:text-white hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-corp-black/10 dark:border-white/10 flex items-center justify-center text-corp-black dark:text-white hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="relative -mx-6 px-6">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {agreements.map((agreement, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="min-w-[85vw] md:min-w-[calc(50%-12px)] snap-center p-8 md:p-10 rounded-2xl border border-corp-black/10 dark:border-white/10 bg-gray-50 dark:bg-neutral-800/50 hover:border-gold-500/50 dark:hover:border-gold-500/50 hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 group items-start"
              >
                <div className="shrink-0 flex items-center gap-3">
                  {/* Corp-MX Company Logo */}
                  <div className="w-16 h-16 rounded-xl bg-white shadow-sm border border-corp-black/10 flex items-center justify-center p-2 relative overflow-hidden">
                    <img 
                      src={agreement.companyLogo} 
                      alt={`Logo ${agreement.company}`} 
                      className="w-full h-full object-contain relative z-10"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  <Handshake size={20} className="text-gold-500 shrink-0" />
                  
                  {/* Partner Logo */}
                  <div className="w-16 h-16 rounded-xl bg-white shadow-sm border border-corp-black/10 flex items-center justify-center p-2 relative overflow-hidden">
                    <img 
                      src={agreement.logo} 
                      alt={`Logo ${agreement.partner}`} 
                      className="w-full h-full object-contain relative z-10"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-corp-black dark:text-white mb-2">{agreement.partner}</h4>
                  <div className="inline-block px-3 py-1 bg-gold-500/10 rounded-full mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold-500">
                      Con: {agreement.company}
                    </p>
                  </div>
                  <p className="text-sm text-corp-black/70 dark:text-white/70 leading-relaxed">{agreement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .relative > div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
