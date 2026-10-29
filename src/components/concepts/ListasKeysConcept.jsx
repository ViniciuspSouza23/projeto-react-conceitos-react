import { useState } from 'react';
import CodeBlock from '../CodeBlock.jsx';
import { ListFilter, Plus, Trash2, Key, Search, UserCheck } from 'lucide-react';

export default function ListasKeysConcept() {
  const [alunos, setAlunos] = useState([
    { id: 101, nome: "Ana Beatriz", curso: "Análise e Des. de Sistemas", status: "Aprovado", nota: 9.2 },
    { id: 102, nome: "Bruno Silveira", curso: "Frameworks Front-end", status: "Aprovado", nota: 8.5 },
    { id: 103, nome: "Caio Fernando", curso: "Engenharia de Software", status: "Recuperação", nota: 6.0 },
    { id: 104, nome: "Daniela Rocha", curso: "Frameworks Front-end", status: "Aprovado", nota: 9.8 },
    { id: 105, nome: "Eduardo Lima", curso: "Análise e Des. de Sistemas", status: "Aprovado", nota: 7.5 }
  ]);

  const [busca, setBusca] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('Todos');
  const [novoNome, setNovoNome] = useState('');
  const [novoCurso, setNovoCurso] = useState('Frameworks Front-end');

  // Filtragem combinada
  const alunosFiltrados = alunos.filter((aluno) => {
    const combinaBusca = aluno.nome.toLowerCase().includes(busca.toLowerCase()) ||
                         aluno.curso.toLowerCase().includes(busca.toLowerCase());
    const combinaStatus = filtroStatus === 'Todos' || aluno.status === filtroStatus;
    return combinaBusca && combinaStatus;
  });

  const adicionarAluno = () => {
    if (!novoNome.trim()) return;
    const novo = {
      id: Math.max(...alunos.map(a => a.id), 100) + 1,
      nome: novoNome,
      curso: novoCurso,
      status: "Aprovado",
      nota: (Math.random() * 3 + 7).toFixed(1)
    };
    setAlunos(prev => [novo, ...prev]);
    setNovoNome('');
  };

  const removerAluno = (id) => {
    setAlunos(prev => prev.filter(a => a.id !== id));
  };

  const codigo = `// Renderização de Listas e Keys
const alunos = [
  { id: 101, nome: "Ana", nota: 9.2 },
  { id: 102, nome: "Bruno", nota: 8.5 }
];

// 1. Filtrando antes de renderizar
const aprovados = alunos.filter(a => a.nota >= 7.0);

// 2. Mapeando para JSX com a prop 'key' única:
return (
  <ul>
    {aprovados.map((aluno) => (
      <li key={aluno.id}>
        <span>{aluno.nome}</span> - <strong>{aluno.nota}</strong>
      </li>
    ))}
  </ul>
);`;

  return (
    <div className="concept-detail-content">
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
          Para renderizar múltiplos elementos no React, transformamos coleções de dados (arrays) em elementos visuais
          utilizando a função <code>.map()</code>. Cada elemento renderizado em uma lista deve obrigatoriamente possuir
          uma propriedade especial chamada <strong>key</strong>, que permite ao React identificar com precisão quais itens
          foram adicionados, movidos ou removidos.
        </p>
      </div>

      <div className="playground-box">
        <div className="playground-title">
          <ListFilter size={16} />
          <span>Laboratório Interativo: Gestão de Coleções com .filter() e .map()</span>
        </div>

        {/* Filters & Search */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          <div className="search-input-wrapper" style={{ flex: '1', minWidth: '220px' }}>
            <Search className="search-icon" size={16} />
            <input
              type="text"
              className="search-input"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar aluno ou curso..."
            />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['Todos', 'Aprovado', 'Recuperação'].map(st => (
              <button
                key={st}
                onClick={() => setFiltroStatus(st)}
                className={`filter-pill ${filtroStatus === st ? 'active' : ''}`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Add Student Bar */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap', background: 'rgba(0,0,0,0.2)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
          <input
            type="text"
            className="form-input"
            style={{ maxWidth: '220px' }}
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
            placeholder="Nome do novo aluno"
            onKeyDown={(e) => e.key === 'Enter' && adicionarAluno()}
          />
          <select
            className="form-select"
            style={{ maxWidth: '200px' }}
            value={novoCurso}
            onChange={(e) => setNovoCurso(e.target.value)}
          >
            <option value="Frameworks Front-end">Frameworks Front-end</option>
            <option value="Análise e Des. de Sistemas">Análise e Des. de Sistemas</option>
            <option value="Engenharia de Software">Engenharia de Software</option>
          </select>
          <button onClick={adicionarAluno} className="btn btn-primary btn-sm">
            <Plus size={14} />
            <span>Adicionar com Key Única</span>
          </button>
        </div>

        {/* Rendered List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {alunosFiltrados.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
              Nenhum aluno encontrado para este filtro de busca.
            </div>
          ) : (
            alunosFiltrados.map((aluno) => (
              <div
                key={aluno.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="badge badge-purple" style={{ fontFamily: 'var(--font-mono)' }}>
                    <Key size={11} /> key={aluno.id}
                  </span>
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{aluno.nome}</strong>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{aluno.curso}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-primary)' }}>
                    Nota: {aluno.nota}
                  </span>
                  <span className={`badge ${aluno.status === 'Aprovado' ? 'badge-green' : 'badge-amber'}`}>
                    {aluno.status}
                  </span>
                  <button
                    onClick={() => removerAluno(aluno.id)}
                    className="btn btn-sm btn-danger"
                    title="Remover item da lista"
                    style={{ padding: '0.25rem 0.5rem' }}
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <CodeBlock code={codigo} language="jsx" title="Mapeamento com Chaves Únicas" />
    </div>
  );
}
