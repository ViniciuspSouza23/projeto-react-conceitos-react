import FormulariosConcept from '../components/concepts/FormulariosConcept.jsx';
import { Send, CheckCircle, ShieldCheck, HelpCircle } from 'lucide-react';

export default function FormularioPage() {
  return (
    <div className="formulario-page">
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-amber">Módulo 08 &bull; Aula 02</span>
          <span className="badge badge-purple">Campos Controlados</span>
          <span className="badge badge-green">Validação em Tempo Real</span>
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          Formulários e Inputs Controlados
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '800px' }}>
          Aprenda como o React controla os dados de formulários através do estado. Veja a importância de <code>e.preventDefault()</code>, validações síncronas e feedback imediato ao usuário.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div className="card" style={{ padding: '1.25rem' }}>
          <strong style={{ color: 'var(--brand-primary)', display: 'block', marginBottom: '0.4rem' }}>
            O que é um Campo Controlado?
          </strong>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            É um elemento HTML cujo valor é governado exclusivamente pelo estado do componente React através da propriedade <code>value={'{estado}'}</code>.
          </p>
        </div>

        <div className="card" style={{ padding: '1.25rem' }}>
          <strong style={{ color: 'var(--brand-success)', display: 'block', marginBottom: '0.4rem' }}>
            Para que serve preventDefault()?
          </strong>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            Evita que o navegador execute a ação padrão de submissão do formulário, que seria recarregar o documento inteiro (reloading), preservando a SPA.
          </p>
        </div>

        <div className="card" style={{ padding: '1.25rem' }}>
          <strong style={{ color: 'var(--brand-amber)', display: 'block', marginBottom: '0.4rem' }}>
            Fluxo Contínuo de Dados
          </strong>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            Digitação do usuário &rarr; Disparo do evento <code>onChange</code> &rarr; Atualização do estado via <code>setState</code> &rarr; Renderização do novo valor no input.
          </p>
        </div>
      </div>

      <div className="card" style={{ padding: '2rem' }}>
        <FormulariosConcept />
      </div>
    </div>
  );
}
