import { useState } from 'react';
import CodeBlock from '../CodeBlock.jsx';
import { ToggleLeft, ToggleRight, Shield, User, Loader2, CheckCircle2, AlertTriangle, Eye, EyeOff } from 'lucide-react';

export default function RenderizacaoCondicionalConcept() {
  const [autenticado, setAutenticado] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [tipoAlerta, setTipoAlerta] = useState('sucesso'); // 'sucesso' | 'aviso' | 'oculto'

  const dispararCarregamento = () => {
    setCarregando(true);
    setTimeout(() => {
      setCarregando(false);
    }, 1200);
  };

  const codigo = `// 1. Operador Ternário (condicao ? verdadeiro : falso)
const mensagem = autenticado ? <PainelUsuario /> : <BotaoLogin />;

// 2. Curto-circuito com E lógico (&&)
// Só renderiza se a condição for estritamente verdadeira
{autenticado && isAdmin && (
  <button className="btn-admin">Acessar Painel Master</button>
)}

// 3. Early Return (retorno antecipado dentro de um componente)
function StatusRequisicao({ carregando }) {
  if (carregando) {
    return <p className="spinner">Carregando dados do servidor...</p>;
  }
  return <p>Operação concluída com sucesso!</p>;
}`;

  return (
    <div className="concept-detail-content">
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
          A <strong>Renderização Condicional</strong> no React funciona da mesma maneira que as condições funcionam no JavaScript.
          Utilizamos operadores JavaScript como <code>if/return</code> antecipado, operador ternário <code>condicao ? verdadeiro : falso</code> e o operador de curto-circuito lógico <code>condicao && elemento</code> para determinar quais elementos devem ser montados na tela.
        </p>
      </div>

      <div className="playground-box">
        <div className="playground-title">
          <ToggleRight size={16} />
          <span>Laboratório Interativo: Controle de Exibição da Interface</span>
        </div>

        {/* Toggles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
              Autenticação (Ternário):
            </span>
            <button
              onClick={() => setAutenticado(a => !a)}
              className={`btn btn-sm ${autenticado ? 'btn-primary' : 'btn-secondary'}`}
              style={{ width: '100%' }}
            >
              {autenticado ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
              <span>{autenticado ? 'Usuário Autenticado' : 'Deslogado'}</span>
            </button>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
              Nível Admin (Operador &&):
            </span>
            <button
              onClick={() => setIsAdmin(a => !a)}
              disabled={!autenticado}
              className={`btn btn-sm ${isAdmin ? 'btn-react' : 'btn-secondary'}`}
              style={{ width: '100%', opacity: autenticado ? 1 : 0.4 }}
            >
              <Shield size={16} />
              <span>{isAdmin ? 'É Administrador (True)' : 'Usuário Padrão'}</span>
            </button>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
              Estado Assíncrono (if/return):
            </span>
            <button
              onClick={dispararCarregamento}
              disabled={carregando}
              className="btn btn-sm btn-secondary"
              style={{ width: '100%' }}
            >
              {carregando ? <Loader2 size={16} className="animate-spin" /> : <RefreshCwIcon />}
              <span>{carregando ? 'Simulando...' : 'Simular Loading'}</span>
            </button>
          </div>
        </div>

        {/* Live Output */}
        <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--brand-primary)', fontWeight: 700, marginBottom: '0.75rem' }}>
            Interface Renderizada com Base no Estado Atual:
          </div>

          {carregando ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--brand-react)', padding: '1rem 0' }}>
              <Loader2 size={24} style={{ animation: 'spinSlow 1s linear infinite' }} />
              <div>
                <strong>Carregando dados da sessão...</strong>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Renderizado através de early return: if (carregando) return &lt;Spinner /&gt;</div>
              </div>
            </div>
          ) : (
            <div>
              {/* Ternary Demonstration */}
              {autenticado ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(56, 189, 248, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                    <User size={22} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)' }}>Bem-vindo de volta, Carlos Eduardo!</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Condição verdadeira: <code>autenticado ? &lt;Perfil /&gt; : &lt;Login /&gt;</code>
                    </span>
                  </div>
                </div>
              ) : (
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Nenhum usuário conectado no momento.
                  </p>
                  <button onClick={() => setAutenticado(true)} className="btn btn-sm btn-primary">
                    Efetuar Login Simulado
                  </button>
                </div>
              )}

              {/* Logical AND Demonstration */}
              {autenticado && isAdmin && (
                <div style={{ padding: '1rem', background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Shield size={18} color="#c084fc" />
                    <span style={{ fontSize: '0.9rem', color: '#e9d5ff', fontWeight: 600 }}>
                      Painel Administrativo Restrito Desbloqueado!
                    </span>
                  </div>
                  <span className="badge badge-purple">Renderizado com (autenticado && isAdmin)</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <CodeBlock code={codigo} language="jsx" title="Exemplos de Condicionais em JSX" />
    </div>
  );
}

function RefreshCwIcon() {
  return <span style={{ marginRight: '4px' }}>⚡</span>;
}
