import React from 'react';
import iagenCarrusel1 from '../../assets/img/hero-06.jpg';
import imagenCarrusel2 from '../../assets/img/slider-1.jpg';
import nextArrow from '../../assets/img/next-right-arrow-svgrepo-com.svg';
import prevArrow from '../../assets/img/left-arrow-svgrepo-com.svg';
import './swiper-bundle.min.css';
import './carrusel.css';

const CarruselComponent = () => (
  <div className="contenedor-carrusel">
    <div style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} className="swiper mySwiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide" style={{ backgroundImage: `url(${iagenCarrusel1})` }}>
          <div className="title" data-swiper-parallax="-300">SOMOS FACTORY</div>
          <div className="subtitle" data-swiper-parallax="-200">INTEGRATED LOGISTICS</div>
          <div className="text" data-swiper-parallax="-100">
            <p>Ingeniería civil, electrónica, eléctrica, sistemas, mecánica, ambiental e industrial. logística “transporte especial de pasajeros, transporte terrestre de carga: seca, líquidos, sólidos, condensadas y productos derivados del petróleo”, alquiler de vehículos y maquinaria pesada, comercializador de bienes y servicios online</p>
          </div>
        </div>
        <div className="swiper-slide" style={{ backgroundImage: `url(${imagenCarrusel2})` }}>
          <div className="title" data-swiper-parallax="-300">Visión innovadora</div>
          <div className="subtitle" data-swiper-parallax="-200">y vanguardista del mercado</div>
          <div className="text" data-swiper-parallax="-100">
            <p>Presentando soluciones integrales que potencian la economía de su empresa</p>
          </div>
        </div>
        <div className="swiper-slide" style={{ backgroundImage: `url(${iagenCarrusel1})` }}>
          <div className="title" data-swiper-parallax="-300">Slide 3</div>
          <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div className="text" data-swiper-parallax="-100">
            <p>DESCRIPCIÓN DE LA PÁGINA Y NO SÉ MÁS...</p>
          </div>
        </div>
      </div>
      <div className="swiper-button-next">
        <img src={nextArrow} alt="Next" />
      </div>
      <div className="swiper-button-prev">
        <img src={prevArrow} alt="Previous" />
      </div>
      <div className="swiper-pagination"></div>
    </div>
  </div>
);

export default CarruselComponent;
