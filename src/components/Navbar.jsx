import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Atom, BookOpen, Layers, Terminal, Send, Info } from 'lucide-react';
import GithubIcon from './GithubIcon.jsx';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('react-lab-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('react-lab-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <Atom className="brand-icon" color="#00d8ff" />
          <span>React<strong style={{ color: '#00d8ff' }}>Lab</strong></span>
          <span className="brand-badge">SENAI</span>
        </Link>

        <nav className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            id="nav-home"
          >
            <Layers size={16} />
            <span>Início</span>
          </NavLink>

          <NavLink
            to="/conceitos"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            id="nav-conceitos"
          >
            <BookOpen size={16} />
            <span>Conceitos (11)</span>
          </NavLink>

          <NavLink
            to="/api-demo"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            id="nav-api"
          >
            <Terminal size={16} />
            <span>Consumo de API</span>
          </NavLink>

          <NavLink
            to="/formulario"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            id="nav-formulario"
          >
            <Send size={16} />
            <span>Formulário</span>
          </NavLink>

          <NavLink
            to="/sobre"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            id="nav-sobre"
          >
            <Info size={16} />
            <span>Sobre</span>
          </NavLink>
        </nav>

        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={theme === 'dark' ? 'Mudar para tema Claro' : 'Mudar para tema Escuro'}
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="https://github.com/ViniciuspSouza23/projeto-react-conceitos-react"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-secondary"
            title="Ver no GitHub"
          >
            <Github size={16} />
            <span style={{ display: 'none', '@media (min-width: 640px)': { display: 'inline' } }}>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
