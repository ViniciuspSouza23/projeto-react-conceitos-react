import { useState } from 'react';
import { Link } from 'react-router-dom';
import { conceitosData } from '../data/conceitosData.js';
import CardConceito from '../components/CardConceito.jsx';
import { Atom, Sparkles, BookOpen, Layers, Terminal, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

// Import concept components for instant interactive preview
import JSXConcept from '../components/concepts/JSXConcept.jsx';
import ComponentesConcept from '../components/concepts/ComponentesConcept.jsx';
import PropsConcept from '../components/concepts/PropsConcept.jsx';
import VirtualDOMConcept from '../components/concepts/VirtualDOMConcept.jsx';
import ListasKeysConcept from '../components/concepts/ListasKeysConcept.jsx';
import RenderizacaoCondicionalConcept from '../components/concepts/RenderizacaoCondicionalConcept.jsx';
import StateUseStateConcept from '../components/concepts/StateUseStateConcept.jsx';
import FormulariosConcept from '../components/concepts/FormulariosConcept.jsx';
import UseEffectConcept from '../components/concepts/UseEffectConcept.jsx';
import ConsumoAPIsConcept from '../components/concepts/ConsumoAPIsConcept.jsx';
import ReactRouterConcept from '../components/concepts/ReactRouterConcept.jsx';

const conceptComponentMap = {
  'jsx': JSXConcept,
  'componentes': ComponentesConcept,
  'props': PropsConcept,
  'virtual-dom': VirtualDOMConcept,
  'listas-keys': ListasKeysConcept,
  'renderizacao-condicional': RenderizacaoCondicionalConcept,
  'state-usestate': StateUseStateConcept,
  'formularios': FormulariosConcept,
  'useeffect': UseEffectConcept,
  'consumo-apis': ConsumoAPIsConcept,
  'react-router': ReactRouterConcept,
};

export default function HomePage() {
  const [conceitoAtivoId, setConceitoAtivoId] = useState('jsx');

  const conceitoAtivo = conceitosData.find(c => c.id === conceitoAtivoId) || conceitosData[0];
  const ComponentePreview = conceptComponentMap[conceitoAtivo.id] || JSXConcept;

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-tag">
          <Sparkles size={14} />
          <span>SENAI &bull; Frameworks Front-end &bull; Prof. Me. Deivison S. Takatu</span>
        </div>

        <h1 className="hero-title">
          Aprenda <span className="highlight">React na Prática</span> com Laboratórios Interativos
        </h1>

        <p className="hero-subtitle">
          Uma aplicação completa desenvolvida para consolidar todos os 11 conceitos fundamentais e avançados de React: desde a sintaxe JSX até consumo de APIs externas e navegação com React Router.
        </p>

        <div className="hero-cta">
          <Link to="/conceitos" className="btn btn-primary" id="btn-hero-catalogo">
            <BookOpen size={16} />
            <span>Explorar Todos os 11 Conceitos</span>
          </Link>
          <Link to="/api-demo" className="btn btn-secondary" id="btn-hero-api">
            <Terminal size={16} />
            <span>Testar Consumo de API</span>
          </Link>
          <Link to="/formulario" className="btn btn-secondary" id="btn-hero-form">
            <span>Formulário Controlado</span>
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', margin: '1rem 0 3rem' }}>
        <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--brand-react)' }}>11</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Módulos Interativos</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Com playgrounds em tempo real</div>
        </div>

        <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--brand-primary)' }}>02</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Aulas Integradas</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Projeto 01 e Projeto 02 do SENAI</div>
        </div>

        <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--brand-success)' }}>100%</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>SPA Reativa</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>React 19 + React Router 7 + Vite</div>
        </div>

        <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--brand-accent)' }}>0</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Dependências CSS Pesadas</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Design System Vanilla Moderno</div>
        </div>
      </section>

      {/* Interactive Concept Showcase (Tabbed Experience) */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Laboratório Rápido de Conceitos
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Selecione qualquer conceito para experimentar o laboratório correspondente imediatamente:
            </p>
          </div>
          <Link to={`/conceito/${conceitoAtivo.id}`} className="btn btn-sm btn-react">
            <span>Ver página completa de {conceitoAtivo.titulo}</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Tab pills */}
        <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
          {conceitosData.map(c => (
            <button
              key={c.id}
              onClick={() => setConceitoAtivoId(c.id)}
              className={`filter-pill ${conceitoAtivoId === c.id ? 'active' : ''}`}
              style={{ whiteSpace: 'nowrap' }}
            >
              <span>{c.numero}. {c.titulo.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Concept Card Showcase */}
        <div className="card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <span className="card-number" style={{ marginRight: '0.5rem' }}>{conceitoAtivo.numero}</span>
              <span className="badge badge-purple">{conceitoAtivo.modulo}</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '0.5rem', color: 'var(--text-primary)' }}>
                {conceitoAtivo.titulo}
              </h3>
              <p style={{ color: 'var(--brand-primary)', fontWeight: 500, marginTop: '0.2rem' }}>
                {conceitoAtivo.subtitulo}
              </p>
            </div>
            <Link to={`/conceito/${conceitoAtivo.id}`} className="btn btn-primary">
              <span>Abrir Aula Dedicada</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Render the interactive preview */}
          <ComponentePreview />
        </div>
      </section>

      {/* Featured Grid Section */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Grade Completa de Conceitos
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Acesse qualquer um dos tópicos estudados para ver detalhes teóricos e códigos práticos
            </p>
          </div>
          <Link to="/conceitos" className="btn btn-secondary">
            <span>Ver Catálogo</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="concept-grid">
          {conceitosData.slice(0, 6).map(conceito => (
            <CardConceito
              key={conceito.id}
              id={conceito.id}
              numero={conceito.numero}
              titulo={conceito.titulo}
              subtitulo={conceito.subtitulo}
              categoria={conceito.categoria}
              modulo={conceito.modulo}
              descricao={conceito.descricao}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
