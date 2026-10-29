import { useState, useEffect } from 'react';
import CodeBlock from '../CodeBlock.jsx';
import { Clock, Play, Pause, RotateCcw, Monitor, FileText, CheckCircle2 } from 'lucide-react';

export default function UseEffectConcept() {
  const [tituloAba, setTituloAba] = useState("React Lab | useEffect Ativo");
  const [larguraJanela, setLarguraJanela] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const [cleanupCount, setCleanupCount] = useState(0);

  // Efeito 1: Sincronização com document.title
  useEffect(() => {
    const tituloOriginal = document.title;
    document.title = tituloAba;

    return () => {
      document.title = tituloOriginal;
    };
  }, [tituloAba]);

  // Efeito 2: Listener de redimensionamento de tela com CLEANUP
  useEffect(() => {
    const handleResize = () => {
      setLarguraJanela(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Função de limpeza vital para evitar vazamento de memória (memory leaks)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Efeito 3: Timer com setInterval e cancelamento no unmount
  useEffect(() => {
    let intervalo = null;

    if (ativo) {
      intervalo = setInterval(() => {
        setSegundos(s => s + 1);
      }, 1000);
    }

    return () => {
      if (intervalo) {
        clearInterval(intervalo);
        setCleanupCount(c => c + 1);
      }
    };
  }, [ativo]);

  const codigo = `import { useState, useEffect } from "react";

function MonitorJanelaETimer() {
  const [largura, setLargura] = useState(window.innerWidth);
  const [segundos, setSegundos] = useState(0);

  // 1. Sincronização externa (Window Listener com Cleanup)
  useEffect(() => {
    const handleResize = () => setLargura(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Função de Limpeza (Cleanup): executada ao desmontar ou antes da próxima execução
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Array vazio [] = executa apenas na montagem

  // 2. Timer com Intervalo e Limpeza
  useEffect(() => {
    const timer = setInterval(() => {
      setSegundos(s => s + 1);
    }, 1000);

    return () => clearInterval(timer); // Limpa o timer para evitar vazamento
  }, []);

  return <p>Janela: {largura}px | Tempo: {segundos}s</p>;
}`;

  return (
    <div className="concept-detail-content">
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
          O <strong>useEffect</strong> é o Hook utilizado para sincronizar componentes com sistemas externos
          (APIs, temporizadores, eventos globais de janela, manipulação direta de DOM como <code>document.title</code>).
          Ele gerencia o ciclo de vida através de seu <strong>array de dependências</strong> e previne vazamentos de memória através da <strong>função de limpeza (cleanup)</strong>.
        </p>
      </div>

      <div className="playground-box">
        <div className="playground-title">
          <Clock size={16} />
          <span>Laboratório Interativo: Efeitos e Funções de Limpeza (Cleanup)</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {/* Efeito 1: document.title */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-primary)', marginBottom: '0.75rem' }}>
              <FileText size={16} />
              <strong style={{ fontSize: '0.9rem' }}>1. Sincronizar Aba do Navegador</strong>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              Altere o texto e olhe para a aba do navegador:
            </p>
            <input
              type="text"
              className="form-input"
              value={tituloAba}
              onChange={(e) => setTituloAba(e.target.value)}
              placeholder="Digite o título da aba"
            />
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.5rem' }}>
              * Dependência [tituloAba]: dispara somente quando este texto é modificado.
            </span>
          </div>

          {/* Efeito 2: Event Listener de Resize */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-react)', marginBottom: '0.75rem' }}>
              <Monitor size={16} />
              <strong style={{ fontSize: '0.9rem' }}>2. Event Listener com Cleanup</strong>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              Redimensione a janela do seu navegador para testar o ouvinte:
            </p>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#38bdf8' }}>
              {larguraJanela}px
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.5rem' }}>
              * Array de dependências vazio []: listener registrado uma única vez e removido com removeEventListener.
            </span>
          </div>

          {/* Efeito 3: Timer & Cleanup */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-success)', marginBottom: '0.75rem' }}>
              <Clock size={16} />
              <strong style={{ fontSize: '0.9rem' }}>3. Temporizador (setInterval)</strong>
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34d399', marginBottom: '0.5rem' }}>
              {segundos}s
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setAtivo(a => !a)}
                className={`btn btn-sm ${ativo ? 'btn-secondary' : 'btn-primary'}`}
              >
                {ativo ? <Pause size={14} /> : <Play size={14} />}
                <span>{ativo ? 'Pausar' : 'Iniciar'}</span>
              </button>
              <button
                onClick={() => { setAtivo(false); setSegundos(0); }}
                className="btn btn-sm btn-secondary"
              >
                <RotateCcw size={14} />
                <span>Resetar</span>
              </button>
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.5rem' }}>
              * Limpezas executadas (clearInterval): {cleanupCount} vezes.
            </span>
          </div>
        </div>
      </div>

      <CodeBlock code={codigo} language="jsx" title="Exemplo Completo com useEffect e Limpeza" />
    </div>
  );
}
