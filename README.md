# [![My Skills](https://skillicons.dev/icons?i=html)](https://skillicons.dev)[![My Skills](https://skillicons.dev/icons?i=css)](https://skillicons.dev)[![My Skills](https://skillicons.dev/icons?i=js)](https://skillicons.dev) Cronograma de estudo - Front-End

## Etapa 1 - HTML: Estrutura e Semântica

- Estrutura básica de um documento HTML
- Tags semânticas: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`
- Hierarquia de heading (h1 - h6) e por que importa
- Lista, tabelas, links, imagens 
- Atributos globais (`class`, `id`, `data-*`)

**Exercício**: montar a estrutura semântica de uma página de blog (sem estilo nenhum) usando só as tags corretas para cada bloco de conteúdo.

**Critério de avanço**: Você consegue explicar por que usar `<article>` em vez de `<div>` num post de blog, e não usa `<div>` para tudo.

---

## Etapa 2 - HTML: Formulário e Acessibilidade básica

- Elementos de formulário: `input` (todos os tipos relevantes), `select`, `textarea`, `button`
- `label` associado corretamente a input
- Validação nativa (`required`, `pattern`, `min`, `max`)
- Atributos de acessibilidade básicos: `alt`, `aria-label`, `role` (introdução)

**Exercício**: Formulário de cadastro completo (nome, email, senha, data de nascimento, select de país) com validação nativa funcionando sem JS

**Critério de avanço**: formulário funciona sem nenhuma linha de CSS ou JS, e todo input tem label associado corretamente.

---

## Etapa 3 - CSS: Fundamentos

- Seletores (elementos, classe, id, atributos, pseudo-classes)
- Especifcidade e cascata (por que uma regra vence a outra)
- Box model (content, padding, border, margin)
- `display`: block, inline, inline-block, none
- Unidades: px, %, em, rem, vw/vh

**Exercício**: Estilizar o blog da Etapa 1 box model corretamente, sem usar Flexbox ou Grid ainda.

**Critério de avanço**: você consegue prever, sem testar no browser, qual regra CSS vai vencer num conflito de especialidade.

---

## Etapa 4 - CSS: layout com flexbox

- `display: flex`, eixo principal vs eixo cruzado
- `justify-content`, `align-items`, `align-self`
- `flex-grow`, `flex-shrink`, `flex-basis`
- Flexbox para navbars e cars alinhados

**Exercício**: navbar responsiva simples (logo à esquerda, links a direita) só com Flexbox.

**Critério de avanço**: Você não precisa consultar referência para lembrar a diferença entre `justify-content` e `align-items`.

---

## Etapa 5 - CSS: Laayout com Grid

- `display: grid`, `grid-template-columns/rows`
- `gap`, `grid-column`, `grid-row`
- Grid vs Flexbox: quando usar cada um
- Grid areas nomeadas

**Exercício**: layout de página completa (header, sidebar, main, footer) usando Grid.

**Critério de avanço**: Você sabe justificar por que escolher Grid e não Flexbox (ou vice-versa) para um layout específico.

---

## Consolidação 1 (Etapa 1 - 5)

**Projeto**: Página estática completa (landing page) com HTML semântico + CSS (Flexbox e Grid combinados), sem media queries ainda.

**Critério de aprovação**: código revisado, sem `div` desnecessárioa, sem `!important`, sem CSS inline.

---

## Etapa 6 - CSS: Responsividade

- Media queries (`min-width`, `max-width`)
- Mobile-first vs desktop-first
- `clamp()`, `min()`, `max()` para valores fluidos
- Imagens responsivas (`max-width`m `srcset` introdução)

**Exercício**: Tornar a landing page da Consolidação 1 responsiva para mobile, tablet e desktop

**Critério de avanço**: layout não quebra em nenhuma largura entre 320px e 1920px.

---

## Etapa 7 - JavaScript: Fundamentos da Linguagem

- Variáveis (`let`, `const`, por que nao `var`)
- Tipos primitivos, coerção de tipo, `===` vs `==`
- Operadores, templates literals
- Arrays e objetos: métodos essesciais (`mao`, `filter`, `reduce`, `forEach`)

**Exercício**: dado um array de objetos (ex Lista de produto), filmar, transformar, e somar valores usando (`map`, `filter`, `reduce`).

**Critério de avanço**: você explica por que `reduce` foi escolhido em vez de um loop `for` manual, e vice-versa quando fizer sentido.

---

## Etapa 8 - JavaScript: Estruturas de Controle e Funções

- Condicionais, loops (`for`, `while`, `for...of`, `for...in`)
- Funções declaradas, expressões arow functions, diferença reais (não só sintaxe)
- Escopo (block scope vs function scope), closures (introdução)

**Exercício**: Implementar um pequeno validador de formulário em JS puro (sem tocar DOM ainda) que recebe um objeto e retorna erros.

**Critério de avanço**: Você sabe explicar o que é uma closure com um exemplo próprio, não copiado.

---

## Etapa 9 - JavaScript: DOM: Seleção e Manipulação

- `querySelector`/`querySelectorAll` vs métodos antigos
- Criar, inserir, remover elementos (`createElement`, `appendChild`, `remove`)
- Manipulação de classes (`classList`), atributos estilo via JS
- `innerHTML` vs `textContent` (e por que `innerHTML` é risco de segurança)

**Exercício:** Lista de tarefas (todo list) que rederiza itens dinamicamente a partir de um array em JS, sem framework

**Critério de avanço**: Você sabe explicar por que `innerHTL` com dado não confiável é uma vulnerabilidade (XSS), na prática, não só de nome.

---

## Etapa 10 - JavaScript: Eventos

- `addEventListener`, tipos de evento (click, submit, input, keydown)
- Event bubbling e capturing
- Delegação de eventos (event delagation), por que é importante em lista dinâmicas
- `preventDefault()`, `stopPropagation()`

**Exercício**: todo list Etapa 9 agora com adicionar, marcar como concluído e remover item, usando delegação de eventos (um único listener no container, não um por item).

**Critério de avanço**: você implementou delegação de eventos corretamente, sem adicionar um listner por elementos da lista.

---

## Consolidação 2 (Etapa 7 - 10)

**Projeto**: Aplicação de lista de tarefas completa, adicionar, editar, remover, marcar concluído, persistindo estado em memória (sem localStorage ainda), com validação de formulário e manipualão de DOM 100% via JS puro.

**Critério de aprovação**: zero manipulação direta de string HTML fora de controle (sem `inner HTML` com dado de usuário sem sanitização), event delegation usada corretamente.

---

## Etapa 11 - JavaScript: Assincronia: Fetch e Promises

- Callbacks (context histórico rápido) -> Primises -> `async/await`
- `fetch()` para GET e POST
- Tratamento de erro (`try/catch`, `.catch()`)
- Consumir uma API pública real (ex: JSONPlaceholder, ViaCEP)

**Exercício**: buscar dados de uma API pública e renderizar na tela, com tratamento de estado de loading e erro.

**Critério de avanço**: você trata explicitamente o caso de erro de rede (não só o caminho feliz)

----

## Etapa 12 - JavaScript: Formulários e Validação Avançada

- Capturar dados de formulário via JS (`FormData`)
- Validação customizada além da nativa do HTML
- Enviar dados via `fetch` (POST) para uma API
- Feedback visual de erro/sucesso pro usuário

**Exercício**: formulário de contato que valida no client e envia via `fetch` para um endpoint de teste (ex: webhook.site ou API pública que aceita POST)

**Critério de avanço**: usuário recebe feedback claro de erro de validação campo a campo, não um alert genérico.

---

## Etapa 13 - DevTools e Debugging

- Console (método além de `console.log`, `table`, `warn`, `error`, `group`)
- Breakpoints no painel Sources
- Inspeciona e editar DOM/CSS ao vivo
- Aba Network: entender requisições, status codes, payload

**Exercício**: pegar um bug proposital (dado por você mesmo, injetado no código da etapa 12) e debugar usando breakpoints em vez de `console.log` espalhado

**Critério de avanço**: você resolveu usando o debugger do DevTools, não tentativa e erro com console.log.

---

## Consolidação 3 (Etapas 11 - 13: Projeto Final Vanilla)

**Projeto**: SPA simples sem framework. Ex: um dashboard que busca dados de uma API pública, permite filtrar/buscar, tem formulário de criação que faz POST, com tratamento de loading/erro de debugging limpo.

Critério de aprovação: aplicação funcional, sem framework, sem `!important`, sem manipulação insegura de DOM, com fetch tratado corretamente (loading, erro sucesso).