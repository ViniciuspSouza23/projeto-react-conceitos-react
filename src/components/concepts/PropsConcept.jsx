import { useState } from 'react';
import CodeBlock from '../CodeBlock.jsx';
import { Sliders, Tag, Check, X, Bell } from 'lucide-react';

// Componente Filho que recebe props
function CardProduto({ nome, preco, emEstoque, categoria, tags, onComprar }) {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.04)',
      border: `2px solid ${emEstoque ? 'rgba(52, 211, 153, 0.3)' : 'rgba(248, 113, 113, 0.3)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: '1.25rem',
      position: 'relative'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
        <div>
          <span className="badge badge-purple" style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>{categoria}</span>
          <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{nome}</h4>
        </div>
        <span className={`badge ${emEstoque ? 'badge-green' : 'badge-amber'}`}>
          {emEstoque ? <><Check size={12} /> Disponível</> : <><X size={12} /> Esgotado</>}
        </span>
      </div>

      <div style={{ margin: '0.75rem 0' }}>
        <span style={{ fontSize: '1.4rem', fontWeight: 700, color: '#38bdf8' }}>
          R$ {Number(preco).toFixed(2).replace('.', ',')}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {tags.map((t, idx) => (
          <span key={idx} style={{ fontSize: '0.72rem', background: 'rgba(255, 255, 255, 0.08)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--text-secondary)' }}>
            #{t}
          </span>
        ))}
      </div>

      <button
        onClick={() => onComprar(nome)}
        disabled={!emEstoque}
        className="btn btn-primary"
        style={{ width: '100%', opacity: emEstoque ? 1 : 0.5, cursor: emEstoque ? 'pointer' : 'not-allowed' }}
      >
        <Bell size={16} />
        <span>{emEstoque ? 'Adquirir Curso / Licença' : 'Indisponível no Momento'}</span>
      </button>
    </div>
  );
}

export default function PropsConcept() {
  const [nome, setNome] = useState('Curso React + Vite');
  const [preco, setPreco] = useState(149.9);
  const [emEstoque, setEmEstoque] = useState(true);
  const [categoria, setCategoria] = useState('Front-end');
  const [tagsTexto, setTagsTexto] = useState('react, javascript, spa, hooks');
  const [mensagemCallback, setMensagemCallback] = useState('');

  const tags = tagsTexto.split(',').map(t => t.trim()).filter(Boolean);

  const handleComprar = (produtoNome) => {
    setMensagemCallback(`Callback disparado pelo Filho! O produto "${produtoNome}" foi selecionado pelo usuário.`);
  };

  const codigo = `// 1. Componente Filho recebendo props via desestruturação
function CardProduto({ nome, preco, emEstoque, categoria, tags, onComprar }) {
  return (
    <div className="card">
      <span className="categoria">{categoria}</span>
      <h3>{nome}</h3>
      <p>R$ {preco}</p>
      <p>Status: {emEstoque ? "Disponível" : "Esgotado"}</p>
      <button onClick={() => onComprar(nome)} disabled={!emEstoque}>
        Adquirir
      </button>
    </div>
  );
}

// 2. Componente Pai passando dados e funções (Props) para o Filho:
<CardProduto
  nome="${nome}"
  preco={${preco}}
  emEstoque={${emEstoque}}
  categoria="${categoria}"
  tags={[${tags.map(t => `"${t}"`).join(', ')}]}
  onComprar={(nome) => alert(\`Comprado: \${nome}\`)}
/>`;

  return (
    <div className="concept-detail-content">
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
          <strong>Props</strong> (propriedades) são a maneira que os componentes React usam para conversar entre si.
          Os dados sempre fluem no sentido <strong>pai para filho</strong> (fluxo unidirecional).
          O componente filho não pode alterar as props diretamente (são <em>read-only</em>).
        </p>
      </div>

      <div className="playground-box">
        <div className="playground-title">
          <Sliders size={16} />
          <span>Laboratório Interativo: Painel de Controle de Props</span>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          O componente pai gerencia as informações e envia para o componente filho <code>&lt;CardProduto /&gt;</code> através de props:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
          {/* Controls (Parent State) */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--brand-primary)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Parâmetros do Pai (Props Enviadas):
            </h4>

            <div className="form-group">
              <label className="form-label">Nome (String):</label>
              <input
                type="text"
                className="form-input"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Preço (Number):</label>
              <input
                type="number"
                step="0.1"
                className="form-input"
                value={preco}
                onChange={(e) => setPreco(Number(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Categoria (String):</label>
              <select
                className="form-select"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="Front-end">Front-end</option>
                <option value="Full-stack">Full-stack</option>
                <option value="Mobile">Mobile</option>
                <option value="UI/UX">UI/UX</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Tags separadas por vírgula (Array):</label>
              <input
                type="text"
                className="form-input"
                value={tagsTexto}
                onChange={(e) => setTagsTexto(e.target.value)}
              />
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="checkbox"
                  checked={emEstoque}
                  onChange={(e) => setEmEstoque(e.target.checked)}
                  style={{ width: '16px', height: '16px' }}
                />
                <span>Em Estoque (Boolean: {emEstoque ? 'true' : 'false'})</span>
              </label>
            </div>
          </div>

          {/* Rendered Child Component */}
          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--brand-react)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Componente Filho Renderizado:
            </h4>
            <CardProduto
              nome={nome}
              preco={preco}
              emEstoque={emEstoque}
              categoria={categoria}
              tags={tags}
              onComprar={handleComprar}
            />

            {mensagemCallback && (
              <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: '#38bdf8' }}>
                {mensagemCallback}
              </div>
            )}
          </div>
        </div>
      </div>

      <CodeBlock code={codigo} language="jsx" title="Passagem de Props em React" />
    </div>
  );
}
