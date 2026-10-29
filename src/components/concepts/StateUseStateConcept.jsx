import { useState } from 'react';
import CodeBlock from '../CodeBlock.jsx';
import { Database, Plus, Minus, RotateCcw, AlertTriangle, CheckCircle, UserCheck } from 'lucide-react';

let variavelNormal = 0; // Variável comum fora ou dentro da função

export default function StateUseStateConcept() {
  const [contadorEstado, setContadorEstado] = useState(0);
  const [passo, setPasso] = useState(1);
  const [, setForcarAtualizacao] = useState({});

  // Objeto de estado complexo
  const [perfil, setPerfil] = useState({
    nome: "Lucas Mendes",
    curso: "Engenharia Front-end",
    semestre: 3
  });

  const incrementarVariavelComum = () => {
    variavelNormal += 1;
    console.log("Valor da variável normal no JS:", variavelNormal);
    // Observe que a tela NÃO atualiza!
  };

  const avancarSemestre = () => {
    setPerfil(prev => ({
      ...prev,
      semestre: prev.semestre + 1
    }));
  };

  const codigo = `import { useState } from "react";

function MeuComponente() {
  // 1. Variável comum: o React não observa e NÃO renderiza a tela
  let valorNormal = 0;
  function incrementarNormal() {
    valorNormal++; // Muda na memória, mas a tela fica congelada!
  }

  // 2. Estado Reativo com useState:
  // Dispara nova renderização a cada chamada de setContador
  const [contador, setContador] = useState(0);

  // 3. Estado em Objeto (atualização imutável com Spread Operator)
  const [perfil, setPerfil] = useState({ nome: "Ana", semestre: 1 });
  const proximoSemestre = () => {
    setPerfil(prev => ({ ...prev, semestre: prev.semestre + 1 }));
  };

  return (
    <div>
      <p>Contador reativo: {contador}</p>
      <button onClick={() => setContador(c => c + 1)}>Incrementar</button>
    </div>
  );
}`;

  return (
    <div className="concept-detail-content">
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
          O <strong>State</strong> (estado) representa a memória de um componente React.
          Diferente de variáveis comuns do JavaScript (que são recriadas a cada execução da função e não notificam a tela),
          o <strong>useState</strong> preserva os valores entre renderizações e informa o React que a interface precisa ser recalculada.
        </p>
      </div>

      <div className="playground-box">
        <div className="playground-title">
          <Database size={16} />
          <span>Laboratório Comparativo: Variável Comum vs useState Reativo</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {/* Ordinary Variable Box */}
          <div style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f87171', marginBottom: '0.75rem' }}>
              <AlertTriangle size={18} />
              <strong style={{ fontSize: '0.9rem' }}>Variável Comum (let variavel = 0)</strong>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Clique no botão abaixo. O valor no JavaScript muda internamente, mas a tela <strong>permanece inalterada</strong>:
            </p>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Valor na tela: {variavelNormal}
            </div>
            <button onClick={incrementarVariavelComum} className="btn btn-sm btn-secondary" style={{ width: '100%' }}>
              Modificar Variável Comum
            </button>
            <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              * Abra o DevTools Console (F12) para ver o console.log() crescendo sem afetar o HTML.
            </span>
          </div>

          {/* useState Reativo Box */}
          <div style={{ background: 'rgba(52, 211, 153, 0.05)', border: '1px solid rgba(52, 211, 153, 0.25)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34d399', marginBottom: '0.75rem' }}>
              <CheckCircle size={18} />
              <strong style={{ fontSize: '0.9rem' }}>Estado Reativo (useState)</strong>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              O React escuta a chamada do setter e <strong>re-renderiza</strong> o componente automaticamente:
            </p>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38bdf8', marginBottom: '1rem' }}>
              Valor Reativo: {contadorEstado}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setContadorEstado(c => c + passo)}
                className="btn btn-sm btn-primary"
                style={{ flex: 1 }}
              >
                <Plus size={14} /> +{passo}
              </button>
              <button
                onClick={() => setContadorEstado(c => Math.max(0, c - passo))}
                className="btn btn-sm btn-secondary"
                style={{ flex: 1 }}
              >
                <Minus size={14} /> -{passo}
              </button>
              <button
                onClick={() => setContadorEstado(0)}
                className="btn btn-sm btn-secondary"
                title="Resetar"
              >
                <RotateCcw size={14} />
              </button>
            </div>

            <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Passo do incremento:</span>
              {[1, 5, 10].map(p => (
                <button
                  key={p}
                  onClick={() => setPasso(p)}
                  className={`filter-pill ${passo === p ? 'active' : ''}`}
                  style={{ padding: '0.15rem 0.5rem', fontSize: '0.75rem' }}
                >
                  +{p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* State as Object */}
        <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--brand-primary)', textTransform: 'uppercase' }}>
              Estado como Objeto (Imutabilidade com Spread Operator)
            </h4>
            <button onClick={avancarSemestre} className="btn btn-sm btn-react">
              <UserCheck size={14} />
              <span>Avançar Semestre</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Aluno:</span>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{perfil.nome}</div>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Curso:</span>
              <div style={{ fontWeight: 600, color: 'var(--brand-primary)' }}>{perfil.curso}</div>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Semestre Atual:</span>
              <div><span className="badge badge-purple">{perfil.semestre}º Semestre</span></div>
            </div>
          </div>
        </div>
      </div>

      <CodeBlock code={codigo} language="jsx" title="Utilizando o Hook useState" />
    </div>
  );
}
