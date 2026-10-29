# React Lab — Guia e Aplicação Prática de Conceitos do React

<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="90" alt="React Logo" />
  <h3>SENAI &bull; Frameworks Front-end</h3>
  <p><strong>Atividades Práticas 01 e 02</strong></p>
  <p>Docente: <strong>Prof. Me. Deivison S. Takatu</strong> (deivison.takatu@edu.senai.br)</p>
</div>

---

## 📖 Descrição do Projeto

O **React Lab** é uma aplicação web interativa desenvolvida em **React 19** com **Vite** e **React Router**, criada para contemplar e demonstrar de forma didática e prática todos os conceitos fundamentais e avançados abordados nas aulas de **Frameworks Front-end** do SENAI.

A aplicação funciona como um laboratório dinâmico onde cada conceito possui explicações teóricas fundamentadas, trechos de código com botão de cópia e um **playground interativo em tempo real** onde o usuário pode alterar estados, testar comportamentos, enviar dados e visualizar a reatividade do React em ação.

---

## 🚀 Conceitos Estudados e Implementados

A aplicação abrange **11 módulos práticos**, divididos entre as duas fases de aprendizagem da disciplina:

### Módulo 01: Fundamentos do React (Projeto 01)
1. **JSX (JavaScript XML):**
   - Sintaxe que combina a estrutura de marcação HTML com a lógica do JavaScript.
   - Uso de chaves `{}` para interpolação de variáveis, operações matemáticas e expressões ternárias.
   - Aplicação das regras de sintaxe (como `className` no lugar de `class`, `htmlFor` no lugar de `for` e fechamento obrigatório de tags `<img />`, `<input />`).
2. **Componentes:**
   - Criação e modularização da interface em blocos reutilizáveis através de funções JavaScript.
   - Composição hierárquica (`App -> Navbar -> Cards -> Footer`).
   - Simulador interativo que permite instanciar e desmontar novos componentes dinamicamente na árvore.
3. **Props (Propriedades):**
   - Passagem de dados unidirecional (do componente pai para os componentes filhos).
   - Suporte a múltiplos tipos de dados: *strings*, *números*, *booleanos*, *arrays*, *objetos* e *funções de callback*.
   - Painel interativo permitindo customizar propriedades em tempo real e receber notificações disparadas por callbacks do filho.
4. **Virtual DOM e Reconciliação:**
   - Representação em memória da árvore de elementos do navegador.
   - Algoritmo de *Diffing* que compara versões sucessivas da interface.
   - Demonstração visual interativa comprovando que apenas os nós que sofreram mutação de estado são repintados no DOM real, otimizando drasticamente a performance.
5. **Listas e Keys:**
   - Renderização de coleções de dados utilizando o método `.map()`.
   - Filtragem e busca em tempo real com `.filter()`.
   - Importância do atributo `key` único e estável para a identificação correta de elementos durante inserções, remoções e reordenações.
6. **Renderização Condicional:**
   - Controle de exibição com operador ternário (`condicao ? <A /> : <B />`).
   - Curto-circuito com operador lógico `&&` para elementos opcionais.
   - Retorno antecipado (*early return*) com `if` para telas de carregamento (*loading*) e estados vazios (*empty states*).

---

### Módulo 02: Estado, Efeitos e Roteamento (Projeto 02)
7. **State e Hook useState:**
   - Memória reativa do componente React.
   - Demonstração prática do motivo pelo qual variáveis comuns (`let x = 0`) não atualizam a interface do usuário.
   - Manipulação de contadores e controle de estado complexo em objetos com o operador Spread (`...prev`).
8. **Formulários e Inputs Controlados:**
   - Associação bidirecional entre o estado do React e campos de formulário (`value={estado}` + `onChange`).
   - Interrupção do comportamento padrão do navegador com `e.preventDefault()`, preservando a SPA sem recarregar a página.
   - Validação síncrona de campos obrigatórios (nome, e-mail) e listagem de submissões bem-sucedidas.
9. **Hook useEffect e Ciclo de Vida:**
   - Sincronização da aplicação com APIs externas e recursos fora do escopo do React.
   - Atualização dinâmica do título da aba do navegador (`document.title`).
   - Adição de ouvinte global de eventos de redimensionamento de tela (`window.addEventListener('resize')`).
   - **Função de Limpeza (*cleanup*):** cancelamento de timers (`clearInterval`) e remoção de ouvintes (`removeEventListener`) para evitar vazamentos de memória (*memory leaks*).
10. **Consumo de APIs com Async/Await:**
    - Requisições HTTP reais consumindo a API REST pública do **JSONPlaceholder** (`/posts`).
    - Gerenciamento dos três estados fundamentais da interface: **Carregando** (*Loading*), **Sucesso** (*Data*) e **Erro** (*Error*).
    - Tratamento de falhas de conexão com blocos `try/catch/finally` e verificação de `response.ok`.
    - Simulação de requisição `POST` com cabeçalhos `Content-Type: application/json` e payload serializado em `JSON.stringify()`.
11. **React Router (Roteamento de Páginas e SPA):**
    - Configuração de Single Page Application com `BrowserRouter`, `Routes` e `Route`.
    - Navegação imediata sem *refresh* utilizando `<Link>` e `<NavLink>`.
    - Captura de parâmetros dinâmicos na URL com o Hook `useParams()` (ex: `/conceito/:id`).
    - Redirecionamento programático utilizando o Hook `useNavigate()`.

---

## 💻 Funcionalidades da Aplicação

