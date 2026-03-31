import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function Certification() {
  return (
    <section className="py-24 bg-white dark:bg-corp-black relative border-t border-corp-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-gold-500 uppercase tracking-widest mb-3">Estándares Internacionales</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-corp-black dark:text-white">Certificación ISO 27001.</h3>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gray-50 dark:bg-neutral-800/50 rounded-3xl p-8 md:p-12 border border-corp-black/10 dark:border-white/10 flex flex-col md:flex-row items-center gap-10"
        >
          <div className="shrink-0 relative">
            <div className="w-64 h-32 rounded-2xl bg-white dark:bg-neutral-800 shadow-xl border border-corp-black/5 dark:border-white/5 flex items-center justify-center p-6 relative z-10">
              <img 
                src="/images/iso27001.png" 
                alt="Certificación ISO 27001" 
                className="w-full h-full object-contain dark:brightness-0 dark:invert transition-all"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <ShieldCheck className="text-gold-500 hidden" size={64} />
            </div>
            {/* Decorative background circle */}
            <div className="absolute inset-0 bg-gold-500/20 rounded-3xl blur-2xl -z-10 scale-125"></div>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-display font-bold text-corp-black dark:text-white mb-4">
              Gestión de Seguridad de la Información
            </h4>
            <p className="text-corp-black/70 dark:text-white/70 leading-relaxed mb-6 text-lg">
              En Corp-MX estamos comprometidos con la protección y confidencialidad de los datos de nuestros clientes. Nuestra certificación ISO/IEC 27001 avala que implementamos, mantenemos y mejoramos continuamente un sistema de gestión de seguridad de la información robusto y confiable.
            </p>
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-px bg-gold-500"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-gold-500">Calidad Garantizada</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
