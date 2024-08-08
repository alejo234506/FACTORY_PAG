import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import InicioPage from './pages/inicio/InicioPage'
import CertificadosPage from './pages/certificados/CertificadosPage'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><InicioPage /></MainLayout>} />
        <Route path="/inicio" element={<MainLayout><InicioPage /></MainLayout>} />
        <Route path="/certificados" element={<MainLayout><CertificadosPage /></MainLayout>} />
      </Routes>
    </Router>
  )
}

export default App
