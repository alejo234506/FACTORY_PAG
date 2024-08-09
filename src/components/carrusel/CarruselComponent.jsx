import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carrusel.css';

import imagenCarrusel1 from '../../assets/img/hero-06.jpg';
import imagenCarrusel2 from '../../assets/img/slider-1.jpg';
import nextArrow from '../../assets/img/next-right-arrow-svgrepo-com.svg';
import prevArrow from '../../assets/img/left-arrow-svgrepo-com.svg';

const CarruselComponent = () => (
  <div className="contenedor-carrusel">
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Parallax]}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ clickable: true }}
      parallax={true}
    >

      <SwiperSlide>
        <div
          className="swiper-slide"
          style={{ backgroundImage: `url(${imagenCarrusel1})` }}
        >
          <div className="overlay"></div>
          <div className='contenedor-contenido-carrusel'> 
            <div className="title" data-swiper-parallax="-300">SOMOS FACTORY</div>
            <div className="subtitle" data-swiper-parallax="-200">INTEGRATED LOGISTICS</div>
            <div className="text" data-swiper-parallax="-100">
              <p>
              INGENIERÍA CIVIL, ELECTRÓNICA, ELECTRICA, SISTEMAS, MECÁNICA, AMBIENTAL E INDUSTRIAL. LOGÍSTICA “TRANSPORTE ESPECIAL DE PASAJEROS, TRANSPORTE TERRESTRE DE CARGA: SECA, LIQUIDOS, SOLIDOS, CONDENSADAS Y PRODUCTOS DERIVADOS DEL PETRÓLEO”, ALQUILER DE VEHÍCULOS Y MAQUINARIA PESADA, COMERCIALIZADOR DE BIENES Y SERVICIOS ONLINE.</p>
            </div>

            <div className='contenedor-link-carrusel'>
              <Link to="/" className='item-link-carrusel color-naranja'>CONTACTANOS</Link>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="swiper-slide"
          style={{ backgroundImage: `url(${imagenCarrusel2})` }}
        >
          <div className="overlay"></div>
          <div className='contenedor-contenido-carrusel'> 
            <div className="title" data-swiper-parallax="-300">Vision Inovadora</div>
            <div className="subtitle" data-swiper-parallax="-200">Y VANGUARDISTA DEL MERCADO</div>
            <div className="text" data-swiper-parallax="-100">
              <p>PRESTANDO SOLUCIONES INTEGRALES QUE POTENCIAN LA ECONOMIA DE SU EMPRESA</p>
            </div>

            <div className='contenedor-link-carrusel'>
              <Link to="/" className='item-link-carrusel color-naranja'>CONOCE MAS</Link>
              <Link to="/" className='item-link-carrusel color-azul'>ESCRIBENOS</Link>
            </div>
          </div>
        </div>
      </SwiperSlide>


      <div className="swiper-button-next">
        <img src={nextArrow} alt="Next" />
      </div>
      <div className="swiper-button-prev">
        <img src={prevArrow} alt="Previous" />
      </div>
      <div className="swiper-pagination"></div>
    </Swiper>
  </div>
);

export default CarruselComponent;
