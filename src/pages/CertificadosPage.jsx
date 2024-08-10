import React from 'react';
import certificado1 from '../assets/img/certificado.jpg'
import '../styles/certificados.css'; // Importa el CSS específico para Header



const CertificadosPage = () => (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 color-titulo-azul">Mis Certificados</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img
              src={certificado1}
              alt="Certificado 1"
              width={400}
              height={500}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
            <div className="absolute top-2 right-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full flex items-center justify-center">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
  </svg>
</button>

            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Certificado de Programación Básica</h2>
            <p className="text-gray-500 text-sm">Otorgado por Acme Inc.</p>
          </div>
        </div>
        
      </div>
    </div>
);

export default CertificadosPage;

