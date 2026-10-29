import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';

export default function CardConceito({
  id,
  numero,
  titulo,
  subtitulo,
  categoria,
  modulo,
  descricao
}) {
  const getBadgeClass = (cat) => {
    switch (cat) {
      case 'Básico': return 'badge-blue';
      case 'Fundamentos': return 'badge-purple';
      case 'Estado': return 'badge-green';
      case 'Formulários': return 'badge-amber';
      case 'Efeitos': return 'badge-purple';
      case 'APIs': return 'badge-blue';
      default: return 'badge-green';
    }
  };

  return (
    <article className="card" id={`card-conceito-${id}`}>
      <div className="card-header">
        <span className="card-number">{numero}</span>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <span className="badge badge-purple" style={{ fontSize: '0.7rem' }}>{modulo}</span>
          <span className={`badge ${getBadgeClass(categoria)}`}>{categoria}</span>
        </div>
      </div>

      <h3 className="card-title">{titulo}</h3>
      <p style={{ fontSize: '0.82rem', color: 'var(--brand-primary)', marginBottom: '0.6rem', fontWeight: 500 }}>
        {subtitulo}
      </p>
      <p className="card-description">{descricao}</p>

      <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link
          to={`/conceito/${id}`}
          className="btn btn-sm btn-react"
          id={`link-explorar-${id}`}
        >
          <span>Explorar na prática</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
