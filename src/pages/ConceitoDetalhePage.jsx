import { useParams, Link, useNavigate } from 'react-router-dom';
import { conceitosData } from '../data/conceitosData.js';
import CodeBlock from '../components/CodeBlock.jsx';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, BookOpen, Layers } from 'lucide-react';

// Import concept components
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

export default function ConceitoDetalhePage() {
  const { id } = useParams(); // Hook useParams do React Router!
  const navigate = useNavigate();

  const indexAtual = conceitosData.findIndex(c => c.id === id);
  const conceito = conceitosData[indexAtual];

  if (!conceito) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '4rem 1.5rem', maxWidth: '600px', margin: '2rem auto' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--brand-danger)', marginBottom: '0.75rem' }}>
          Conceito Não Encontrado
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          O identificador <code>"{id}"</code> passado na rota dinâmica não corresponde a nenhum dos conceitos cadastrados.
        </p>
        <Link to="/conceitos" className="btn btn-primary">
          <ArrowLeft size={16} />
          <span>Voltar para o Catálogo de Conceitos</span>
        </Link>
      </div>
    );
  }

  const anterior = indexAtual > 0 ? conceitosData[indexAtual - 1] : null;
  const proximo = indexAtual < conceitosData.length - 1 ? conceitosData[indexAtual + 1] : null;

  const ConceptComponent = conceptComponentMap[conceito.id] || JSXConcept;

  return (
    <div className="conceito-detalhe-page">
      {/* Breadcrumbs */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        <Link to="/" style={{ color: 'var(--text-secondary)' }}>Início</Link>
        <ChevronRight size={14} />
        <Link to="/conceitos" style={{ color: 'var(--text-secondary)' }}>Conceitos</Link>
        <ChevronRight size={14} />
        <span style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>{conceito.titulo}</span>
      </nav>

      {/* Main Header */}
      <header style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <span className="card-number">{conceito.numero}</span>
          <span className="badge badge-purple">{conceito.modulo}</span>
          <span className="badge badge-blue">{conceito.categoria}</span>
          <span className="badge badge-green" style={{ fontFamily: 'var(--font-mono)' }}>useParams: "{id}"</span>
        </div>

        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          {conceito.titulo}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--brand-primary)', fontWeight: 500, maxWidth: '800px' }}>
          {conceito.subtitulo}
        </p>
      </header>

      {/* Key points box */}
      <section style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle2 size={18} color="var(--brand-success)" />
          <span>Pontos-Chave Teóricos e Boas Práticas:</span>
        </h3>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {conceito.pontosChave.map((ponto, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <span style={{ color: 'var(--brand-react)', marginTop: '0.2rem' }}>&bull;</span>
              <span>{ponto}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Interactive Playground for this concept */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
          Demonstração Prática Interativa
        </h2>
        <div className="card" style={{ padding: '2rem' }}>
          <ConceptComponent />
        </div>
      </section>

      {/* Pagination: Next & Previous */}
      <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
        {anterior ? (
          <Link to={`/conceito/${anterior.id}`} className="btn btn-secondary">
            <ArrowLeft size={16} />
            <span>Anterior: {anterior.numero}. {anterior.titulo}</span>
          </Link>
        ) : <div />}

        {proximo ? (
          <Link to={`/conceito/${proximo.id}`} className="btn btn-primary">
            <span>Próximo: {proximo.numero}. {proximo.titulo}</span>
            <ArrowRight size={16} />
          </Link>
        ) : (
          <Link to="/conceitos" className="btn btn-primary">
            <span>Voltar ao Catálogo Geral</span>
            <BookOpen size={16} />
          </Link>
        )}
      </footer>
    </div>
  );
}
