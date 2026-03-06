import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cta-bg.webp"
          alt="Corporate Office"
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-sm font-medium text-gold-500 uppercase tracking-widest mb-3">Contacto Corporativo</h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight text-corp-black">
            Hablemos de tu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">proyecto integral.</span>
          </h3>
          <p className="text-lg text-corp-black/70 mb-10 font-light max-w-xl">
            Descubre cómo la sinergia de nuestras cuatro divisiones puede optimizar, proteger y potenciar la operación de tu empresa.
          </p>

          <form className="space-y-4 max-w-md">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full bg-white border border-corp-black/10 rounded-sm px-4 py-3 text-sm text-corp-black placeholder:text-corp-black/40 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all shadow-sm"
              />
              <input
                type="text"
                placeholder="Empresa"
                className="w-full bg-white border border-corp-black/10 rounded-sm px-4 py-3 text-sm text-corp-black placeholder:text-corp-black/40 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all shadow-sm"
              />
            </div>
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full bg-white border border-corp-black/10 rounded-sm px-4 py-3 text-sm text-corp-black placeholder:text-corp-black/40 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all shadow-sm"
            />
            <textarea
              placeholder="¿En qué podemos ayudarte?"
              rows={4}
              className="w-full bg-white border border-corp-black/10 rounded-sm px-4 py-3 text-sm text-corp-black placeholder:text-corp-black/40 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all shadow-sm resize-none"
            ></textarea>
            <button
              type="button"
              className="w-full px-8 py-4 bg-gold-500 hover:bg-gold-400 text-white font-semibold text-sm uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 group shadow-md"
            >
              Enviar Mensaje
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
