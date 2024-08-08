import React from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './MainLayout.css';

const MainLayout = ({ children }) => (
    <>
    <div className='contenedor-layout'>

      <Header />

      <div className="contenedor-prinsipal">
        {children}
      </div>

      <Footer />

    </div>
    </>
);

export default MainLayout;