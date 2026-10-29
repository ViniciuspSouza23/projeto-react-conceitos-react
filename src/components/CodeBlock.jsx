import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CodeBlock({ code, language = 'jsx', title }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="code-block">
      <div className="code-header">
        <div className="code-dots">
          <span className="code-dot red"></span>
          <span className="code-dot yellow"></span>
          <span className="code-dot green"></span>
        </div>
        <span>{title || language.toUpperCase()}</span>
        <button
          className="btn btn-sm btn-secondary"
          onClick={handleCopy}
          title="Copiar código"
          style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}
        >
          {copied ? (
            <>
              <Check size={13} color="#34d399" />
              <span>Copiado!</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
      <pre className="code-content">
        <code>{code}</code>
      </pre>
    </div>
  );
}
