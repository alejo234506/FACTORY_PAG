import React from 'react';
import '../../styles/Footer.css'
const Footer = () => (
    <div className="footer">
        <div className="footer__container">
            <div className="footer__section">
                <h2 className="footer__title">Nuestra Empresa</h2>
                <p className="footer__text">Somos una empresa de Ingeniería integral, ejecutamos proyectos que potencian la economía de su empresa. Ingeniería Eléctrica, de Sistemas, Electrónica, Mecánica, Civil, entre otras.</p>
            </div>
            <div className="footer__section">
                <h2 className="footer__title">Ubicaciones</h2>
                <p className="footer__text">
                    <strong>SEDE TECNOLÓGICA</strong><br />BARRANCABERMEJA<br />
                    Calle 52A #34c-60<br /><br />
                    <strong>SEDE LOGÍSTICA</strong><br />BARRANQUILLA-ATLÁNTICO<br />
                    CALLE 65B#42-45
                </p>
            </div>
            <div className="footer__section">
                <h2 className="footer__title">Servicios</h2>
                <p className="footer__text">Carga liviana / Transporte de pasajeros / Servicios eléctricos / Ingeniería Civil</p>
            </div>
            <div className="footer__section">
                <h2 className="footer__title">Links útiles</h2>
                <ul className="footer__links">
                    <li><a href="#">Inscribirse como proveedor</a></li>
                    <li><a href="#">Inscribirse como cliente</a></li>
                    <li><a href="#">Inscribir Vehículo</a></li>
                    <li><a href="#">PQRS</a></li>
                </ul>
            </div>
        </div>
    </div>
);

export default Footer;