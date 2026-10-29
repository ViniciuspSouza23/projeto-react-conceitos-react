import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import ConceitosPage from './pages/ConceitosPage.jsx';
import ConceitoDetalhePage from './pages/ConceitoDetalhePage.jsx';
import ApiDemoPage from './pages/ApiDemoPage.jsx';
import FormularioPage from './pages/FormularioPage.jsx';
import SobrePage from './pages/SobrePage.jsx';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/conceitos" element={<ConceitosPage />} />
          <Route path="/conceito/:id" element={<ConceitoDetalhePage />} />
          <Route path="/api-demo" element={<ApiDemoPage />} />
          <Route path="/formulario" element={<FormularioPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          {/* Rota Fallback 404 redirecionando para catálogo */}
          <Route path="*" element={<ConceitosPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
