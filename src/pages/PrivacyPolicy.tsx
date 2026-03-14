import React, { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 bg-white dark:bg-corp-black min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-corp-black dark:text-white mb-8">Aviso de Privacidad</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-corp-black/80 dark:text-white/80 space-y-6">
          <p className="font-medium">Última actualización: 14/03/2026</p>
          
          <p>
            CORP-MX es responsable del uso y protección de los datos personales que nos proporcione, y al respecto le informamos lo siguiente:
          </p>

          <h2 className="text-2xl font-display font-bold text-corp-black dark:text-white mt-10 mb-4">Datos personales que recabamos</h2>
          <p>Podemos recabar los siguientes datos personales a través de nuestro sitio web, formularios de contacto, correo electrónico o comunicación directa:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nombre completo</li>
            <li>Empresa u organización</li>
            <li>Número telefónico</li>
            <li>Correo electrónico</li>
            <li>Cargo o puesto</li>
            <li>Información relacionada con solicitudes de servicios o cotizaciones</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-corp-black dark:text-white mt-10 mb-4">Finalidades del tratamiento de datos</h2>
          <p>Los datos personales que recabamos se utilizarán para las siguientes finalidades:</p>
          
          <h3 className="text-xl font-bold text-corp-black dark:text-white mt-6 mb-3">Finalidades primarias</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Atender solicitudes de información, contacto o cotización</li>
            <li>Proveer los servicios ofrecidos por las empresas del grupo</li>
            <li>Dar seguimiento a proyectos, contratos o servicios solicitados</li>
            <li>Establecer comunicación con clientes potenciales y actuales</li>
          </ul>

          <h3 className="text-xl font-bold text-corp-black dark:text-white mt-6 mb-3">Finalidades secundarias</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Envío de información comercial, promociones o contenido informativo</li>
            <li>Mejora de nuestros servicios y experiencia de usuario</li>
          </ul>
          <p className="mt-4">
            Si no desea que sus datos personales sean utilizados para estas finalidades secundarias, puede comunicarlo al correo indicado más adelante.
          </p>

          <h2 className="text-2xl font-display font-bold text-corp-black dark:text-white mt-10 mb-4">Transferencia de datos</h2>
          <p>
            Sus datos personales podrán ser compartidos con empresas pertenecientes al grupo CORP-MX, exclusivamente para las finalidades descritas en este aviso de privacidad.
          </p>
          <p>
            No se realizarán transferencias adicionales sin su consentimiento, salvo aquellas previstas en la legislación aplicable.
          </p>

          <h2 className="text-2xl font-display font-bold text-corp-black dark:text-white mt-10 mb-4">Derechos ARCO</h2>
          <p>Usted tiene derecho a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Acceder a sus datos personales</li>
            <li>Rectificarlos si son incorrectos</li>
            <li>Cancelarlos cuando considere que no se requieren</li>
            <li>Oponerse al tratamiento de los mismos</li>
          </ul>
          
          <p className="mt-4">Para ejercer estos derechos deberá enviar una solicitud al correo:</p>
          <p className="font-bold text-gold-500">ivan.gutierrez@corp-mx.com</p>
          
          <p className="mt-4">La solicitud deberá contener:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nombre del titular</li>
            <li>Descripción clara de los datos</li>
            <li>Derecho que desea ejercer</li>
            <li>Medio de contacto para respuesta</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-corp-black dark:text-white mt-10 mb-4">Revocación del consentimiento</h2>
          <p>
            Usted puede revocar el consentimiento otorgado para el tratamiento de sus datos personales enviando una solicitud al correo anteriormente mencionado.
          </p>

          <h2 className="text-2xl font-display font-bold text-corp-black dark:text-white mt-10 mb-4">Cambios al aviso de privacidad</h2>
          <p>
            Nos reservamos el derecho de realizar modificaciones a este aviso de privacidad. Cualquier cambio será publicado en este mismo sitio web.
          </p>
        </div>
      </div>
    </main>
  );
}
