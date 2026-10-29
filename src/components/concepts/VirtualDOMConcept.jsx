import { useState } from 'react';
import CodeBlock from '../CodeBlock.jsx';
import { GitCompare, Cpu, Zap, RefreshCw } from 'lucide-react';

export default function VirtualDOMConcept() {
  const [contador, setContador] = useState(0);
  const [status, setStatus] = useState('Online');
  const [renderCount, setRenderCount] = useState(1);
  const [ultimoNodeAtualizado, setUltimoNodeAtualizado] = useState('Nenhum');

  const atualizarContador = () => {
    setContador(c => c + 1);
    setRenderCount(r => r + 1);
    setUltimoNodeAtualizado('<span>contador</span>');
  };

  const alternarStatus = () => {
    setStatus(s => s === 'Online' ? 'Ocupado' : 'Online');
    setRenderCount(r => r + 1);
    setUltimoNodeAtualizado('<span class="status">');
  };

  const codigo = `// Comparação Conceitual: DOM Real x Virtual DOM

// Abordagem Imperativa (DOM Tradicional):
// O navegador reconstrói e repinta elementos mesmo que quase nada tenha mudado
const elem = document.getElementById("meu-contador");
elem.innerText = "Novo valor: " + valor; // Força re-layout

// Abordagem Declarativa com Virtual DOM (React):
// 1. O desenvolvedor declara o estado:
const [contador, setContador] = useState(0);

// 2. O React gera uma representação leve em memória (Virtual DOM).
// 3. Ao mudar o estado, o React cria uma nova árvore Virtual DOM e faz o DIFF.
// 4. Apenas a tag com {contador} recebe a alteração no DOM real do navegador!
return <span>{contador}</span>;`;

  return (
    <div className="concept-detail-content">
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
          O <strong>Virtual DOM</strong> é uma representação leve em memória da árvore de elementos do navegador (DOM).
          Quando ocorre uma alteração de estado em um componente, o React calcula uma nova árvore virtual,
          compara com a versão anterior através do algoritmo de <strong>Reconciliação (Diffing)</strong> e atualiza
          no DOM real apenas as partes que realmente mudaram, economizando cálculos pesados de renderização.
        </p>
      </div>

      <div className="playground-box">
        <div className="playground-title">
          <GitCompare size={16} />
          <span>Simulador Visual: Virtual DOM vs Reconciliação no DOM Real</span>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <button onClick={atualizarContador} className="btn btn-primary">
            <Zap size={16} />
            <span>Disparar Mudança de Estado (Contador: {contador})</span>
          </button>
          <button onClick={alternarStatus} className="btn btn-secondary">
            <RefreshCw size={16} />
            <span>Alternar Status ({status})</span>
          </button>
        </div>

        {/* Visual comparison of trees */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {/* Virtual DOM Representation */}
          <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--brand-primary)', fontSize: '0.9rem' }}>
                1. Árvore Virtual DOM (Em Memória)
              </strong>
              <span className="badge badge-blue">Re-render: #{renderCount}</span>
            </div>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', lineHeight: '1.8', color: '#94a3b8' }}>
              <div>&lt;div class="card"&gt;</div>
              <div style={{ paddingLeft: '1rem' }}>&lt;h3&gt;Painel de Usuário&lt;/h3&gt;</div>
              <div style={{
                paddingLeft: '1rem',
                color: ultimoNodeAtualizado.includes('status') ? '#38bdf8' : '#94a3b8',
                background: ultimoNodeAtualizado.includes('status') ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                borderRadius: '4px'
              }}>
                &lt;p&gt;Status: <strong>"{status}"</strong>&lt;/p&gt;
              </div>
              <div style={{
                paddingLeft: '1rem',
                color: ultimoNodeAtualizado.includes('contador') ? '#38bdf8' : '#94a3b8',
                background: ultimoNodeAtualizado.includes('contador') ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                borderRadius: '4px'
              }}>
                &lt;p&gt;Cliques: <strong>{contador}</strong>&lt;/p&gt;
              </div>
              <div style={{ paddingLeft: '1rem', color: '#64748b' }}>&lt;footer&gt;Rodapé imutável&lt;/footer&gt;</div>
              <div>&lt;/div&gt;</div>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
              * Árvore inteira recalculada em nanosegundos na memória JavaScript.
            </p>
          </div>

          {/* Real DOM Representation */}
          <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--brand-success)', fontSize: '0.9rem' }}>
                2. DOM Real (Browser HTML)
              </strong>
              <span className="badge badge-green">Nós Atualizados: 1</span>
            </div>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', lineHeight: '1.8', color: '#94a3b8' }}>
              <div>&lt;div class="card"&gt; (intocado)</div>
              <div style={{ paddingLeft: '1rem', color: '#64748b' }}>&lt;h3&gt; (intocado)</div>
              <div style={{
                paddingLeft: '1rem',
                color: ultimoNodeAtualizado.includes('status') ? '#34d399' : '#64748b',
                background: ultimoNodeAtualizado.includes('status') ? 'rgba(52, 211, 153, 0.15)' : 'transparent',
                borderRadius: '4px'
              }}>
                {ultimoNodeAtualizado.includes('status') ? '⚡ SOMENTE ESTE TEXTO FOI MODIFICADO' : '&lt;p&gt;Status (intocado)'}
              </div>
              <div style={{
                paddingLeft: '1rem',
                color: ultimoNodeAtualizado.includes('contador') ? '#34d399' : '#64748b',
                background: ultimoNodeAtualizado.includes('contador') ? 'rgba(52, 211, 153, 0.15)' : 'transparent',
                borderRadius: '4px'
              }}>
                {ultimoNodeAtualizado.includes('contador') ? '⚡ SOMENTE ESTE TEXTO FOI MODIFICADO' : '&lt;p&gt;Cliques (intocado)'}
              </div>
              <div style={{ paddingLeft: '1rem', color: '#64748b' }}>&lt;footer&gt; (intocado)</div>
              <div>&lt;/div&gt;</div>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
              * Graças ao Diffing, os nós irmãos e pais não sofrem re-renderização nem repaint no navegador.
            </p>
          </div>
        </div>
      </div>

      <CodeBlock code={codigo} language="javascript" title="Funcionamento do Virtual DOM" />
    </div>
  );
}
