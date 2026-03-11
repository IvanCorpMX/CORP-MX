import React from 'react';
import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';

export default function Agreements() {
  const agreements = [
    {
      partner: 'Asociación Mexicana de Hoteles y Moteles de Tabasco, A.C.',
      company: 'Inside Business Mexico (IB México)',
      description: 'Convenio de colaboración tecnológica para fortalecer la infraestructura de TI y conectividad en el sector hotelero de la región.',
      logo: '/images/logo-hoteles-tabasco.png'
    },
    {
      partner: 'CRG Seguros y Fianzas',
      company: 'G4W Consultores',
      description: 'Alianza estratégica para la gestión integral de riesgos, aseguramiento corporativo y optimización de recursos.',
      logo: '/images/logo-crg-seguros.png'
    }
  ];

  return (
    <section className="py-24 bg-white relative border-t border-corp-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-gold-500 uppercase tracking-widest mb-3">Red de Valor</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-corp-black">Convenios Institucionales.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agreements.map((agreement, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="p-8 md:p-10 rounded-2xl border border-corp-black/10 bg-gray-50 hover:border-gold-500/50 hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 group"
            >
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-xl bg-white shadow-sm border border-corp-black/5 flex items-center justify-center group-hover:border-gold-500/30 transition-colors p-3 relative overflow-hidden">
                  <img 
                    src={agreement.logo} 
                    alt={`Logo ${agreement.partner}`} 
                    className="w-full h-full object-contain relative z-10"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <Handshake className="text-gold-500 hidden absolute" size={32} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-display font-bold text-corp-black mb-2">{agreement.partner}</h4>
                <div className="inline-block px-3 py-1 bg-gold-500/10 rounded-full mb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-500">
                    Con: {agreement.company}
                  </p>
                </div>
                <p className="text-sm text-corp-black/70 leading-relaxed">{agreement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
