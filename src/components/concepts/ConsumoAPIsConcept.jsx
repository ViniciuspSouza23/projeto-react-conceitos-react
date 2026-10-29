import { useState, useEffect } from 'react';
import CodeBlock from '../CodeBlock.jsx';
import { Terminal, RefreshCw, AlertCircle, CheckCircle2, Send, Loader2, Search } from 'lucide-react';

export default function ConsumoAPIsConcept() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [busca, setBusca] = useState('');
  const [urlAtiva, setUrlAtiva] = useState('https://jsonplaceholder.typicode.com/posts?_limit=5');

  // Estado para formulário de POST
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novoConteudo, setNovoConteudo] = useState('');
  const [postEnviando, setPostEnviando] = useState(false);
  const [respostaPost, setRespostaPost] = useState(null);

  // Requisição GET com useEffect e async/await
  const carregarPosts = async (urlParaCarregar = urlAtiva) => {
    try {
      setLoading(true);
      setErro(null);

      const response = await fetch(urlParaCarregar);

      if (!response.ok) {
        throw new Error(`Falha HTTP! Status: ${response.status} (${response.statusText || 'Não encontrado'})`);
      }

      const dados = await response.json();
      setPosts(dados);
    } catch (err) {
      setErro(err.message || 'Falha ao conectar com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarPosts();
  }, [urlAtiva]);

  // Requisição POST com fetch e headers
  const enviarNovoPost = async (e) => {
    e.preventDefault();
    if (!novoTitulo.trim()) return;

    try {
      setPostEnviando(true);
      setRespostaPost(null);

      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          title: novoTitulo,
          body: novoConteudo || 'Conteúdo padrão gerado pelo aluno no laboratório SENAI',
          userId: 1,
        }),
      });

      if (!res.ok) throw new Error("Erro no envio do POST.");

      const jsonCriado = await res.json();
      setRespostaPost(jsonCriado);
      setNovoTitulo('');
      setNovoConteudo('');

      // Adiciona o item retornado no topo da lista local
      setPosts(prev => [jsonCriado, ...prev]);
    } catch (err) {
      alert("Falha no POST: " + err.message);
    } finally {
      setPostEnviando(false);
    }
  };

  const simularErro = () => {
    setUrlAtiva('https://jsonplaceholder.typicode.com/url-inexistente-404');
  };

  const restaurarUrlValida = () => {
    setUrlAtiva('https://jsonplaceholder.typicode.com/posts?_limit=5');
  };

  const postsFiltrados = posts.filter(p =>
    p.title.toLowerCase().includes(busca.toLowerCase())
  );

  const codigo = `// 1. Requisição GET com async/await e tratamento de erro
async function buscarPublicacoes() {
  try {
    setLoading(true);
    setErro(null);

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    // Verificação obrigatória do status HTTP:
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    const dados = await response.json();
    setPosts(dados);
  } catch (error) {
    console.error("Falha na chamada:", error);
    setErro(error.message);
  } finally {
    setLoading(false);
  }
}

// 2. Envio de dados via POST com JSON.stringify()
async function criarPublicacao(novoItem) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novoItem)
  });
  return await response.json();
}`;

  return (
    <div className="concept-detail-content">
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
          O <strong>Consumo de APIs</strong> permite que aplicações React se comuniquem com servidores backend na web para buscar, criar, atualizar e excluir dados.
          É essencial utilizar <code>try/catch/finally</code> para gerenciar de forma robusta os três estados da interface: <strong>Carregamento (Loading)</strong>, <strong>Sucesso (Data)</strong> e <strong>Falha (Error)</strong>.
        </p>
      </div>

      <div className="playground-box">
        <div className="playground-title">
          <Terminal size={16} />
          <span>Laboratório Interativo: Requisições HTTP Reais (GET e POST)</span>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button onClick={() => carregarPosts()} className="btn btn-sm btn-primary">
              <RefreshCw size={14} />
              <span>Recarregar API</span>
            </button>
            <button onClick={simularErro} className="btn btn-sm btn-danger">
              <span>Simular Erro HTTP 404</span>
            </button>
            <button onClick={restaurarUrlValida} className="btn btn-sm btn-secondary">
              <span>Restaurar Endpoint Normal</span>
            </button>
          </div>

          <span className="badge badge-purple" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
            Endpoint: {urlAtiva.replace('https://jsonplaceholder.typicode.com', '')}
          </span>
        </div>

        {/* Section: POST Form */}
        <form onSubmit={enviarNovoPost} style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
          <strong style={{ fontSize: '0.85rem', color: 'var(--brand-primary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            Simulação de Requisição POST (Criar Publicação na API):
          </strong>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <input
              type="text"
              className="form-input"
              value={novoTitulo}
              onChange={(e) => setNovoTitulo(e.target.value)}
              placeholder="Título da publicação para o POST"
            />
            <input
              type="text"
              className="form-input"
              value={novoConteudo}
              onChange={(e) => setNovoConteudo(e.target.value)}
              placeholder="Corpo / descrição da publicação"
            />
          </div>
          <button type="submit" disabled={postEnviando || !novoTitulo.trim()} className="btn btn-sm btn-react">
            {postEnviando ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
            <span>{postEnviando ? 'Enviando payload JSON...' : 'Executar await fetch(POST)'}</span>
          </button>

          {respostaPost && (
            <div style={{ marginTop: '0.75rem', padding: '0.5rem 0.75rem', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '4px', fontSize: '0.8rem', color: '#34d399' }}>
              ✓ Status 201 Created! Resposta do servidor recebida com ID #{respostaPost.id}.
            </div>
          )}
        </form>

        {/* Section: GET List & Search */}
        <div style={{ marginBottom: '1rem' }}>
          <div className="search-input-wrapper">
            <Search className="search-icon" size={15} />
            <input
              type="text"
              className="search-input"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Filtrar publicações retornadas da API..."
            />
          </div>
        </div>

        {/* State: Loading */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--brand-react)' }}>
            <Loader2 size={32} style={{ animation: 'spinSlow 1s linear infinite', margin: '0 auto 0.75rem' }} />
            <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Aguardando resposta assíncrona do servidor...</p>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Executando: const dados = await response.json();</span>
          </div>
        )}

        {/* State: Error */}
        {erro && !loading && (
          <div style={{ padding: '1.25rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 'var(--radius-md)', color: '#f87171' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <AlertCircle size={20} />
              <strong style={{ fontSize: '0.95rem' }}>Capturado no Bloco catch(erro):</strong>
            </div>
            <p style={{ fontSize: '0.85rem' }}>{erro}</p>
            <button onClick={restaurarUrlValida} className="btn btn-sm btn-secondary" style={{ marginTop: '0.75rem' }}>
              Restaurar Endpoint Válido
            </button>
          </div>
        )}

        {/* State: Success */}
        {!loading && !erro && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {postsFiltrados.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', padding: '1rem' }}>Nenhum post corresponde à busca.</p>
            ) : (
              postsFiltrados.map(post => (
                <div
                  key={post.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span className="badge badge-blue">ID #{post.id}</span>
                  </div>
                  <h5 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.4rem', textTransform: 'capitalize' }}>
                    {post.title}
                  </h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {post.body}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <CodeBlock code={codigo} language="javascript" title="Consumo de APIs com Fetch e Async/Await" />
    </div>
  );
}
