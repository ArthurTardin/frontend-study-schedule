# Etapa 4 - CSS: Layout com Flexbox

## 1. `display: flex` e os dois eixos

```CSS
    .container {
        display: flex;
    }
```

Isso transforma `.container` num **flex container**, e todos os filhos diretos dele em **flex container**. A partir daqui, existem dois eixos que organizam tudo:

- **Eixo principal (main exis):** a direção em que os itens são organizados por padrão: horizontal, da esquerda pra direita.
- **Eixo cruzado (cross exis):** perpendicular ao principal: vertical, por padrão

Isso muda se você definir:

```CSS
   .container {
    flex-direction: column;
   } 
```

Com `column`, o eixo principal vira vertical e o crizado vira horizontal, **as propriedades abaixo não mudam de nome, mas passam a agir na direção nova.** Esse é o ponto que mais confunde quem está começando: `justify-content` sempre controla o eixo *principal*, não "sempre horizontal".

---

## 2. `justify-content` - controla o eixo principal

```CSS
   justify-content: flex-start;  /* padrão: itens colados no início */
   justify-content: flex-end;  /* itens colados no fim */
   justify-content: center;     /* itens cdntralizados */
   justify-content: space-between; /*primeiro no início, último no fim, espaço igual entre os do meio */
   justify-content: space-around; /* espaço igual nas duas laterais de cada item */
   justify-content: space-evenly; /* espaço absolutamente igual entre todos, incluindo pontas */
```

Usado, por exemplo, para distribuir itens de um navbar horizontalmente.

---

## 3. `align-items` - controla o eixo cruzado

```css
align-items: stretch;    /* padrão: item estica pra ocupar toda altura disponível */
align-items: flex-start; /* item colado no topo */
align-items: flex-end;   /* item colado na base */
align-items: center;     /* item centralizado verticalmente */
```

Isso resolve, de forma direta, um problema clássico de CSS antigo: **centralizar verticalmente**. Antes de Flexbox, isso axigiria gambiarra (`position: absolute` + `transform`, ou `line-height` mal calculado). Com Flexbox:

```css
.container {
    display: flex;
    align-items: center;
    justify-content: center;
}
```

Centraliza qualquer conteúdo nos dois eixos, sem gambiarra.

---

## 4. `align-self` - sobrescreve `align-items` para um item específico

```css
.item-especial {
    align-self: flex-end;
}
```

Enquanto `align-items` é definido no container e afeta todos os flhos, `align-self` é definido no próprio item e sobrescreve o comportamento só dele, útil quando um item específico preisa se comportar diferentes dos irmãos.

---

## 5. `flex-grow`, `flex-shrink`, `flex-basis`

```css
.item {
    flex-grow: 1;    /* quanto esse item "quer" crescer, proporcional aos outros, se houver espaço sobrando */
    flex-shrink: 1;  /* quanto esse item "aceita" encolher, se faltar espaço */
    flex-basis: 200px; /* tamanho de partida antes de crescer/encolher */
}
 
/* forma shorthand comum */
.item {
    flex: 1; /* equivale a flex-grow: 1; flex-shrink: 1; flex-basis: 0; */
}
```

O erro comum aqui é achar que `flex-grow: 1` em todow os itens faz ele ficarem do mesmo tamanho, na verdade, faz eles **crescerem na mesma proporção do espaço sobrando**, o que só resulta em tamanho igual se todos começarem do mesmo `flex-basis`.

---

## 6. Uso típico: navbar e cards alinhados

```css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
 
.cards-container {
    display: flex;
    gap: 20px;
}
 
.card {
    flex: 1;
}
```

`gap` (funciona em Flexbox e Grid) cria espaço entre os itens sem precisar de `margin` manual em cada um, evita o problema clássio de margin duplicando nas bordas.

---

## Exercício

Navbar responsiva simples: logo à esquerda, links de navegação à direita, tudo alinhado verticalmente ao centro, **usando só Flexbox**, sem `float`, sem `position: absolute`.

---

1. Se `flex-direction: column` está definido num container, o que `justify-content: center` centraliza agora, horizontal ou vertical? Por quê?
2. Qual a diferença prática entre `align-items` (no container) e `align-self` (no item)?
3. Se dois itens têm `flex-grow: 1` e `flex-basis` diferentes entre si, eles terminam do mesmo tamanho? Por quê?