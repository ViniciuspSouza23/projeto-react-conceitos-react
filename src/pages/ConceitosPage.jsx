import { useState } from 'react';
import { conceitosData } from '../data/conceitosData.js';
import CardConceito from '../components/CardConceito.jsx';
import { Search, BookOpen, Filter, X } from 'lucide-react';

export default function ConceitosPage() {
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');
  const [moduloAtivo, setModuloAtivo] = useState('Todos');

  const categorias = ['Todas', 'Básico', 'Fundamentos', 'Estado', 'Formulários', 'Efeitos', 'APIs', 'Navegação'];
  const modulos = ['Todos', 'Aula 01', 'Aula 02'];

  const conceitosFiltrados = conceitosData.filter(item => {
    const termo = busca.toLowerCase();
    const combinaBusca = item.titulo.toLowerCase().includes(termo) ||
                         item.subtitulo.toLowerCase().includes(termo) ||
                         item.descricao.toLowerCase().includes(termo);
    const combinaCategoria = categoriaAtiva === 'Todas' || item.categoria === categoriaAtiva;
    const combinaModulo = moduloAtivo === 'Todos' || item.modulo === moduloAtivo;
    return combinaBusca && combinaCategoria && combinaModulo;
  });

  const limparFiltros = () => {
    setBusca('');
    setCategoriaAtiva('Todas');
    setModuloAtivo('Todos');
  };

  return (
    <div className="conceitos-page">
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          Catálogo Geral de Conceitos React
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '750px' }}>
          Explore os 11 conceitos centrais abordados nas aulas de Frameworks Front-end do SENAI.
          Cada módulo inclui fundamentos teóricos, código-fonte demonstrativo e laboratório prático interativo.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="filter-bar">
        <div className="search-input-wrapper">
          <Search className="search-icon" size={16} />
          <input
            type="text"
            className="search-input"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Pesquisar por título, descrição ou conceito..."
            id="input-busca-conceitos"
          />
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Modulo selector */}
          <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Módulo:</span>
            {modulos.map(m => (
              <button
                key={m}
                onClick={() => setModuloAtivo(m)}
                className={`filter-pill ${moduloAtivo === m ? 'active' : ''}`}
                style={{ fontSize: '0.78rem', padding: '0.25rem 0.6rem' }}
              >
                {m}
              </button>
            ))}
          </div>

          {(busca || categoriaAtiva !== 'Todas' || moduloAtivo !== 'Todos') && (
            <button
              onClick={limparFiltros}
              className="btn btn-sm btn-secondary"
              title="Limpar todos os filtros"
            >
              <X size={14} />
              <span>Limpar</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaAtiva(cat)}
            className={`filter-pill ${categoriaAtiva === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Count Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
          Exibindo <strong>{conceitosFiltrados.length}</strong> de {conceitosData.length} conceitos
        </span>
      </div>

      {/* Grid */}
      {conceitosFiltrados.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
          <BookOpen size={40} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
            Nenhum conceito encontrado
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            Nenhum tópico corresponde aos filtros selecionados. Tente alterar os termos de busca.
          </p>
          <button onClick={limparFiltros} className="btn btn-primary">
            Restaurar Filtros
          </button>
        </div>
      ) : (
        <div className="concept-grid">
          {conceitosFiltrados.map(conceito => (
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
      )}
    </div>
  );
}
