# Etapa 3 - CSS: Fundamentos

## 1. Seletores

```CSS
    /* Elemento */
    p { }

    /* Classe */
    .destaque { }

    /* ID */
    #cabecalho { }

    /* Atributo */
    input[type="email"] { }

    /* Pseudo-classe */
    a:houver { }
    li:first-child { }
    input:focus { }

    /* Combinadores */
    nav a { }  /* Descendente: qualquer <a> dentro de <nav> */
    nav > a { } /* filho direto */
    h2 + p { } /* Irmão imediatamente após */
```

- Seletor de **elemento** afeta todos os elementos daquele tipo, mais amplo, mais fácil de conflitar sem querer.
- Seletor de **classe** é reutilizável entre alementos diferentes, a ferramenta do dia a dia.
- Seletor de **ID** afeta um único elemento (porque `id` é único na página), usar para estilização é raro em CSS moderno; `id` costuma ser reservado paa âncoras e seleção via JS.
- **Combinador descendente** (`nav a`) pega qualquer `<a>` dentro de `<nav>`, não importa a profundidade. **Combinador filho direto** (`nav > a`) só pega `<a>` que é filho imediato, não pega `<a>` dentro de um `<ul>` dentro do `<nav>`.

---

## 2. Especificidade e cascata

Quando duas regras conflitam no mesmo elemento, quem vence não é "a que está escrito com mais detalhes", é calculado por peso:

- Estilo Inline (`style="..."`): Mais alto que qualquer seletor em arquivo CSS
- ID (`#exemplo`): Alto
- Classe, atrbuto, pseudo-classe (`.exemplo, [type], :houver`): médio
- Elemento, pseudo-elementos (`p, ::before`): Baixo

Regras de desempate:

1. Maior especificidade vence, independente de qual está escrita depois no arquivo.
2. Se a especificidade for **igual**, a regra escrita **depois** no CSS vence.
3. `!important` derruba toda essa lógica e vende quase tudo, por isso é tratado como último recurso, não ferramenta de uso comum. Abusar de `!important` é sinal de que a estrutura de especificidade do CSS está desorganizada, não uma solução real.

### Exemplo prático de pegadinha: 

```CSS
    .card { color: blue; }
    p { color: red; }
```

```HTML
    <p class="card">Texto</p>
```

Resultado: Azul. Classe tem especificidade maior que seletor de elemento, mesmo `p` estando escrito depois no arquivo. Ordem no arquivo só decide em caso de empate de especificidade, não sobrepõe especificidade maior.

--- 

## 3. Box model

Todo elemento HTML é, para o CSS, uma caixa ratangular composta por quatro camadas, de dentro para fora:

┌─────────────────────────────┐
│         margin               │
│  ┌─────────────────────┐    │
│  │       border          │    │
│  │  ┌───────────────┐   │    │
│  │  │    padding      │   │    │
│  │  │  ┌─────────┐   │   │    │
│  │  │  │ content │   │   │    │
│  │  │  └─────────┘   │   │    │
│  │  └───────────────┘   │    │
│  └─────────────────────┘    │
└─────────────────────────────┘

- **content**: a área onde o conteúdo (texto, imagem) realmente fica.
- **padding**: espaço interno, entre o conteúdo e a borda. Faz parte do "fundo" do elemento (se o elemento tem `background-color`, o padding é colorido também).
- **border**: a borda em si.
- **margin**: espaço externo, entre esse elemento e os elementos vizinhos. Não tem cor de fundo, é espaço vazio, transparente.

### `box-sizing` decide como `width`/`height` são calculados:

```CSS
    /* padrão do navegador */
    box-sizing: content-box; /* width = só o content; padding e border SOMAM por fora */

    /* Usado na prática em quase todo projeto moderno */
    box-sizing: border-box; /* width = content + padding + border, tudo incluso */
```

Sem `border-blox`, definir `width: 200px` com `padding: 20px` resulta numa caixa de 240px de largura real, o padding soma por for do valor que você definiu. É por isso que a maioria dos projetos reais começa com:

```CSS
    * { box-sizing: border-box; }
```

---

## 4. `display`

- `block`: ocupa a largura toda disponível, força quebra de linha antes e depois (ex: `div`, `p`, `h1`).
- `inline`: Ocupa só o espaço do conteúdo, não quebra linha, não respeita `width`/`height`/margin vertical (ex: `span`, `a`, `strong`).
- `inline-block`: não quebra linha (como `inline`), mas respeita `width`/`height`/margin como `block`. Meio-termo usado quando você quer elementos lado a lado com tamanho controlado.
- `none`: Remove o elementos da rederização visual (não ocupa espaço, como se não existisse no layout, diferente de `visibility: hidden`, que oculta mas mantém o espaço reservado).

---

## 5. Unidades

- `px`: valor fixo, não escala com nada.
- `%`: Relativo ao elemento pai (ex: `width: 50%` é metade da largura do conteiner pai).
- `em`: relativo ao tamanho de fonte do elemento atual (ou do pai, dependendo da propriedade), efeito cascaata/composição entre elementos aninhados, o que pode gerar tamanho inesperado se não for restreado.
- `rem`: relativo ao tamanho de fonte do elemento raiz (`html`), sempre a mesma referência não importa o quão aninhado o elemento esteja, por isso é a unidade preferida para fonte em projetos modernos, mais previsível que `em`.
- `vw`/`vh`: relativo à largura/altura da viewport (tela visível), útil para elementos que precisam ocupar proporção da tela independente do conteúdo.

---

## Exercício

Estilizar a página de blog da Etapa 1 aplicando box model corretamente, sem usar flexbox ou grid ainda (isso é assunto das próximas etapas, e usar agora mascara se você entendeu box model isoladamente). Deve incluir:
- `box-sizing: border-box` aplicado globalmente.
- Uso de `padding`, `border` e `margin` visivelmente diferentes entre pelo menos dois elementos
- Pelo menos um exemplo real de conflito de especificidade resolvido de proósito (ex: uma classe vencendo um seletor de elemento)

---

## Pergunta de verificação (sem consultar material)

1. Entre uma regra com seletor de classe escrita primeiro no arquivo e uma regra com seletor de elemento escrita depois, qual vence, e por quê?
2. Por que `width: 200px` com `padding: 20px` resulta numa caixa maior que 200px quando `box-sizing` é `content-box`, e como `border-box` resolve isso?
3. Por que `rem` é geralmente preferido a `em` para definir tamanho de fonte em projetos com muito elementos aninhados?