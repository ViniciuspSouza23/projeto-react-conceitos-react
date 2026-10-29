import { GraduationCap, BookOpen, ExternalLink, Code, CheckCircle2, Layers } from 'lucide-react';
import GithubIcon from '../components/GithubIcon.jsx';

export default function SobrePage() {
  return (
    <div className="sobre-page">
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-purple">SENAI &bull; Frameworks Front-end</span>
          <span className="badge badge-blue">Atividades 01 & 02</span>
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          Sobre o Projeto React Lab
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px' }}>
          Aplicação web didática desenvolvida para atender integralmente às atividades práticas dos módulos de <strong>Projeto React</strong> e <strong>Projeto React 02</strong>.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {/* Academic Card */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--brand-primary)' }}>
            <GraduationCap size={24} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Contexto Acadêmico</h3>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li><strong>Instituição:</strong> SENAI</li>
            <li><strong>Disciplina:</strong> Frameworks Front-end</li>
            <li><strong>Docente:</strong> Prof. Me. Deivison S. Takatu</li>
            <li><strong>Contato:</strong> <code>deivison.takatu@edu.senai.br</code></li>
            <li><strong>Repositório do Aluno:</strong> <code>ViniciuspSouza23/projeto-react-conceitos-react</code></li>
          </ul>
        </div>

        {/* Tech Stack Card */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--brand-react)' }}>
            <Code size={24} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Tecnologias Utilizadas</h3>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li><strong>React 19:</strong> Biblioteca declarativa para interfaces de usuário.</li>
            <li><strong>Vite:</strong> Ferramenta de build de alta velocidade e HMR instantâneo.</li>
            <li><strong>React Router 7:</strong> Gerenciador de rotas e navegação cliente (SPA).</li>
            <li><strong>Vanilla CSS:</strong> Design system customizado sem dependências pesadas.</li>
            <li><strong>Lucide React:</strong> Conjunto moderno e limpo de ícones SVG.</li>
          </ul>
        </div>
      </div>

      {/* Concept Breakdown Table */}
      <div className="card" style={{ marginBottom: '2.5rem', padding: '1.75rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
          Conceitos Contemplados na Aplicação (Checklist de Requisitos)
        </h3>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-subtle)', textAlign: 'left', color: 'var(--text-muted)' }}>
                <th style={{ padding: '0.75rem 0.5rem' }}>Nº</th>
                <th style={{ padding: '0.75rem 0.5rem' }}>Conceito</th>
                <th style={{ padding: '0.75rem 0.5rem' }}>Módulo</th>
                <th style={{ padding: '0.75rem 0.5rem' }}>Status na Aplicação</th>
                <th style={{ padding: '0.75rem 0.5rem' }}>O que foi implementado</th>
              </tr>
            </thead>
            <tbody>
              {[
                { n: "01", nome: "JSX", mod: "Aula 01", desc: "Interpolação de variáveis, expressões lógicas, regras de fechamento e Fragment." },
                { n: "02", nome: "Componentes", mod: "Aula 01", desc: "Criação de funções JSX, composição modular e árvore hierárquica." },
                { n: "03", nome: "Props", mod: "Aula 01", desc: "Fluxo unidirecional de dados, desestruturação e envio de callbacks funcionais." },
                { n: "04", nome: "Virtual DOM", mod: "Aula 01", desc: "Simulador visual de reconciliação (Diffing) e comparação com DOM real." },
                { n: "05", nome: "Listas e Keys", mod: "Aula 01", desc: "Transformação de dados com .map(), filtros com .filter() e chaves únicas id." },
                { n: "06", nome: "Renderização Condicional", mod: "Aula 01", desc: "Controle de exibição via operador ternário (?:), operador lógico (&&) e early return." },
                { n: "07", nome: "State e useState", mod: "Aula 02", desc: "Estado reativo, por que variáveis comuns não bastam, e manipulação imutável." },
                { n: "08", nome: "Formulários", mod: "Aula 02", desc: "Inputs controlados (value/onChange), validação síncrona e preventDefault()." },
                { n: "09", nome: "useEffect", mod: "Aula 02", desc: "Sincronização com document.title, eventos de janela e função de cleanup." },
                { n: "10", nome: "Consumo de APIs", mod: "Aula 02", desc: "Fetch real no JSONPlaceholder, async/await, try/catch, loading, erro e POST." },
                { n: "11", nome: "React Router", mod: "Aula 02", desc: "Roteamento SPA, BrowserRouter, Routes, Route, Link e parâmetros com useParams()." }
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '0.75rem 0.5rem', fontFamily: 'var(--font-mono)', color: 'var(--brand-primary)' }}>{row.n}</td>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{row.nome}</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}><span className="badge badge-purple">{row.mod}</span></td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>
                    <span className="badge badge-green" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <CheckCircle2 size={12} /> 100% Ativo
                    </span>
                  </td>
                  <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* References Section */}
      <div className="card" style={{ padding: '1.75rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <BookOpen size={20} color="var(--brand-primary)" />
          <span>Referências Bibliográficas do Curso</span>
        </h3>
        <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <li>SOUZA, Natan. <em>Bootstrap 4: conheça a biblioteca front-end mais utilizada no mundo.</em> São Paulo: Casa do Código, 2018.</li>
          <li>MACHADO, Kheronn Khennedy. <em>Angular 11 e Firebase: construindo uma aplicação integrada com a plataforma do Google.</em> São Paulo: Casa do Código, 2021.</li>
          <li>EIS, Diego. <em>Guia Front-end: o caminho das pedras para ser um dev front-end.</em> São Paulo: Casa do Código, 2015.</li>
          <li>HARTCOPP, Patrícia Ferreira. <em>Métrica Web.</em> São Paulo: Contentus, 2020.</li>
          <li>PREECE, J.; ROGERS, Y.; SHARP, H. <em>Design de Interação: além da interação Homem-Computador.</em> 3. ed. Porto Alegre: Bookman, 2013.</li>
        </ol>
      </div>
    </div>
  );
}
