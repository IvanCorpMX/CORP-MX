import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Shield } from 'lucide-react';

export default function Philosophy() {
  const items = [
    {
      icon: Target,
      title: 'Misión',
      desc: 'Proveer soluciones tecnológicas integrales que garanticen la continuidad, seguridad y eficiencia operativa de nuestros clientes, respaldados por la sinergia de nuestras empresas especializadas.'
    },
    {
      icon: Eye,
      title: 'Visión',
      desc: 'Ser el holding tecnológico líder en México, reconocido por nuestra capacidad de integrar infraestructura, seguridad, energía y administración en un ecosistema robusto y confiable.'
    },
    {
      icon: Shield,
      title: 'Valores',
      desc: 'Integridad en cada proyecto, innovación constante, compromiso con la excelencia y trabajo en equipo para superar las expectativas del mercado corporativo.'
    }
  ];

  return (
    <section id="filosofia" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-gold-500 uppercase tracking-widest mb-3">Identidad Corporativa</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-corp-black">Nuestra Filosofía.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-corp-black/5 shadow-sm p-8 rounded-xl hover:border-gold-500/30 hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-corp-black/5 flex items-center justify-center mb-6 group-hover:bg-gold-500/10 transition-colors">
                <item.icon size={28} className="text-gold-500" />
              </div>
              <h4 className="text-2xl font-display font-bold mb-4 text-corp-black">{item.title}</h4>
              <p className="text-sm text-corp-black/70 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
