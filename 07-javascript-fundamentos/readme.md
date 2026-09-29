# Etapa 7 - JavaScript: Fundamentos da Linguagem

## 1. Variáveis: `let`, `const`, e por que não `var`

```js
    let idade = 25;
    const nome = "Arthur";
    var antigo = "evitar"; // existe, mas não deve ser usado em código novo
```

- `const`: não pode ser reatribuída depois de declarada. Usada por padrão, sempre que o valor não precisa mudar.
- `let`: pode ser reatribuída. Usada quando você sabe que o valor vai mudar (contador de loop, acumulador e etc).
- `var`: Existe por compatibilidade históica, mas tem escopo de função (não de bloco), o que causa bugs sutis em loops e condicionais. Regra prática: **nunca usar `var` em código novo.**

**importante sobre `const` com objetos e arrays:** `const` impede reatribuir a variável, mas não impede alterar o conteúdo de um objeto ou array:

```js
   const usuario = {nome: "Arthur"};
   usuario.nome = "Outro"; // funciona, o objeto foi alterado, não reatribuído
   usuario = {}; // erro, isso é reatribuição
```

---

## 2. Tipos primitivos e coerção de tipo

Tipos primitivos em JS: `string`, `number`, `boolean`, `underfined`, `null`, `symbol`, `bigint`.

**Coerção de tipo** é quando o JS converte um tipo em outro automaticamente, muitas vezes de forma que confunde quem não espera:

```js
    console.log("5" + 3); //"53" (número convertido para string, concatena)
    console.log("5" - 3); //
```