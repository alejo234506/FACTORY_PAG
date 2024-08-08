import React, { useState, useEffect } from 'react';
import '../../styles/Header.css'; // Importa el CSS específico para Header
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import NavMenu from './NavMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  return (
    <div className="header">
      <Logo />
      <MenuIcon toggleMenu={toggleMenu} />
      <NavMenu isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Header;
