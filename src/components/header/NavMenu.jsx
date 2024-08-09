import React from 'react';
import { Link } from 'react-router-dom'; 
import Dropdown from './Dropdown';

const NavMenu = ({ isMenuOpen }) => {
  return (
    <div className={`nav-menu ${isMenuOpen ? 'toggle' : ''}`} id="id_nav_menu">
      <Link to="/" className="nav-menu-item">Inicio</Link> 

      <Dropdown
        title="Quienes Somos"
        items={[
          { label: 'Misión', to: '/quienes-somos/mision' },  
          { label: 'Visión', to: '/quienes-somos/vision' },
          { label: 'Valores', to: '/quienes-somos/valores' },
          { label: 'Proyectos', to: '/quienes-somos/proyectos' },
          { label: 'Certificados', to: '/quienes-somos/certificados' },
        ]}
      />

      <Dropdown
        title="Ingenierías"
        items={[
          { label: 'Ingenierías', to: '/ingenierias' },
          { label: 'Ingeniería civil', to: '/ingenierias/civil' },
          { label: 'Ingeniería electronica', to: '/ingenierias/electronica' },
          { label: 'Ingeniería electrica', to: '/ingenierias/electrica' },
          { label: 'Ingeniería de sistemas', to: '/ingenierias/sistema' },
          { label: 'Ingeniería ambiental', to: '/ingenierias/ambiental' },
          { label: 'Ingeniería mecánica', to: '/ingenierias/mecanica' },
          { label: 'Ingeniería industrial', to: '/ingenierias/industrial' },
        ]}
      />

      <Dropdown
        title="Logística"
        items={[
          { label: 'Logística', to: '/logistica' },
          {
            title: 'Transporte',
            subItems: [
              { label: 'Transportes', to: '/transportes' },
              { label: 'Transporte de carga', to: '/transportes/carga' },
              { label: 'Transporte especial', to: '/transportes/especial' },
              { label: 'Transporte de hidrocarburos', to: '/transportes/hidrocarburos' },
            ],
          },
        ]}
      />

      <Link to="/blog" className="nav-menu-item">Blog</Link> 
      <Link to="/contacto" className="nav-menu-item">Contacto</Link>
    </div>
  );
};

export default NavMenu;
