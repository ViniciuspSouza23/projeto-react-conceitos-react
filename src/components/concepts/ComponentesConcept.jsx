import { useState } from 'react';
import CodeBlock from '../CodeBlock.jsx';
import { Layers, Plus, Trash2, Box, CheckCircle } from 'lucide-react';

// Subcomponente reutilizável 1: Cartão de Módulo
function ModuloCard({ id, titulo, descricao, status, onRemover }) {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '0.5rem',
      transition: 'all 0.2s ease'
    }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
          <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{titulo}</strong>
          <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>
            <CheckCircle size={10} />
            <span>{status}</span>
          </span>
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{descricao}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
        <button
          onClick={() => onRemover(id)}
          className="btn btn-sm btn-danger"
          style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}
          title="Remover esta instância reutilizada"
        >
          <Trash2 size={12} />
          <span>Desmontar</span>
        </button>
      </div>
    </div>
  );
}

// Subcomponente reutilizável 2: Botão de Ação Modular
function BotaoModular({ texto, icone: Icone, onClick, variante = 'primary' }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${variante === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
    >
      {Icone && <Icone size={16} />}
      <span>{texto}</span>
    </button>
  );
}

export default function ComponentesConcept() {
  const [modulos, setModulos] = useState([
    { id: 1, titulo: "Módulo Header", descricao: "Barra de navegação e identidade visual", status: "Renderizado" },
    { id: 2, titulo: "Módulo Catálogo", descricao: "Exibição em grade dos produtos cadastrados", status: "Renderizado" },
    { id: 3, titulo: "Módulo Rodapé", descricao: "Links institucionais e direitos autorais", status: "Renderizado" }
  ]);

  const [novoTitulo, setNovoTitulo] = useState('');

  const adicionarComponente = () => {
    if (!novoTitulo.trim()) return;
    const novo = {
      id: Date.now(),
      titulo: novoTitulo,
      descricao: "Nova instância reutilizável criada dinamicamente na árvore de componentes.",
      status: "Ativo"
    };
    setModulos(prev => [...prev, novo]);
    setNovoTitulo('');
  };

  const removerComponente = (id) => {
    setModulos(prev => prev.filter(m => m.id !== id));
  };

  const codigo = `// 1. Definição do componente modular reutilizável
function ModuloCard({ titulo, descricao, status, onRemover }) {
  return (
    <div className="card-modulo">
      <h4>{titulo}</h4>
      <p>{descricao}</p>
      <button onClick={onRemover}>Remover</button>
    </div>
  );
}

// 2. Composição no componente pai (App)
function App() {
  return (
    <main>
      <Header />
      <section className="grade">
        <ModuloCard titulo="Cabeçalho" descricao="Menu e logo" />
        <ModuloCard titulo="Produtos" descricao="Grade de itens" />
      </section>
      <Footer />
    </main>
  );
}`;

  return (
    <div className="concept-detail-content">
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
          <strong>Componentes</strong> são os blocos fundamentais de qualquer aplicação React.
          Eles são funções JavaScript que retornam elementos visuais (JSX). Ao dividir a interface em componentes menores,
          conseguimos reaproveitar código, facilitar a manutenção e manter consistência em toda a aplicação.
        </p>
      </div>

      <div className="playground-box">
        <div className="playground-title">
          <Layers size={16} />
          <span>Laboratório Interativo: Composição e Reutilização</span>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Adicione novas instâncias do componente <code>&lt;ModuloCard /&gt;</code> para ver a reutilização de uma mesma estrutura com dados distintos:
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="form-input"
            style={{ maxWidth: '320px' }}
            value={novoTitulo}
            onChange={(e) => setNovoTitulo(e.target.value)}
            placeholder="Nome do novo componente (ex: BarraBusca)"
            onKeyDown={(e) => e.key === 'Enter' && adicionarComponente()}
          />
          <BotaoModular
            texto="Instanciar Componente"
            icone={Plus}
            onClick={adicionarComponente}
            variante="primary"
          />
        </div>

        {/* Tree visualizer */}
        <div style={{ background: 'rgba(0, 0, 0, 0.4)', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid var(--border-subtle)', marginBottom: '1rem' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--brand-primary)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.75rem' }}>
            Árvore Hierárquica Virtual (Component Tree):
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            <div>&lt;<strong>App</strong>&gt;</div>
            <div style={{ paddingLeft: '1.25rem' }}>├── &lt;<strong>Navbar</strong> /&gt;</div>
            <div style={{ paddingLeft: '1.25rem' }}>├── &lt;<strong>GradeDeModulos</strong>&gt; <span style={{ color: 'var(--text-muted)' }}>({modulos.length} componentes filhos instanciados)</span></div>
            {modulos.map(m => (
              <div key={m.id} style={{ paddingLeft: '2.5rem', color: '#38bdf8' }}>
                │ └── &lt;<strong>ModuloCard</strong> titulo="{m.titulo}" /&gt;
              </div>
            ))}
            <div style={{ paddingLeft: '1.25rem' }}>└── &lt;<strong>Footer</strong> /&gt;</div>
            <div>&lt;/<strong>App</strong>&gt;</div>
          </div>
        </div>

        {/* Rendered Instances */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {modulos.map(m => (
            <ModuloCard
              key={m.id}
              id={m.id}
              titulo={m.titulo}
              descricao={m.descricao}
              status={m.status}
              onRemover={removerComponente}
            />
          ))}
        </div>
      </div>

      <CodeBlock code={codigo} language="jsx" title="Composição de Componentes em React" />
    </div>
  );
}
