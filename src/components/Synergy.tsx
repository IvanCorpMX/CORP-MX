import React from 'react';
import { motion } from 'motion/react';

export default function Synergy() {
  return (
    <section id="sinergias" className="py-24 bg-gray-50 dark:bg-neutral-900 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-gold-500 uppercase tracking-widest mb-3">Alianzas Estratégicas</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-corp-black dark:text-white">
            Sinergias.
          </h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-corp-black/5 dark:border-white/5 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h4 className="text-2xl md:text-3xl font-display font-bold text-corp-black dark:text-white mb-6">
                Cooperación con Radio Río 94.3 FM
              </h4>
              <p className="text-corp-black/70 dark:text-white/70 leading-relaxed mb-8 text-lg">
                Mantenemos una estrecha colaboración con Radio Río 94.3 FM, integrando nuestras capacidades tecnológicas, de seguridad y operativas con su gran alcance en medios de comunicación. Esta sinergia nos permite fortalecer nuestra presencia y ofrecer soluciones conjuntas de alto impacto.
              </p>
              <div className="inline-flex items-center gap-3">
                <span className="w-12 h-px bg-gold-500"></span>
                <span className="text-sm font-bold uppercase tracking-widest text-gold-500">Alianza Estratégica</span>
              </div>
            </div>
            <div className="relative bg-corp-black/5 min-h-[300px] lg:min-h-full flex items-center justify-center p-10">
              {/* Imagen de fondo representativa */}
              <img 
                src="/images/radio-rio-bg.webp" 
                alt="Estudio de Radio" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply"
                onError={(e) => {
                  // Fallback si no existe la imagen
                  e.currentTarget.src = 'https://picsum.photos/seed/radio/800/800?grayscale';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-corp-black/10"></div>
              
              {/* Espacio para el logo en PNG */}
              <div className="relative z-10 bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-xl border border-corp-black/5 dark:border-white/5 max-w-[250px] w-full aspect-square flex items-center justify-center">
                <img 
                  src="/images/radio-rio-logo.png" 
                  alt="Logo Radio Río 94.3 FM" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    // Fallback visual si no existe el logo aún
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="text-center"><div class="text-4xl mb-2">📻</div><div class="font-bold text-corp-black">Radio Río<br/>94.3 FM</div></div>';
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
