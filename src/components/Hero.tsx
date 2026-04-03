import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white dark:bg-corp-black z-10 opacity-90 dark:opacity-80 transition-colors duration-300"></div>
        <img
          src="/images/hero-bg.webp"
          alt="Corporate Building"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 dark:via-corp-black/80 to-white dark:to-corp-black z-10 transition-colors duration-300"></div>
        {/* Gold accent glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-corp-black dark:text-white">
            Un ecosistema empresarial que <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-500">protege, conecta y respalda</span> tu operación.
          </h1>
          
          <p className="text-lg md:text-xl text-corp-black/70 dark:text-white/70 mb-10 max-w-2xl mx-auto font-light">
            Sinergia estratégica a través de cuatro pilares fundamentales: Infraestructura TI, Seguridad Electrónica, Energía y Administración.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#empresas"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-white font-semibold text-sm uppercase tracking-wider rounded-sm transition-all flex items-center gap-2 group w-full sm:w-auto justify-center shadow-md"
            >
              Explorar el Ecosistema
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/#contacto"
              className="px-8 py-4 bg-transparent border border-corp-black/20 dark:border-white/20 hover:border-gold-500/50 hover:bg-corp-black/5 dark:hover:bg-white/5 text-corp-black dark:text-white font-semibold text-sm uppercase tracking-wider rounded-sm transition-all w-full sm:w-auto justify-center text-center"
            >
              Proyectos Llave en Mano
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 opacity-50 text-corp-black"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Descubrir</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-corp-black to-transparent"></div>
      </motion.div>
    </section>
  );
}
