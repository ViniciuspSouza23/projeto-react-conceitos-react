import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CodeBlock from '../CodeBlock.jsx';
import { Compass, Navigation, ExternalLink, ArrowRight, CornerDownRight } from 'lucide-react';

export default function ReactRouterConcept() {
  const navigate = useNavigate();
  const location = useLocation();
  const [parametroDigitado, setParametroDigitado] = useState('state-usestate');

  const rotasExemplo = [
    { rota: '/', nome: 'Página Inicial (Home)' },
    { rota: '/conceitos', nome: 'Catálogo de Conceitos' },
    { rota: '/conceito/jsx', nome: 'Detalhe do Conceito: JSX' },
    { rota: '/conceito/react-router', nome: 'Detalhe do Conceito: React Router' },
    { rota: '/api-demo', nome: 'Laboratório de APIs' },
    { rota: '/sobre', nome: 'Sobre o Projeto SENAI' }
  ];

  const navegarParaParametro = () => {
    if (parametroDigitado.trim()) {
      navigate(`/conceito/${parametroDigitado.trim()}`);
    }
  };

  const codigo = `import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

// 1. Configuração raiz de rotas
function App() {
  return (
    <BrowserRouter>
      {/* Navegação declarativa sem recarregar o documento */}
      <nav>
        <Link to="/">Início</Link>
        <Link to="/conceitos">Conceitos</Link>
      </nav>

      {/* Mapeamento de caminhos para componentes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conceitos" element={<Catalogo />} />
        {/* Rota dinâmica com parâmetro :id */}
        <Route path="/conceito/:id" element={<DetalheConceito />} />
      </Routes>
    </BrowserRouter>
  );
}

// 2. Extração do parâmetro na página de detalhe
function DetalheConceito() {
  const { id } = useParams(); // Retorna o valor dinâmico da URL
  return <h1>Visualizando o conceito: {id}</h1>;
}`;

  return (
    <div className="concept-detail-content">
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
          O <strong>React Router</strong> é a biblioteca padrão para gerenciamento de rotas e navegação em Single Page Applications (SPA) no ecossistema React.
          Ele sincroniza a interface do usuário com a URL do navegador através do History API, permitindo navegar entre páginas instantaneamente sem realizar novas requisições de página inteira para o servidor (zero reload).
        </p>
      </div>

      <div className="playground-box">
        <div className="playground-title">
          <Compass size={16} />
          <span>Laboratório Interativo: Roteamento SPA e useParams()</span>
        </div>

        {/* Current Location Info */}
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>URL Atual no Navegador (location.pathname):</span>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--brand-primary)', fontWeight: 600 }}>
                {location.pathname}
              </div>
            </div>
            <span className="badge badge-green">SPA Ativa (Sem Reload)</span>
          </div>
        </div>

        {/* Dynamic Parameter Dispatcher */}
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
          <strong style={{ fontSize: '0.85rem', color: 'var(--brand-react)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            Navegar Dinamicamente com useParams() na Rota <code>/conceito/:id</code>:
          </strong>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            Selecione ou digite um parâmetro para ser capturado via <code>const &#123; id &#125; = useParams()</code>:
          </p>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <input
              type="text"
              className="form-input"
              style={{ maxWidth: '280px' }}
              value={parametroDigitado}
              onChange={(e) => setParametroDigitado(e.target.value)}
              placeholder="Ex: props, formularios"
            />
            <button onClick={navegarParaParametro} className="btn btn-primary btn-sm">
              <Navigation size={14} />
              <span>Navegar via useNavigate()</span>
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', alignSelf: 'center' }}>Atalhos:</span>
            {['jsx', 'props', 'virtual-dom', 'useeffect', 'consumo-apis'].map(param => (
              <button
                key={param}
                onClick={() => navigate(`/conceito/${param}`)}
                className="btn btn-sm btn-secondary"
                style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}
              >
                :{param}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links with Link component */}
        <div>
          <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>
            Exemplos de Links Declarativos com <code>&lt;Link to="..."&gt;</code>:
          </strong>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.5rem' }}>
            {rotasExemplo.map((item, idx) => (
              <Link
                key={idx}
                to={item.rota}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.6rem 0.8rem',
                  background: 'rgba(0,0,0,0.25)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.15s ease'
                }}
              >
                <span>{item.nome}</span>
                <CornerDownRight size={14} color="#38bdf8" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CodeBlock code={codigo} language="jsx" title="Configuração e Utilização do React Router" />
    </div>
  );
}
