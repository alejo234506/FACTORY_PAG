import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';
import InicioPage from './pages/inicio/Inicio'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><InicioPage /></MainLayout>} />
      </Routes>
    </Router>
  )
}

export default App
