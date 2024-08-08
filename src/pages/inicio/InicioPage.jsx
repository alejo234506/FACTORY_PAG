import React from 'react';

import CarruselComponent from "../../components/carrusel/CarruselComponent";
import ServicioComponent from "../../components/servicios/ServicioComponent";
import AcercaDeNosotros from "../../components/AcercaDeNosotros/AcercaDeNosotros";
import LocalizacionBloque from "../../components/LocalizacionBloque/LocalizacionBloque";

const InicioPage = () => (
    <>
        <CarruselComponent />
        <ServicioComponent />
        <AcercaDeNosotros />
        <LocalizacionBloque />
    </>
);

export default InicioPage;