- **Design Moderno e Responsivo:** Desenvolvido com tema dark sleek, efeitos de glassmorphism, gradientes suaves e tipografia moderna (Google Fonts Inter & Fira Code).
- **Alternador de Tema (Dark / Light Mode):** Suporte nativo a temas com persistência em `localStorage`.
- **Playgrounds Interativos em Tempo Real:** Cada um dos 11 conceitos possui um simulador funcional na própria página.
- **Roteamento Dinâmico:** Navegue entre o Início (`/`), o Catálogo de Conceitos (`/conceitos`), os detalhes de cada conceito (`/conceito/:id`), o laboratório de API (`/api-demo`), o formulário controlado (`/formulario`) e a página institucional (`/sobre`).
- **Sistema de Busca e Filtros:** Pesquisa instantânea por texto e filtragem por categorias e módulos de aula.
- **Blocos de Código com Cópia Rápida:** Códigos didáticos formatados com botão de cópia para a área de transferência.

---

## 🛠️ Tecnologias e Bibliotecas

| Tecnologia | Finalidade |
| :--- | :--- |
| **React 19** | Biblioteca para construção de interfaces declarativas |
| **Vite 8** | Build tool e servidor de desenvolvimento ultra veloz |
| **React Router 7** | Roteamento cliente e controle de URLs dinâmicas (SPA) |
| **Vanilla CSS Moderno** | Design system modular com variáveis CSS sem dependências pesadas |
| **Lucide React** | Conjunto de ícones SVG limpos e otimizados |
| **JSONPlaceholder API** | Serviço REST para testes de requisições HTTP assíncronas |

---

## 📦 Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** (versão 9 ou superior)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ViniciuspSouza23/projeto-react-conceitos-react.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd projeto-react-conceitos-react
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Abra no seu navegador:**
   - Acesse o link informado no terminal, geralmente: `http://localhost:5173`

6. **Para gerar a versão de produção (Build):**
   ```bash
   npm run build
   ```

---

## 📁 Estrutura de Diretórios

```text
projeto-react-conceitos-react/
├── public/                 # Arquivos estáticos
├── src/
│   ├── assets/             # Recursos de mídia
│   ├── components/         # Componentes compartilhados
│   │   ├── CodeBlock.jsx   # Visualizador de código com cópia
│   │   ├── CardConceito.jsx# Card reutilizável por props
│   │   ├── Navbar.jsx      # Barra de navegação com React Router
│   │   ├── Footer.jsx      # Rodapé com créditos acadêmicos
│   │   ├── GithubIcon.jsx  # Ícone SVG customizado
│   │   └── concepts/       # 11 Laboratórios interativos dos conceitos
│   │       ├── JSXConcept.jsx
│   │       ├── ComponentesConcept.jsx
│   │       ├── PropsConcept.jsx
│   │       ├── VirtualDOMConcept.jsx
│   │       ├── ListasKeysConcept.jsx
│   │       ├── RenderizacaoCondicionalConcept.jsx
│   │       ├── StateUseStateConcept.jsx
│   │       ├── FormulariosConcept.jsx
│   │       ├── UseEffectConcept.jsx
│   │       ├── ConsumoAPIsConcept.jsx
│   │       └── ReactRouterConcept.jsx
│   ├── data/
│   │   └── conceitosData.js# Estrutura de dados centralizada dos conceitos
│   ├── pages/              # Páginas roteadas pelo React Router
│   │   ├── HomePage.jsx
│   │   ├── ConceitosPage.jsx
│   │   ├── ConceitoDetalhePage.jsx
│   │   ├── ApiDemoPage.jsx
│   │   ├── FormularioPage.jsx
│   │   └── SobrePage.jsx
│   ├── App.jsx             # Definição das rotas com <Routes> e <Route>
│   ├── main.jsx            # Ponto de entrada com <BrowserRouter>
│   └── index.css           # Design system e estilização global
├── index.html              # HTML raiz com Google Fonts e metatags
├── package.json            # Metadados e dependências
└── vite.config.js          # Configuração do Vite
```

---

## 📚 Referências Bibliográficas

1. SOUZA, Natan. **Bootstrap 4: conheça a biblioteca front-end mais utilizada no mundo.** São Paulo: Casa do Código, 2018. E-book.
2. MACHADO, Kheronn Khennedy. **Angular 11 e Firebase: construindo uma aplicação integrada com a plataforma do Google.** São Paulo: Casa do Código, 2021.
3. EIS, Diego. **Guia Front-end: o caminho das pedras para ser um dev front-end.** São Paulo: Casa do Código, 2015. E-book.
4. GONÇALVES, Edson. **Desenvolvendo aplicações Web com JSP, Servlets, JavaServer Faces, Hibernate, EJB 3 Persistence e Ajax.** Rio de Janeiro: Ciência Moderna, c2007.
5. HARTCOPP, Patrícia Ferreira. **Métrica Web.** São Paulo: Contentus, 2020. E-book.
6. NIEDERAUER, Juliano. **Desenvolvendo Websites com PHP: aprenda a criar Websites dinâmicos e interativos com PHP e banco de dados.** 3. ed. São Paulo: Novatec, 2017.
7. PREECE, J.; ROGERS, Y.; SHARP, H. **Design de Interação: além da interação Homem-Computador.** 3. ed. Porto Alegre: Bookman, 2013.
8. SOUSA, Roque Fernando Marcos. **Canvas HTML 5: composição gráfica e interatividade na Web.** Rio de Janeiro: Brasport, 2014. E-book.

---

## 👨‍💻 Autor

- **Aluno:** Vinícius P. Souza ([GitHub](https://github.com/ViniciuspSouza23))
- **Repositório:** [projeto-react-conceitos-react](https://github.com/ViniciuspSouza23/projeto-react-conceitos-react)
- **Curso:** Frameworks Front-end — SENAI
- **Professor:** Prof. Me. Deivison S. Takatu
