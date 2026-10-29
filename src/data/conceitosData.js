export const conceitosData = [
  {
    id: "jsx",
    numero: "01",
    modulo: "Aula 01",
    categoria: "Básico",
    titulo: "JSX e Expressões",
    subtitulo: "Extensão de sintaxe que une JavaScript e marcação HTML",
    descricao: "JSX permite descrever a interface de forma declarativa e intuitiva. Dentro de chaves { }, podemos injetar qualquer expressão JavaScript válida.",
    pontosChave: [
      "Extensão de sintaxe para JavaScript desenvolvida pelo React",
      "Permite interpolar variáveis e expressões lógicas usando { }",
      "Utiliza className em vez de class e htmlFor em vez de for",
      "Tags sem filhos devem ser auto-fechadas (<img />, <input />)",
      "Componentes devem retornar um único elemento raiz ou React.Fragment (<></>)"
    ],
    codigoExemplo: `const nome = "Aluno SENAI";
const saudacao = <h1>Olá, {nome}!</h1>;

function Calculo() {
  const a = 15;
  const b = 27;
  return (
    <div className="card">
      <h2>Soma Dinâmica</h2>
      <p>O resultado de {a} + {b} é {a + b}</p>
    </div>
  );
}`
  },
  {
    id: "componentes",
    numero: "02",
    modulo: "Aula 01",
    categoria: "Básico",
    titulo: "Componentes e Composição",
    subtitulo: "Unidades independentes, reutilizáveis e modulares",
    descricao: "Componentes são funções JavaScript que retornam elementos React (JSX). Permitem dividir interfaces complexas em blocos desacoplados e manuteníveis.",
    pontosChave: [
      "Devem ter nome iniciado em letra maiúscula (ex: Cabecalho, CardProduto)",
      "Podem ser combinados em hierarquias (App -> Header -> Main -> Footer)",
      "Promovem reutilização de código e consistência visual",
      "Facilitam testes unitários e manutenção isolada"
    ],
    codigoExemplo: `function Cabecalho() {
  return (
    <header className="header">
      <h1>React Lab SENAI</h1>
      <p>Frameworks Front-end</p>
    </header>
  );
}

function App() {
  return (
    <main>
      <Cabecalho />
      <p>Interface modular construída com componentes.</p>
    </main>
  );
}`
  },
  {
    id: "props",
    numero: "03",
    modulo: "Aula 01",
    categoria: "Básico",
    titulo: "Props (Propriedades)",
    subtitulo: "Passagem unidirecional de dados entre componentes",
    descricao: "Props funcionam como parâmetros de função para componentes. Elas fluem exclusivamente de pai para filho (unidirecional), garantindo previsibilidade.",
    pontosChave: [
      "Props são imutáveis (somente leitura para o componente filho)",
      "Podem receber qualquer tipo de dado: strings, números, booleanos, arrays, objetos e funções",
      "Podem ser desestruturadas diretamente nos parâmetros: function Card({ titulo, autor })",
      "Permitem customizar instâncias distintas do mesmo componente"
    ],
    codigoExemplo: `function CardConceito({ titulo, descricao, destaque }) {
  return (
    <article className={destaque ? "card card-destaque" : "card"}>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </article>
  );
}

// Utilização no componente pai:
<CardConceito 
  titulo="JSX" 
  descricao="Sintaxe declarativa de interface" 
  destaque={true} 
/>`
  },
  {
    id: "virtual-dom",
    numero: "04",
    modulo: "Aula 01",
    categoria: "Fundamentos",
    titulo: "Virtual DOM e Reconciliação",
    subtitulo: "Otimização de renderização e sincronização eficiente em memória",
    descricao: "O Virtual DOM é uma representação em memória do DOM real. Quando o estado muda, o React gera uma nova árvore, compara com a anterior (diffing) e aplica apenas as alterações pontuais no navegador.",
    pontosChave: [
      "Evita manipulações diretas e caras no DOM do navegador",
      "Processo de comparação entre versões é chamado de Reconciliação (Diffing)",
      "Batching: agrupamento de atualizações para evitar repinturas excessivas da tela",
      "O desenvolvedor programa declarativamente; o React cuida da sincronização ótima"
    ],
    codigoExemplo: `// No JS puro (Imperativo):
document.getElementById('status').textContent = 'Online';
document.getElementById('status').classList.add('badge-ativo');

// No React com Virtual DOM (Declarativo):
function StatusBadge({ online }) {
  return (
    <span className={online ? "badge-ativo" : "badge-inativo"}>
      {online ? "Online" : "Offline"}
    </span>
  );
}`
  },
  {
    id: "listas-keys",
    numero: "05",
    modulo: "Aula 01",
    categoria: "Básico",
    titulo: "Listas e Chaves (Keys)",
    subtitulo: "Renderização eficiente de coleções e coleções filtradas",
    descricao: "Utilizamos o método .map() do JavaScript para iterar sobre arrays e transformar cada item em JSX. A prop especial 'key' fornece identidade estável a cada elemento da lista.",
    pontosChave: [
      "Método .map() projeta arrays de dados em listas de nós JSX",
      "A chave 'key' deve ser única e estável (preferencialmente ID do banco)",
      "Evite usar índice do array (index) como key se a lista puder ser reordenada ou filtrada",
      "Combinação comum com .filter() para buscas e filtros instantâneos"
    ],
    codigoExemplo: `const tecnologias = [
  { id: 1, nome: "React", categoria: "Frontend" },
  { id: 2, nome: "Vite", categoria: "Bundler" },
  { id: 3, nome: "React Router", categoria: "Roteamento" }
];

function ListaTecnologias() {
  return (
    <ul>
      {tecnologias.map((tech) => (
        <li key={tech.id}>
          <strong>{tech.nome}</strong> - {tech.categoria}
        </li>
      ))}
    </ul>
  );
}`
  },
  {
    id: "renderizacao-condicional",
    numero: "06",
    modulo: "Aula 01",
    categoria: "Básico",
    titulo: "Renderização Condicional",
    subtitulo: "Exibição dinâmica com if/return, ternário e operador &&",
    descricao: "Permite alterar o conteúdo ou a estrutura visual exibida na interface com base no estado da aplicação, dados recebidos ou permissões de usuário.",
    pontosChave: [
      "Operador ternário (condicao ? <Verdadeiro /> : <Falso />) para escolhas diretas",
      "Curto-circuito lógico (condicao && <Componente />) para exibir apenas se verdadeiro",
      "Estrutura if / return antecipado para componentes com telas totalmente diferentes",
      "Alternância de telas vazias (empty state) e telas de erro"
    ],
    codigoExemplo: `function MensagemAcesso({ usuarioLogado, nome }) {
  if (!usuarioLogado) {
    return <p className="aviso">Por favor, faça login para continuar.</p>;
  }

  return (
    <div>
      <h3>Bem-vindo, {nome}!</h3>
      {nome === "Admin" && <button className="btn-admin">Painel Administrativo</button>}
    </div>
  );
}`
  },
  {
    id: "state-usestate",
    numero: "07",
    modulo: "Aula 02",
    categoria: "Estado",
    titulo: "State e Hook useState",
    subtitulo: "Memória reativa do componente e atualização da tela",
    descricao: "Variáveis comuns não notificam o React quando seu valor muda. O Hook useState cria um estado reativo: sempre que o estado é atualizado com sua função setter, o componente re-renderiza.",
    pontosChave: [
      "import { useState } from 'react'",
      "Desestruturação: const [valor, setValor] = useState(valorInicial)",
      "Atualização assíncrona: alterações disparam novo ciclo de renderização",
      "Estado deve ser tratado como imutável (criar novo objeto/array em vez de mutar)",
      "Permite múltiplos estados no mesmo componente funcional"
    ],
    codigoExemplo: `import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="contador-box">
      <p>Valor atual: {contador}</p>
      <button onClick={() => setContador(prev => prev + 1)}>Incrementar</button>
      <button onClick={() => setContador(0)}>Resetar</button>
    </div>
  );
}`
  },
  {
    id: "formularios",
    numero: "08",
    modulo: "Aula 02",
    categoria: "Formulários",
    titulo: "Formulários e Inputs Controlados",
    subtitulo: "Controle bidirecional, validação e manipulação de eventos",
    descricao: "Em inputs controlados, o valor do campo é ditado pelo state do React (value={state}) e atualizado a cada digitação através do evento onChange.",
    pontosChave: [
      "Entrada controlada: value ligado ao state e onChange disparando setter",
      "e.preventDefault(): impede o recarregamento padrão da página ao submeter",
      "Validação em tempo real ou no submit",
      "Manipulação de múltiplos campos em formulários simples ou complexos"
    ],
    codigoExemplo: `import { useState } from "react";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(\`Cadastrado: \${nome} (\${email})\`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
        placeholder="Seu nome"
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Seu email"
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}`
  },
  {
    id: "useeffect",
    numero: "09",
    modulo: "Aula 02",
    categoria: "Efeitos",
    titulo: "useEffect e Ciclo de Vida",
    subtitulo: "Sincronização com sistemas externos, assinaturas e limpeza",
    descricao: "O Hook useEffect permite executar efeitos colaterais após a renderização: chamadas de API, timers, alteração do document.title, eventos de janela e tarefas de cleanup.",
    pontosChave: [
      "Array de dependências []: executa apenas na montagem (mount)",
      "Com dependências [dado]: executa na montagem e sempre que 'dado' mudar",
      "Sem dependências: executa a cada renderização (raramente recomendado)",
      "Função de limpeza (cleanup): return () => { ... } cancela timers e listeners ao desmontar"
    ],
    codigoExemplo: `import { useState, useEffect } from "react";

function Temporizador() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    // Sincroniza o título da página
    document.title = \`Contador: \${segundos}s\`;

    const timer = setInterval(() => {
      setSegundos(s => s + 1);
    }, 1000);

    // Função de limpeza (cleanup) executada ao desmontar
    return () => clearInterval(timer);
  }, [segundos]);

  return <p>Tempo ativo: {segundos} segundos</p>;
}`
  },
  {
    id: "consumo-apis",
    numero: "10",
    modulo: "Aula 02",
    categoria: "APIs",
    titulo: "Consumo de APIs e Async/Await",
    subtitulo: "Integração HTTP, estados de loading, erro e envio com POST",
    descricao: "Em aplicações modernas, dados são buscados de serviços externos via fetch ou axios. É fundamental gerenciar os três estados do ciclo de vida: Carregando (Loading), Sucesso (Data) e Falha (Error).",
    pontosChave: [
      "Uso de fetch() com async/await e blocos try / catch / finally",
      "Verificação de response.ok para capturar respostas de erro HTTP (ex: 404, 500)",
      "Método POST com JSON.stringify() e cabeçalhos Content-Type: application/json",
      "Integração perfeita com useEffect para carregar dados na inicialização"
    ],
    codigoExemplo: `import { useState, useEffect } from "react";

function ListaPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarDados() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        if (!res.ok) throw new Error("Falha na requisição");
        const json = await res.json();
        setPosts(json);
      } catch (err) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }
    carregarDados();
  }, []);

  if (loading) return <p>Carregando dados da API...</p>;
  if (erro) return <p className="erro">Erro: {erro}</p>;

  return (
    <ul>
      {posts.map(p => <li key={p.id}>{p.title}</li>)}
    </ul>
  );
}`
  },
  {
    id: "react-router",
    numero: "11",
    modulo: "Aula 02",
    categoria: "Navegação",
    titulo: "React Router e Rotas Dinâmicas",
    subtitulo: "Navegação SPA sem recarregar a página e parâmetros com useParams",
    descricao: "O React Router conecta URLs aos componentes da interface em uma Single Page Application (SPA). Através do hook useParams(), podemos capturar parâmetros variáveis como IDs na URL.",
    pontosChave: [
      "BrowserRouter envolve toda a aplicação no nível raiz",
      "Routes agrupa as rotas e Route associa caminhos a componentes (path e element)",
      "Link e NavLink realizam navegação instantânea no lado do cliente sem reload",
      "useParams() extrai parâmetros de rotas dinâmicas como /conceito/:id"
    ],
    codigoExemplo: `import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function Detalhe() {
  const { id } = useParams();
  return <h2>Visualizando o item: {id}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/conceito/jsx">Ver JSX</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conceito/:id" element={<Detalhe />} />
      </Routes>
    </BrowserRouter>
  );
}`
  }
];
