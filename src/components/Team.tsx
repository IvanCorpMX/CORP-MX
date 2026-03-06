import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Erick Montoya',
      role: 'Director General',
      company: 'Corp-MX & IB México',
      image: '/images/team-erick.webp'
    },
    {
      name: 'Guadalupe Morales',
      role: 'Directora',
      company: 'R2A México',
      image: '/images/team-guadalupe.webp'
    },
    {
      name: 'Carlos Sibilla',
      role: 'Director',
      company: 'S3S México',
      image: '/images/team-carlos.webp'
    },
    {
      name: 'Jazmin Morales',
      role: 'Directora',
      company: 'G4W Consultores',
      image: '/images/team-jazmin.webp'
    }
  ];

  return (
    <section id="equipo" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium text-gold-500 uppercase tracking-widest mb-3">Liderazgo</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-corp-black">Equipo Directivo.</h3>
          </div>
          <p className="text-corp-black/70 mt-6 md:mt-0 max-w-sm text-sm">
            Expertos en tecnología, seguridad, energía y gestión empresarial liderando el futuro del holding.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-[3/4] shadow-sm"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corp-black via-corp-black/40 to-transparent opacity-90"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                <h4 className="text-gold-500 font-bold uppercase tracking-wider text-xs mb-1">{member.company}</h4>
                <h3 className="text-xl font-display font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-sm text-white/80 mb-4">{member.role}</p>
                
                <div className="flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors text-white">
                    <Linkedin size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors text-white">
                    <Mail size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
