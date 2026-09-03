# Etapa 1 - HTML: Estrutura e Semântica

## 1. Estrutura básica de um documento HTML

Todo documento HTML válido segue este esqueleto:

```html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Título da página</title>
    </head>
    <body>
        <!-- Conteúdo visível -->
    </body>
    </html>
```

Cada linha tem função específica, não é boilerplate decorativo:
- `<!DOCTYPE html>` diz ao navegador para rederizar em modo padrão (standards mode), não em modo de compatibilidade retrógrada.
- `lang="pt-BR"` importa para acessibilidade (leitores de tela escolhem a pronúncia certa) e para SEO.
- `charset="UTF-8"` evita que acentos e caracteres especiais quebrem.
- `viewport` é o que faz a página respeitar a largura real de uma celular, em vez de rederizar como se fosse desktop reduzido.

---

## 2. Tags semânticas

Semântica em HTML significa: a tag descreve o que o conteúdo é, não como ele deve parecer. A aparência é problema do CSS

- `<header>` - Cabeçalho - de uma página ou de uma seção
- `nav` - Bloco de navegação (menu de links)
- `<main>` - Conteúdo principal e único da página (só um por página)
- `<section>` - Agrupamento temático de conteúdo, geralmente com heading próprio
- `<article>` - Conteúdo independente, que faz sentido sozinho fora do contexto da página (um post, uma notícia, um comentário)
- `aside` - Conteúdo relacionado, mas secundário (sidebar, nota lateral)
- `<footer>` - Rodapé, de uma página ou de uma seção

A pergunta que decide entre `<section> e <article>`: esse bloco de conteúdo faz sentido se for retirado da página e colocado em outro lugar, sozinho? Se sim, é `<article>`. Se só faz sentido dentro do contexto da página em que está, é `<section>`.

O erro mais comum: usar `<div>` para tudo porque "Funciona visualmente igual. Funciona visualmente, mas não comunica nada para leitor de tela, mecanismo de busca ou qualquer ferramenta que analisa a estrutura da página sem executar CSS.

---

## 3. Herarquia de heading

- Existe só um `<h1>` por página, ele é o título principal, equivalente ao assunto central do documento.
- `<h2> a <h6>` formam hierarquia, como um sumário: não pula nível (de `h2` direto pra pra `h4`) só porque o `h4` visualmente ficou menor no CSS que você queria.
- Tamanho de fonte não é motivo para escolher heading. Se um texto parece que devia ser menor, isso se resolve com CSS, não pulando de nível.

---

## 4. Listas, tabelas, links, imagens

- `<ul>`(lista não ordenada) vs `<ol>`(lista ordenada), a escolha depende se a ordem dos itens importa semanticamente, não de como você quer que apareça.
- `<table>` é para dados tabulares reais (linhas e colunas com relação entre si). Não é ferramente de layout, isso morreu nos anos 2000 e não deve voltar.
- `<a href="...">` sempre com `href` real. `<a>` sem destino, usado só para estilizar com botão via JS, é uso incorreto, nesse caso a tag certa é `<button>`.
- `<img src="..." alt="...">`, `alt` não é opcional. Se a imagem é decorativa (não carrega informação), `alt=""` vazio é aceitável, se carrega informação, `alt` descreve o que está na imagem para quem não pode vê-la.

---

## 5. Atributos globais

- `class`: usado para estilização via CSS e seleção via JS, pode se repetir em vários elementos
- `id`: identificador único na página(não pode repetir), usado para âncoras (`#id`), CSS de alta especificidade (evitar abusar) ou seleção pontual via JS.
- `data-*`: atributos customizados para guardar dado que não tem tag própria (ex: `data-user-id="42"`), lido via JS (`dataset`), sem afetar renderização.

---

## Exercício

Montar a estrutura semântica completa de uma página de blog, sem nenhuma linha de CSS. A página deve ter:

- Cabeçalho com logo/Título e navegação
- Um post principal, com heading, autor, data e conteúdo
- Uma sidebar com links relacionados
- Rodapé com informação de copyright

Entrar o arquivo `.html` real, não descrição do que ele teria.

---

## Perguntas de verificação (sem consultar material)

1. Por que usar `<article>` para o post do blog e não `<div class="post">`?
2. Em que situação um bloco de conteúdo deveria ser `<section>` em vez de `<article>`, mesmo tendo heading próprio?
3. Por que pular de `<h1>` direto para `<h3>` é um erro, mesmo que visualmente o `<h3>` tenha o tamanho que você queria?