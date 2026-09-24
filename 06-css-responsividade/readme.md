# Etapa 6 - CSS: Responsividade

## 1. Media Queries

```Css
    /* Estilo base: aplica em qualquer largura, a não se que sobrescrito */
    .card {
        width: 100%;
    }

    /* Aplica a partir de 768px de largura de viewport */
    @media (min-width: 768px) {
        .card {
            width: 50%;
        }
    }

    /* Aplica a partir de 1024px */
    @media (min-width; 1024px) {
        .card {
            width: 33.33%;
        }
    }
```

`min-width` significa "a partir dessa largura para cima". `max-width` significa "até essa largura, para baixo", usado em abordagem desktop-forst (o oposto do que vamos adotar aqui).

---

## 2. Mobile-first vs desktop-first

**Mobile-first:** você escreve o CSS base pensando na tela pequena primeiro, e usa `min-width` para adicionar/ajustar comportamento conforme a tela cresce.

```Css
   /* base = mobile */
   .container {
        flex-direction: column;
   } 

   /* ajusta para telas maiores */
   @media (min-width: 768px) {
        .container {
            flex-direction: row;
        }
   }
```

**Desktop-first:** o oposto, nCSS base pensa em tela grande, e `max-width` remove/ajusta para telas menores.

**Por que mobile-first é o padrão atual, e não é arbitrário:** a maior parte do tráfego de web hoje é mobile. Escrever mobile-first significa que o navegador, no caso mais comum (celular), não precisa processar e depois sobrescrever um monte de CSS de desktop que nem se aplica, o CSS base já é o que a maioria vai usar. Desktop-first inverte isso: todo celular carrega o CSS pesado de desktop e depois sobrescreve por cima, o que é mais desperdício de processamento, mesmo sendo pequeno.

---

## 3. `clamp()`, `min()`, `max()` - valores fuidos sem media query

```Css
   /* clamp(mínimo, valor preferido, máximo) */
   h1 {
        font-size: clamp(1.5rem, 5vw, 3rem);
   } 
```

Isso diz: o tamanho da fonte tenta ser `5vw` (5% da largura da viewport), mas nunca fica menor que `1.5rem` nem maior que `3rem`. Isso resolve, numa linha, um problema que antes precisaria de várias media queries só para ajustar tamanho de fonte gradualmente.

```Css
   .container {
    width: min(90% 1200px);
   } 
```

Isso diz: a largura é `90%` da tela, mas nunca passa de `1200px`, útil para container central que não fica gigante em monitor-wide.

---

## 4. Imagens responsivas

```Css
   img {
        100%;
        height: auto;
        display: block;
   }
```

`max-width: 100%` impede que uma imagem seja maior que o container onde está, sem forçar ela a ficar sempre no tamanho do container (diferente de `width: 100%`, que forçaria a imagem a esticar até a largura total mesmo se imagem original for menor). `height: auto` mantém a proporção original da imagem enquanto a largura se ajusta.

**Introdução a `srcset`** (aprofundamento vem depois, mas o conceito importa agora):

```html
   <img src="imagem-pequena.jpg"
        srcset="imagem-pequena.jpg 480w, imagem-grande.jpg 1080w"
        sizes="(max-width: 600px) 480px, 1080px"
        alt="Descrição da imagem"> 
```

Isso permite que o navegador baixe a versão da imagem no tamanho certo para tela do usuário, em vez de sempre baixar a imagem gigante mesmo num celular pequeno, ganho real de performance, não só cosmético.

---

## Exercício

Tornar a landing page da Consolidação 1 responsiva para três larguras: mobile (até ~480px), tablet (~768px) e desktop (~1024px+). No mínimo:
- A navbar do header deve mudar de comportamento entre mobile e desktop (ex: links empilhados verticalmente no mobile, em linha no desktop).
- O layout principal (`main`) deve reorganizar seus blocos internos entre as larguras (ex: seções empilhadas no mobile, lado a lado no desktop, se fizer sentido pro seu conteúdo).
- Use abordagem **mobile-first** (CSS base = mobile, `min-width` para telas maiores).

---

## Perguntas de verificação (sem consultar material)

1. Por que mobile-first usa `min-width` e desktop-first usa `max-width` — o que essa escolha de propriedade reflete sobre qual tela é o "padrão" e qual é a "exceção" em cada abordagem?
2. Qual a diferença prática entre `width: 100%` e `max-width: 100%` numa imagem, num caso onde a imagem original é menor que o container?
3. Por que `clamp()` pode substituir várias media queries feitas só para ajustar tamanho de fonte gradualmente?