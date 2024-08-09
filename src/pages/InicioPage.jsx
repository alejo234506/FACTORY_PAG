import React from 'react';

import CarruselComponent from "../components/carrusel/CarruselComponent";
import ServicioComponent from "../components/servicios/ServicioComponent";
import AcercaDeNosotros from "../components/AcercaDeNosotros/AcercaDeNosotros";
import LocalizacionBloque from "../components/LocalizacionBloque/LocalizacionBloque";
import TestimonioFactory from "../components/TestimonioFactory/TestimonioFactory";

const InicioPage = () => (
    <>
        <CarruselComponent />
        <ServicioComponent />
        <AcercaDeNosotros />
        <LocalizacionBloque />
        <TestimonioFactory />
    </>
);

export default InicioPage;