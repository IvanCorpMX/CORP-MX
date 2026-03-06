import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Turnkey() {
  const benefits = [
    'Un solo punto de contacto',
    'Ingeniería unificada',
    'Optimización de presupuestos',
    'Tiempos de entrega garantizados',
    'Soporte técnico integral',
    'Garantía extendida de grupo'
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-medium text-gold-500 uppercase tracking-widest mb-3">Soluciones Integrales</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-corp-black">
              Proyectos Llave en Mano.
            </h3>
            <p className="text-lg text-corp-black/70 mb-8 font-light leading-relaxed">
              Diseñamos, implementamos y administramos proyectos tecnológicos complejos desde cero. Nuestro modelo de holding nos permite ofrecer una solución completa sin depender de terceros.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-gold-500 shrink-0" />
                  <span className="text-sm text-corp-black/80">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white font-semibold text-sm uppercase tracking-wider rounded-sm transition-all"
              >
                Solicitar Asesoría
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden relative shadow-xl">
              <img
                src="/images/turnkey.webp"
                alt="Proyecto Llave en Mano"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/90 via-white/20 to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md border border-corp-black/10 p-6 rounded-xl max-w-xs shadow-lg">
                <div className="text-3xl font-display font-bold text-gold-500 mb-1">100%</div>
                <div className="text-sm font-medium text-corp-black/80 uppercase tracking-wider">Integración Operativa</div>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-gold-500/5 rounded-3xl -z-10 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
