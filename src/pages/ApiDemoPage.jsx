import ConsumoAPIsConcept from '../components/concepts/ConsumoAPIsConcept.jsx';
import { Terminal, Globe, Server, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ApiDemoPage() {
  return (
    <div className="api-demo-page">
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-blue">Módulo 10 &bull; Aula 02</span>
          <span className="badge badge-purple">Async / Await</span>
          <span className="badge badge-green">JSONPlaceholder API</span>
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          Consumo de APIs e Integração HTTP
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '800px' }}>
          Demonstração completa de requisições assíncronas no React utilizando a Fetch API. Gerenciamento de ciclo de vida (Loading, Sucesso e Tratamento de Erros HTTP) e simulação de método POST.
        </p>
      </div>

      {/* Guide Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div className="card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>
            <Globe size={18} />
            <strong style={{ fontSize: '0.95rem' }}>Requisições com Fetch</strong>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            Nativa do JavaScript moderno, a <code>fetch()</code> retorna uma Promise que deve ser aguardada com <code>await</code> e convertida com <code>response.json()</code>.
          </p>
        </div>

        <div className="card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-success)', marginBottom: '0.5rem' }}>
            <Server size={18} />
            <strong style={{ fontSize: '0.95rem' }}>Status e response.ok</strong>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            Erros HTTP como 404 e 500 não rejeitam a promise do fetch automaticamente. É fundamental checar <code>if (!response.ok) throw new Error(...)</code>.
          </p>
        </div>

        <div className="card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-accent)', marginBottom: '0.5rem' }}>
            <ShieldAlert size={18} />
            <strong style={{ fontSize: '0.95rem' }}>Segurança & Boas Práticas</strong>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            Nunca exponha chaves secretas de APIs privadas diretamente no código do navegador. Respeite políticas de CORS e autenticação JWT.
          </p>
        </div>
      </div>

      {/* Main Interactive Component */}
      <div className="card" style={{ padding: '2rem' }}>
        <ConsumoAPIsConcept />
      </div>
    </div>
  );
}
