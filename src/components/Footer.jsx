import { Atom, ExternalLink, Heart, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="brand" style={{ marginBottom: '1rem' }}>
            <Atom className="brand-icon" color="#00d8ff" size={24} />
            <span>React<strong style={{ color: '#00d8ff' }}>Lab</strong></span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Laboratório prático e didático desenvolvido para o curso de <strong>Frameworks Front-end</strong> no <strong>SENAI</strong>.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            <GraduationCap size={16} />
            <span>Prof. Me. Deivison S. Takatu</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navegação</h4>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Início</Link></li>
            <li><Link to="/conceitos" className="footer-link">Catálogo de Conceitos (11)</Link></li>
            <li><Link to="/api-demo" className="footer-link">Consumo de APIs</Link></li>
            <li><Link to="/formulario" className="footer-link">Formulário Controlado</Link></li>
            <li><Link to="/sobre" className="footer-link">Sobre o Projeto</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Conceitos do Curso</h4>
          <ul className="footer-links">
            <li><Link to="/conceito/jsx" className="footer-link">01. JSX & Expressões</Link></li>
            <li><Link to="/conceito/componentes" className="footer-link">02. Componentes</Link></li>
            <li><Link to="/conceito/props" className="footer-link">03. Props</Link></li>
            <li><Link to="/conceito/virtual-dom" className="footer-link">04. Virtual DOM</Link></li>
            <li><Link to="/conceito/state-usestate" className="footer-link">07. State & useState</Link></li>
            <li><Link to="/conceito/react-router" className="footer-link">11. React Router</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Referências</h4>
          <ul className="footer-links">
            <li>
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Documentação React</span>
                <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href="https://github.com/deivisontakatu/aula-react" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Material da Disciplina (GitHub)</span>
                <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href="https://projeto-react-five-swart.vercel.app/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Aplicação Exemplo Original</span>
                <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href="https://github.com/ViniciuspSouza23/projeto-react-conceitos-react" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Repositório do Aluno</span>
                <ExternalLink size={12} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          SENAI &bull; Frameworks Front-end &bull; Atividade Prática 01 e 02
        </div>
        <div>
          Construído com React, Vite e React Router
        </div>
      </div>
    </footer>
  );
}
