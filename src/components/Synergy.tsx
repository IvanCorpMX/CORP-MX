import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Synergy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const synergies = [
    {
      title: 'Cooperación con Radio Río 94.3 FM',
      description: 'Mantenemos una estrecha colaboración con Radio Río 94.3 FM, integrando nuestras capacidades tecnológicas, de seguridad y operativas con su gran alcance en medios de comunicación. Esta sinergia nos permite fortalecer nuestra presencia y ofrecer soluciones conjuntas de alto impacto.',
      bgImage: '/images/radio-rio-bg.webp',
      logo: '/images/radio-rio-logo.png',
      fallbackLogo: '📻',
      fallbackText: 'Radio Río<br/>94.3 FM'
    },
    {
      title: 'CRG Seguros y Fianzas',
      description: 'Alianza estratégica para la gestión integral de riesgos, aseguramiento corporativo y optimización de recursos, brindando a nuestros clientes la tranquilidad y respaldo necesarios para sus operaciones.',
      bgImage: '/images/crg-seguros-bg.webp',
      logo: '/images/logo-crg-seguros.png',
      fallbackLogo: '🛡️',
      fallbackText: 'CRG Seguros<br/>y Fianzas'
    },
    {
      title: 'Express by Sistel',
      description: 'Alianza estratégica enfocada en soluciones de movilidad de voz y datos a nivel empresarial, apalancadas en la infraestructura del principal carrier móvil de México.\nA través de la sinergia Express by Sistel, integramos servicios de conectividad móvil confiables, escalables y de alta cobertura, fortaleciendo la comunicación operativa de nuestros clientes.',
      bgImage: '/images/express-sistel-bg.webp',
      logo: '/images/logo-express-sistel.png',
      fallbackLogo: '📱',
      fallbackText: 'Express by<br/>Sistel'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % synergies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + synergies.length) % synergies.length);
  };

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section id="sinergias" className="py-24 bg-gray-50 dark:bg-neutral-900 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-gold-500 uppercase tracking-widest mb-3">Alianzas Estratégicas</h2>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-corp-black dark:text-white">
            Sinergias.
          </h2>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden rounded-2xl shadow-sm border border-corp-black/5 dark:border-white/5 bg-white dark:bg-neutral-800">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2"
              >
                <div className="p-10 md:p-16 flex flex-col justify-center min-h-[400px]">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-corp-black dark:text-white mb-6">
                    {synergies[currentIndex].title}
                  </h3>
                  <p className="text-corp-black/70 dark:text-white/70 leading-relaxed mb-8 text-lg">
                    {synergies[currentIndex].description}
                  </p>
                  <div className="inline-flex items-center gap-3 mt-auto">
                    <span className="w-12 h-px bg-gold-500"></span>
                    <span className="text-sm font-bold uppercase tracking-widest text-gold-500">Alianza Estratégica</span>
                  </div>
                </div>
                <div className="relative bg-corp-black/5 min-h-[300px] lg:min-h-full flex items-center justify-center p-10">
                  {/* Imagen de fondo representativa */}
                  <img 
                    src={synergies[currentIndex].bgImage} 
                    alt={`Sinergia corporativa con ${synergies[currentIndex].title} en el Sureste de México`} 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://picsum.photos/seed/business/800/800?grayscale';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-corp-black/10"></div>
                  
                  {/* Espacio para el logo en PNG */}
                  <div className="relative z-10 bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-xl border border-corp-black/5 dark:border-white/5 max-w-[250px] w-full aspect-square flex items-center justify-center">
                    <img 
                      src={synergies[currentIndex].logo} 
                      alt={`Logotipo oficial de ${synergies[currentIndex].title}`} 
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<div class="text-center"><div class="text-4xl mb-2">${synergies[currentIndex].fallbackLogo}</div><div class="font-bold text-corp-black dark:text-white">${synergies[currentIndex].fallbackText}</div></div>`;
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles del carrusel */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-neutral-800 border border-corp-black/10 dark:border-white/10 text-corp-black dark:text-white hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors"
              aria-label="Anterior sinergia"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {synergies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-gold-500' : 'bg-corp-black/20 dark:bg-white/20'
                  }`}
                  aria-label={`Ir a sinergia ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-neutral-800 border border-corp-black/10 dark:border-white/10 text-corp-black dark:text-white hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors"
              aria-label="Siguiente sinergia"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
