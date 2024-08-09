import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import InicioPage from './pages/InicioPage';
import MisionPage from './pages/MisionPage';
import VisionPage from './pages/VisionPage';
import ValoresPage from './pages/ValoresPage';
import ProyectosPage from './pages/ProyectosPage';
import CertificadosPage from './pages/CertificadosPage';
import ContactoPage from './pages/ContactoPage';
import BlogPage from './pages/BlogPage';
import IngenieriaAmbientalPage from './pages/IngenieriaAmbientalPage';
import IngenieriaCivilPage from './pages/IngenieriaCivilPage';
import IngenieriaElectricaPage from './pages/IngenieriaElectricaPage';
import IngenieriaElectronicaPage from './pages/IngenieriaElectronicaPage';
import IngenieriaIndustrialPage from './pages/IngenieriaIndustrialPage';
import IngenieriaMecanicaPage from './pages/IngenieriaMecanicaPage';
import IngenieriaSistemaPage from './pages/IngenieriaSistemaPage';
import IngenieriasPage from './pages/IngenieriasPage';

import LogisticaPage from './pages/LogisticaPage';
import TransporteCargaPage from './pages/TransporteCargaPage';
import TransporteEspecialPage from './pages/TransporteEspecialPage';
import TransporteHidrocarburosPage from './pages/TransporteHidrocarburosPage';
import TransportesPage from './pages/TransportesPage';

import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><InicioPage /></MainLayout>} />
        <Route path="/inicio" element={<MainLayout><InicioPage /></MainLayout>} />
        <Route path="/quienes-somos/mision" element={<MainLayout><MisionPage /></MainLayout>} />
        <Route path="/quienes-somos/vision" element={<MainLayout><VisionPage /></MainLayout>} />
        <Route path="/quienes-somos/valores" element={<MainLayout><ValoresPage /></MainLayout>} />
        <Route path="/quienes-somos/proyectos" element={<MainLayout><ProyectosPage /></MainLayout>} />
        <Route path="/quienes-somos/certificados" element={<MainLayout><CertificadosPage /></MainLayout>} />
        <Route path="/ingenierias" element={<MainLayout><IngenieriasPage /></MainLayout>} />
        <Route path="/ingenierias/ambiental" element={<MainLayout><IngenieriaAmbientalPage /></MainLayout>} />
        <Route path="/ingenierias/civil" element={<MainLayout><IngenieriaCivilPage /></MainLayout>} />
        <Route path="/ingenierias/electrica" element={<MainLayout><IngenieriaElectricaPage /></MainLayout>} />
        <Route path="/ingenierias/electronica" element={<MainLayout><IngenieriaElectronicaPage /></MainLayout>} />
        <Route path="/ingenierias/industrial" element={<MainLayout><IngenieriaIndustrialPage /></MainLayout>} />
        <Route path="/ingenierias/mecanica" element={<MainLayout><IngenieriaMecanicaPage /></MainLayout>} />
        <Route path="/ingenierias/sistema" element={<MainLayout><IngenieriaSistemaPage /></MainLayout>} />
        <Route path="/transportes" element={<MainLayout><TransportesPage /></MainLayout>} />
        <Route path="/transportes/carga" element={<MainLayout><TransporteCargaPage /></MainLayout>} />
        <Route path="/transportes/especial" element={<MainLayout><TransporteEspecialPage /></MainLayout>} />
        <Route path="/transportes/hidrocarburos" element={<MainLayout><TransporteHidrocarburosPage /></MainLayout>} />
        <Route path="/logistica" element={<MainLayout><LogisticaPage /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><BlogPage /></MainLayout>} />
        <Route path="/contacto" element={<MainLayout><ContactoPage /></MainLayout>} />
        <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
