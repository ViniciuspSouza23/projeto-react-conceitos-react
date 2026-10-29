import { useState } from 'react';
import CodeBlock from '../CodeBlock.jsx';
import { Send, CheckCircle2, AlertCircle, FileText, User, Mail, MessageSquare } from 'lucide-react';

export default function FormulariosConcept() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    moduloInteresse: 'React Router',
    experiencia: 'Iniciante',
    comentario: '',
    concordaTermos: false
  });

  const [erros, setErros] = useState({});
  const [historicoEnvios, setHistoricoEnvios] = useState([]);
  const [feedbackSucesso, setFeedbackSucesso] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Limpar erro do campo ao digitar
    if (erros[name]) {
      setErros(prev => ({ ...prev, [name]: null }));
    }
  };

  const validar = () => {
    const novosErros = {};
    if (!formData.nome.trim()) novosErros.nome = "O nome é obrigatório.";
    if (!formData.email.trim()) {
      novosErros.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      novosErros.email = "Insira um formato de e-mail válido.";
    }
    if (!formData.concordaTermos) {
      novosErros.concordaTermos = "Você deve concordar com as diretrizes do curso.";
    }
    return novosErros;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recarregamento da página!

    const errosEncontrados = validar();
    if (Object.keys(errosEncontrados).length > 0) {
      setErros(errosEncontrados);
      setFeedbackSucesso(false);
      return;
    }

    // Sucesso
    const novoEnvio = {
      ...formData,
      id: Date.now(),
      horario: new Date().toLocaleTimeString()
    };

    setHistoricoEnvios(prev => [novoEnvio, ...prev]);
    setFeedbackSucesso(true);
    setFormData({
      nome: '',
      email: '',
      moduloInteresse: 'React Router',
      experiencia: 'Iniciante',
      comentario: '',
      concordaTermos: false
    });

    setTimeout(() => {
      setFeedbackSucesso(false);
    }, 4000);
  };

  const codigo = `import { useState } from "react";

function FormularioInscricao() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    // 1. Impede a ação padrão do navegador (recarregar a página inteira)
    e.preventDefault();

    // 2. Validação simples
    if (!nome || !email) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    // 3. Processamento controlado
    console.log("Dados prontos para envio:", { nome, email });
    alert("Inscrição efetuada com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo Controlado: value associado ao state + onChange */}
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu nome"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu.email@exemplo.com"
      />
      <button type="submit">Enviar Formulário</button>
    </form>
  );
}`;

  return (
    <div className="concept-detail-content">
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
          Em formulários React, os elementos de entrada como <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code> e <code>&lt;select&gt;</code> são chamados de <strong>Campos Controlados</strong> quando o seu valor é gerenciado pelo estado do componente. O evento <code>onSubmit</code> combinado com <code>e.preventDefault()</code> impede o comportamento padrão do navegador de recarregar a página.
        </p>
      </div>

      <div className="playground-box">
        <div className="playground-title">
          <FileText size={16} />
          <span>Laboratório Interativo: Formulário Controlado com Validação</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {/* Form */}
          <form onSubmit={handleSubmit} style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--brand-primary)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Cadastro de Aluno no Laboratório
            </h4>

            {feedbackSucesso && (
              <div style={{ padding: '0.75rem', background: 'rgba(52, 211, 153, 0.15)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: 'var(--radius-sm)', color: '#34d399', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <CheckCircle2 size={16} />
                <span>Formulário enviado com sucesso sem recarregar a página!</span>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">
                <span>Nome Completo: *</span>
              </label>
              <input
                type="text"
                name="nome"
                className="form-input"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Ex: Carlos Drummond"
              />
              {erros.nome && <span className="form-error">{erros.nome}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <span>E-mail Acadêmico: *</span>
              </label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                placeholder="carlos@senai.br"
              />
              {erros.email && <span className="form-error">{erros.email}</span>}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div className="form-group">
                <label className="form-label">Tópico de Interesse:</label>
                <select
                  name="moduloInteresse"
                  className="form-select"
                  value={formData.moduloInteresse}
                  onChange={handleChange}
                >
                  <option value="React Router">React Router</option>
                  <option value="Consumo de APIs">Consumo de APIs</option>
                  <option value="useEffect e Hooks">useEffect e Hooks</option>
                  <option value="Virtual DOM">Virtual DOM</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Nível de Experiência:</label>
                <select
                  name="experiencia"
                  className="form-select"
                  value={formData.experiencia}
                  onChange={handleChange}
                >
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Comentário / Dúvida:</label>
              <textarea
                name="comentario"
                rows="2"
                className="form-textarea"
                value={formData.comentario}
                onChange={handleChange}
                placeholder="Qual o maior desafio encontrado até agora?"
              />
            </div>

            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <input
                  type="checkbox"
                  name="concordaTermos"
                  checked={formData.concordaTermos}
                  onChange={handleChange}
                  style={{ width: '16px', height: '16px' }}
                />
                <span>Concordo com o código de conduta e diretrizes da aula *</span>
              </label>
              {erros.concordaTermos && <span className="form-error">{erros.concordaTermos}</span>}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <Send size={16} />
              <span>Submeter com e.preventDefault()</span>
            </button>
          </form>

          {/* Live State Inspector & History */}
          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--brand-react)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Estado do React em Tempo Real (Controlled State):
            </h4>
            <div style={{ background: 'var(--code-bg)', border: '1px solid var(--code-border)', borderRadius: 'var(--radius-md)', padding: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#93c5fd', maxHeight: '180px', overflowY: 'auto', marginBottom: '1rem' }}>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>

            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Inscrições Registradas ({historicoEnvios.length})
            </h4>
            {historicoEnvios.length === 0 ? (
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Nenhum envio registrado nesta sessão ainda. Preencha o formulário e clique em submeter.
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '200px', overflowY: 'auto' }}>
                {historicoEnvios.map(item => (
                  <div key={item.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '0.6rem 0.8rem', fontSize: '0.82rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>{item.nome}</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{item.horario}</span>
                    </div>
                    <div style={{ color: 'var(--brand-primary)', fontSize: '0.78rem' }}>{item.email} &bull; {item.moduloInteresse}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <CodeBlock code={codigo} language="jsx" title="Manipulação de Formulários Controlados" />
    </div>
  );
}
