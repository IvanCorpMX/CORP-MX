import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function CTA() {
  const [loadIframe, setLoadIframe] = useState(false);

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cta-bg.webp"
          alt="Corporate Office"
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 dark:from-neutral-900 via-transparent to-gray-50 dark:to-neutral-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          onViewportEnter={() => setLoadIframe(true)}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="text-center mb-12">
            <h2 className="text-sm font-medium text-gold-500 uppercase tracking-widest mb-3">Contacto Corporativo</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-4 text-corp-black dark:text-white">
              Agenda tu cita.
            </h3>
            <p className="text-lg text-corp-black/70 dark:text-white/70 font-light max-w-2xl mx-auto">
              Selecciona el horario que mejor se adapte a ti para conversar sobre tu proyecto integral.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-corp-black/10 dark:border-white/10 overflow-hidden w-full max-w-5xl mx-auto h-[700px] relative flex items-center justify-center">
            {/* 
              PARA CAMBIAR EL LINK DE BOOKINGS EN EL FUTURO:
              Modifica la URL en el atributo 'src' del iframe de abajo.
            */}
            {!loadIframe && (
              <div className="text-corp-black/50 dark:text-white/50 animate-pulse">
                Cargando agenda...
              </div>
            )}
            {loadIframe && (
              <iframe
                src="https://outlook.office.com/bookwithme/user/8e5069406600444bbe280597de906d71@corp-mx.com/meetingtype/zowuNjan7UaUvoWwxgjNEg2?anonymous&ismsaljsauthenabled&ep=mcard"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                title="Agenda de Bookings"
                className="absolute inset-0"
                loading="lazy"
              ></iframe>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
