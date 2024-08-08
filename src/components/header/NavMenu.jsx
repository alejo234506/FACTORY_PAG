import React from 'react';
import Dropdown from './Dropdown';

const NavMenu = ({ isMenuOpen }) => {
  return (
    <div className={`nav-menu ${isMenuOpen ? 'toggle' : ''}`} id="id_nav_menu">
      <a href="#" className="nav-menu-item">Inicio</a>

      <Dropdown
        title="Quienes Somos"
        items={[
          { label: 'Misión', href: '#' },
          { label: 'Visión', href: '#' },
          { label: 'Valores', href: '#' },
          { label: 'Proyectos', href: '#' },
          { label: 'Certificados', href: '#' },
        ]}
      />

      <Dropdown
        title="Ingenierías"
        items={[
          { label: 'Ingeniería civil', href: '#' },
          { label: 'Ingeniería electrónica', href: '#' },
          { label: 'Ingeniería de sistemas', href: '#' },
          { label: 'Ingeniería ambiental', href: '#' },
          { label: 'Ingeniería mecánica', href: '#' },
          { label: 'Ingeniería industrial', href: '#' },
        ]}
      />

      <Dropdown
        title="Logística"
        items={[
          {
            title: 'Transporte',
            subItems: [
              { label: 'Transporte de carga', href: '#' },
              { label: 'Transporte especial', href: '#' },
              { label: 'Transporte de hidrocarburos', href: '#' },
            ],
          },
        ]}
      />

      <a href="#" className="nav-menu-item">Blog</a>
      <a href="#" className="nav-menu-item">Contacto</a>
    </div>
  );
};

export default NavMenu;
