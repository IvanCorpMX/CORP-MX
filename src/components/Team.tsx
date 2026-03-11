import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, ShieldCheck, Zap, LineChart } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Erick Montoya',
      role: 'Director General',
      company: 'Corp-MX & IB México',
      description: 'Lidera la visión estratégica del holding y dirige las operaciones de infraestructura tecnológica, asegurando la integración perfecta de todas las divisiones.',
      icon: Briefcase
    },
    {
      name: 'Guadalupe Morales',
      role: 'Directora',
      company: 'R2A México',
      description: 'Especialista en estrategias de seguridad electrónica y protección perimetral, garantizando entornos seguros para los activos más críticos de nuestros clientes.',
      icon: ShieldCheck
    },
    {
      name: 'Carlos Sibilla',
      role: 'Director',
      company: 'S3S México',
      description: 'Experto en calidad de energía y sistemas de respaldo. Asegura que la infraestructura eléctrica de los proyectos opere con máxima eficiencia y sin interrupciones.',
      icon: Zap
    },
    {
      name: 'Jazmin Morales',
      role: 'Directora',
      company: 'G4W Consultores',
      description: 'Dirige la gestión de proyectos y consultoría operativa, optimizando recursos y procesos para maximizar el retorno de inversión en cada implementación.',
      icon: LineChart
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-[320px] w-full [perspective:1000px]"
            >
              <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front of card */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-50 border border-corp-black/10 rounded-2xl p-8 flex flex-col items-center justify-center shadow-sm">
                  <div className="w-20 h-20 rounded-full bg-white shadow-sm border border-corp-black/5 flex items-center justify-center mb-6">
                    <member.icon size={32} className="text-gold-500" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 text-corp-black text-center">{member.name}</h3>
                  <p className="text-sm text-corp-black/60 text-center mb-4">{member.role}</p>
                  <div className="mt-auto">
                    <h4 className="text-gold-500 font-bold uppercase tracking-wider text-xs text-center">{member.company}</h4>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-corp-black text-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg border border-corp-black">
                  <h3 className="text-lg font-display font-bold mb-4 text-gold-500 text-center">{member.name}</h3>
                  <p className="text-sm text-white/80 text-center leading-relaxed">
                    {member.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
