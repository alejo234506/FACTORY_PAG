import React from 'react';

import '../styles/QuienesSomosPage.css'; // Importa el CSS específico para Header


const QuienesSomosPage = () => (
    <div className="w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6" >
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight color-titulo">FACTORY INTEGRATED LOGISTICS SAS</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Somos una fábrica de ingeniería, logística y comercio online; Nuestro enfoque innovador y vanguardista,
                respaldado por una amplia experiencia en el mercado, desarrollando software para liderar, integrar y
                automatizar todos los procesos operativos, ofreciendo control total y eficacia en la ejecución de obras,
                así como servicios de transporte especial de pasajeros, transporte de carga, alquiler de vehícuos y
                maquinaria amarilla, "cumpliendo las normas del Ministerio de Transporte de Colombia", y la
                comercialización de bienes y servicios online.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
              <div className="bg-background rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">Quiénes Somos</h3>
                <p className="text-muted-foreground">
                  FACTORY INTEGRATED LOGISTICS SAS es una empresa de tecnología, logística y comercio electrónico fundada
                  en 2010 con el objetivo de transformar la forma en que las empresas utilizan la tecnología y los
                  servicios de logística para impulsar su crecimiento.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">Nuestro Equipo</h3>
                <p className="text-muted-foreground">
                  Nuestro equipo está compuesto por profesionales altamente capacitados y apasionados por la tecnología,
                  la logística y el comercio electrónico, que trabajan en conjunto para brindar soluciones a medida para
                  nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Nuestra Misión, Visión y Valores</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                En Factory IL SAS. nos esforzamos por ser líderes en nuestro sector, ofreciendo soluciones innovadoras y de alta
                calidad a nuestros clientes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">Misión</h3>
                <p className="text-muted-foreground">
                  Nuestra misión es proporcionar soluciones tecnológicas de vanguardia que ayuden a nuestros clientes a
                  alcanzar sus objetivos de negocio.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">Visión</h3>
                <p className="text-muted-foreground">
                  Nuestra visión es convertirnos en el proveedor de soluciones tecnológicas más confiable y respetado en
                  nuestra industria.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">Valores</h3>
                <p className="text-muted-foreground">
                  Integridad, innovación, excelencia en el servicio y trabajo en equipo son los valores que guían nuestras
                  acciones y decisiones.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
);

export default QuienesSomosPage;



