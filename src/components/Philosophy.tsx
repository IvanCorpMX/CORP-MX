import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Shield } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="filosofia" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-gold-500 uppercase tracking-widest mb-3">Identidad Corporativa</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-corp-black">Nuestra Filosofía.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Misión - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-12 lg:col-span-8 bg-corp-black text-white p-10 md:p-12 rounded-2xl relative overflow-hidden group shadow-sm hover:shadow-2xl hover:shadow-gold-500/20"
          >
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 transition-colors"
              whileHover={{ scale: 1.5, backgroundColor: "rgba(234, 179, 8, 0.2)" }}
              transition={{ duration: 0.8 }}
            />
            <div className="relative z-10">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-white/10"
              >
                <Target size={28} className="text-gold-500" />
              </motion.div>
              <h4 className="text-3xl md:text-4xl font-display font-bold mb-6">Misión</h4>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl font-light">
                Proveer soluciones tecnológicas integrales que garanticen la continuidad, seguridad y eficiencia operativa de nuestros clientes, respaldados por la sinergia de nuestras empresas especializadas.
              </p>
            </div>
          </motion.div>

          {/* Visión - Medium Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-6 lg:col-span-4 bg-white border border-corp-black/10 shadow-sm p-10 md:p-12 rounded-2xl hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/10 transition-all group"
          >
            <motion.div 
              whileHover={{ rotate: -15, scale: 1.1 }}
              className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-8 border border-corp-black/5 group-hover:bg-gold-500/10 transition-colors"
            >
              <Eye size={28} className="text-gold-500" />
            </motion.div>
            <h4 className="text-2xl font-display font-bold mb-4 text-corp-black">Visión</h4>
            <p className="text-sm text-corp-black/70 leading-relaxed">
              Ser el holding tecnológico líder en México, reconocido por nuestra capacidad de integrar infraestructura, seguridad, energía y administración en un ecosistema robusto y confiable.
            </p>
          </motion.div>

          {/* Valores - Wide Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 lg:col-span-12 bg-gold-500 text-white p-10 md:p-12 rounded-2xl relative overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-gold-500/30"
          >
            <motion.div 
              className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1000/400?grayscale')] mix-blend-overlay object-cover"
              initial={{ opacity: 0.1 }}
              whileHover={{ opacity: 0.2, scale: 1.05 }}
              transition={{ duration: 0.8 }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
              <div className="shrink-0">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20"
                >
                  <Shield size={32} className="text-white" />
                </motion.div>
              </div>
              <div>
                <h4 className="text-2xl font-display font-bold mb-3">Valores</h4>
                <p className="text-base text-white/90 leading-relaxed md:max-w-4xl">
                  <strong>Integridad</strong> en cada proyecto, <strong>innovación</strong> constante, <strong>compromiso</strong> con la excelencia y <strong>trabajo en equipo</strong> para superar las expectativas del mercado corporativo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
