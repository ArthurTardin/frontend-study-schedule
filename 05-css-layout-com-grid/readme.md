# Etapa 5 - CSS: Layout com Grid

## 1. `display: grid` e a diferença fundamental com Flexbox

Flexbox organiza itens em **uma dimensão** por vez (uma linha, ou uma coluna). Grid organiza em **duas dimensões simultâneas**, linhas e colunas ao mesmo tempo, com controle explícito de onde cada item cai na malha

```css
   .container {
        display: grid;
        grid-template-columns: 200px 1fr 1fr;
        grid-template-rows: 100px auto;
   } 
```

- ``grid-template-columns` define quantas colunas existem e a largura de cada uma.
- `1fr` significa "uma fração do espaço restante", se você tem `1fr 1fr`, as duas colunas dividem igualmente o espaço que sobrar depois de valores fixos serem alocados.
- `grid-template-rows` funciona igual, só que para linhas.

**Exemplo prático:** `grid-template-columns: 200px 1fr 1fr` cria ma coluna fixa de 200px (ex: sidebar) e duas colunas que dividem igualmente o restante do espaço, isso muda dinamicamente com o tamanho da tela, sem media query nenhuma.

---

## 2. `gap`

```css
   .container {
        display: grid;
        gap: 20px; /* espaço entre linhas E colunas */
        /*ou separado: */
        row-gap: 20px;
        columns-gap: 10px;
   } 
```

Mesma lógica do Flexbox, evita `margin` manual duplicando espaçamento nas bordas dos itens.

---

## 3. `grid-column` e `grid-row` - posicionando item específico na malha

```css
   .item-grande {
        grid-column: 1 / 3 /* ocupa da linha de grade 1 até a 3 (ou seja, 2 colunas) */
        grid-row: 1 / 2;
   } 
```

Os  números aqui não são "coluna 1, coluna 3", são **linhas de grade** (grid lines), que existem entre as colunas. Uma malha de 3 colunas tem 4 linhas de grade (antes da primeira coluna, entre cada uma, depois da última). `grid-column: 1 / 3` significa "começa na linha 1, termina na linha 3", o que cobre as duas primeiras colunas.

Isso é o que permite um item "atravessar" múltiplas colunas ou linhas, algo que Flexbox não faz nativamente sem gabiarra.

---

## 4. `grid-template-areas` - nomeando regiões da malha

```css
   .container {
        display: grid;
        grid-template-columns: 200px 1fr;
        grid-template-rows: auto 1fr auto;
        grid-template-areas:
            "header header"
            "sidebar main"
            "footer footer"
   }
   
   header { grid-area: header; }
   aside { grid-area: sidebar; }
   main { grid-area: main; }
   footer { grid-area: footer; }
```

Isso é a forma mais legível de definir um layout de páginas inteira, você literalmente desenha a estrutura no CSS usando nomes, em vez de calcular números de linhas de grade manualmente. `header header` repetido nas duas colunas da primeira linha significa que o header ocupa a largura toda, atravessando as duas colunas.

---

## 5. Grid vs Flexbox - quando usar cada um

| Situação | Ferramenta |
|--- |---|
| Alinhar itens numa única linha ou coluna (navbar, lista de cards em fileira) | Flexbox |
| Layout de página inteira com regiões definidas (header/sidebar/main/footer) | Grid |
| Não sabe quantos itens vão existir, quer que fluam naturalmente | Flexbox (com `flex-wrap`) |
| Precisa de item atravessando múltiplas linhas/colunas (ex: destaque maior numa galeria) | Grid |
| Duas dimensões controladas ao mesmo tempo (linha E coluna) | Grid |

Não é "Grid é melhor que flexbox" ou vice-versa, são ferramentas par a problemas diferentes, e é comum um projeto real usar os dois: Grid para estrutura da página, Flexbox para alinhar itens dentro de um bloco específico dessa estrutura (ex: os links dentro do header).

---

## Exercício

Layout de página completa - header, sidebar, main, footer, usando **Grid** com `Grid-template-areas`. Sidebar com largura fixa, main ocupando o resto do espaço disponível.

---

## Perguntas de verificação (sem consultar material)

1. Qual a diferença fundamental entre Grid e Flexbox em termos de quantas dimensões cada um controla ao mesmo tempo?
2. Em `grid-template-areas`, o que acontece se você repetir o mesmo nome da área em duas células adjacentes da malha?
3. Dê um exemplo de situação onde você usuaria Grid para a estrutura geral da página e Flexbox dentro de uma dessas áreas, por que faz sentido combinar os dois em vez de usar só um?