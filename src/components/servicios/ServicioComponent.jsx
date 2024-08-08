import React from 'react';
import ServicioItem from './ServicioItem';

import iconoServicio1 from '../../assets/img/icono-servicio-1.png';
import iconoServicio2 from '../../assets/img/icono-servicio-2.png';
import iconoServicio3 from '../../assets/img/icono-servicio-3.png';
import iconoServicio4 from '../../assets/img/icono-servicio-4.png';
import iconoServicio5 from '../../assets/img/icono-servicio-5.png';

import '../../styles/servicios.css';

const servicios = [
    { icono: iconoServicio1, altText: 'Ingenierías', texto: 'INGENIERÍAS: CIVIL, ELECTRÓNICA, ELÉCTRICA, SISTEMAS, AMBIENTAL, MECÁNICA, INDUSTRIAL' },
    { icono: iconoServicio2, altText: 'Transporte de Pasajeros', texto: 'TRANSPORTE ESPECIAL DE PASAJEROS Y TURISMO EMPRESARIAL' },
    { icono: iconoServicio3, altText: 'Transporte de Carga', texto: 'TRANSPORTE DE CARGA' },
    { icono: iconoServicio4, altText: 'Alquiler de Vehículos', texto: 'ALQUILER DE VEHÍCULOS' },
    { icono: iconoServicio5, altText: 'Maquinaria Amarilla', texto: 'MAQUINARIA AMARILLA' },
];

const ServicioComponent = () => (
    <div className="contenedor-servicios">
        {servicios.map((servicio, index) => (
            <ServicioItem
                key={index}
                icono={servicio.icono}
                altText={servicio.altText}
                texto={servicio.texto}
            />
        ))}
    </div>
);

export default ServicioComponent;
