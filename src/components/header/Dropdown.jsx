import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importar Link
import arrowIcon from '../../assets/img/down-arrow-svgrepo-com.svg';

const Dropdown = ({ title, items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="nav-menu-item dropdown-toggle" onClick={toggleDropdown}>
        <span>{title}</span>
        <img src={arrowIcon} alt="arrow" />
      </button>
      <div className={`dropdown-menu ${isDropdownOpen ? 'toggle' : ''}`}>
        {items.map((item, index) => (
          item.subItems ? (
            <Dropdown key={index} title={item.title} items={item.subItems} />
          ) : (
            <Link key={index} to={item.to} className="dropdown-item">{item.label}</Link>  // Cambiar <a> a <Link>
          )
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
