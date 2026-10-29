import { useState } from 'react';
import CodeBlock from '../CodeBlock.jsx';
import { Sparkles, Code2, AlertCircle } from 'lucide-react';

export default function JSXConcept() {
  const [nome, setNome] = useState('Vinicius');
  const [cargo, setCargo] = useState('Desenvolvedor Front-end');
  const [anoNascimento, setAnoNascimento] = useState(2003);
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - Number(anoNascimento);

  const codigo = `// Interpolação de expressões no JSX com chaves { }
const nome = "${nome}";
const cargo = "${cargo}";
const anoNascimento = ${anoNascimento};
const idade = ${anoAtual} - anoNascimento;

function CartaoPerfil() {
  return (
    <div className="perfil-card">
      <h2>{nome.toUpperCase()}</h2>
      <p className="cargo">{cargo}</p>
      <p>Idade calculada: {idade} anos</p>
      <p>Status: {idade >= 18 ? "Maior de idade" : "Menor de idade"}</p>
    </div>
  );
}`;

  return (
    <div className="concept-detail-content">
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
          <strong>JSX</strong> (JavaScript XML) é uma extensão de sintaxe para JavaScript recomendada pelo React.
          Ela permite escrever estruturas visuais semelhantes ao HTML diretamente dentro do código JavaScript,
          combinando marcação e lógica em um único local declarativo.
        </p>
      </div>

      <div className="playground-box">
        <div className="playground-title">
          <Sparkles size={16} />
          <span>Laboratório Interativo: Interpolação JSX</span>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Altere os valores abaixo e veja as expressões JavaScript sendo calculadas e renderizadas dinamicamente dentro do JSX:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Nome:</label>
            <input
              type="text"
              className="form-input"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
            />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Cargo / Especialidade:</label>
            <input
              type="text"
              className="form-input"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              placeholder="Ex: Desenvolvedor Front-end"
            />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Ano de Nascimento:</label>
            <input
              type="number"
              className="form-input"
              value={anoNascimento}
              onChange={(e) => setAnoNascimento(Number(e.target.value))}
              min="1950"
              max={anoAtual}
            />
          </div>
        </div>

        {/* Live JSX Render Output */}
        <div style={{ background: 'rgba(0, 216, 255, 0.05)', border: '1px solid rgba(0, 216, 255, 0.25)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--brand-react)', fontWeight: 700, letterSpacing: '0.05em' }}>
            Saída Renderizada pelo JSX:
          </span>
          <div style={{ marginTop: '0.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>
              {nome ? nome.toUpperCase() : '(Sem nome informado)'}
            </h3>
            <p style={{ color: 'var(--brand-primary)', fontWeight: 500, fontSize: '0.95rem' }}>{cargo}</p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="badge badge-purple">
                Idade Calculada: {isNaN(idade) ? '—' : `${idade} anos`}
              </span>
              <span className={`badge ${idade >= 18 ? 'badge-green' : 'badge-amber'}`}>
                {idade >= 18 ? 'Maior de idade (Apto)' : 'Menor de idade'}
              </span>
              <span className="badge badge-blue">
                Caracteres no nome: {nome.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          Diferenças Essenciais entre JSX e HTML Tradicional
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div className="card" style={{ padding: '1rem' }}>
            <strong style={{ color: 'var(--brand-primary)' }}>1. Atributos em CamelCase</strong>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              Usa-se <code>className</code> em vez de <code>class</code> e <code>htmlFor</code> em vez de <code>for</code> porque estas são palavras reservadas do JavaScript.
            </p>
          </div>
          <div className="card" style={{ padding: '1rem' }}>
            <strong style={{ color: 'var(--brand-primary)' }}>2. Fechamento de Tags</strong>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              Todas as tags sem conteúdo DEVEM ser auto-fechadas com barra, como <code>&lt;img /&gt;</code>, <code>&lt;input /&gt;</code> e <code>&lt;br /&gt;</code>.
            </p>
          </div>
          <div className="card" style={{ padding: '1rem' }}>
            <strong style={{ color: 'var(--brand-primary)' }}>3. Elemento Raiz Único</strong>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              Um componente deve retornar um elemento raiz único ou utilizar um Fragment <code>&lt;&gt;...&lt;/&gt;</code> para agrupar múltiplos nós.
            </p>
          </div>
        </div>
      </div>

      <CodeBlock code={codigo} language="jsx" title="Exemplo de Sintaxe JSX e Expressões" />
    </div>
  );
}
