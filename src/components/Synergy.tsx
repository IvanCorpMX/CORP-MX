import React from 'react';
import { motion } from 'motion/react';

export default function Synergy() {
  const steps = [
    {
      company: 'IB México',
      action: 'Protege la red',
      desc: 'Establece la infraestructura base y asegura la conectividad de datos.',
      number: '01'
    },
    {
      company: 'R2A México',
      action: 'Protege físicamente',
      desc: 'Blinda las instalaciones con sistemas de seguridad electrónica.',
      number: '02'
    },
    {
      company: 'S3S México',
      action: 'Garantiza energía',
      desc: 'Asegura que todos los sistemas operen sin interrupciones.',
      number: '03'
    },
    {
      company: 'G4W Consultores',
      action: 'Gestiona la operación',
      desc: 'Administra los recursos y optimiza los procesos del proyecto.',
      number: '04'
    }
  ];

  return (
    <section id="sinergia" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-corp-black/5 hidden lg:block"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-corp-black/5 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-medium text-gold-500 uppercase tracking-widest mb-3">Sinergia Estratégica</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold max-w-3xl mx-auto text-corp-black">
            El poder de la integración total.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
          {/* Connecting line for mobile/tablet */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-corp-black/10 lg:hidden"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-12 lg:pl-0 lg:px-8 flex flex-col items-start lg:items-center text-left lg:text-center group"
            >
              {/* Dot for mobile/tablet */}
              <div className="absolute left-[21px] top-2 w-2 h-2 rounded-full bg-gold-500 lg:hidden"></div>
              
              <div className="text-6xl font-display font-bold text-corp-black/5 mb-6 group-hover:text-gold-500/20 transition-colors">
                {step.number}
              </div>
              
              <div className="w-full h-px bg-corp-black/10 mb-6 hidden lg:block relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold-500 shadow-[0_0_10px_rgba(151,27,47,0.5)]"></div>
              </div>

              <h4 className="text-gold-500 font-bold uppercase tracking-wider text-xs mb-2">{step.company}</h4>
              <h5 className="text-xl font-display font-semibold mb-3 text-corp-black">{step.action}</h5>
              <p className="text-sm text-corp-black/70 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
