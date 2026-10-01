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
    console.log("5" - 3); // 2 (string convertida para número, subtrai)
    console.log(true + 1); // 2 (true convertido para 1)
    console.log("" == 0) // true (coerção entre tipos )
```

---

# 3. `===` vs `==`

```js
   "5" == 5 // true, compara valor, permite coerção de tipo
   "5" === 5 // false, compara valor E tipo, sem coerção
```

Regra prática: **use `===` por padrão.** `==` permite comparações imprevisíveis (`"" == 0` é `true`, `null == undefined` é `true`, mas `null == 0` é `false`, inconsistente e difícilde prever de cabeça). `===` elimina essa categoria de bug.

---

## 4. Template lierals

```js
   const nome = "Arthur";
   const idade = 17;
   
   // forma antiga
   const mensagem1 = "Olá " + nome + ", você tem " + idade + " anos.";

   // template literal
   const mensagem2 = `Olá, ${nome}, você tem ${idade} anos.`;
```

Usa crase (`` ` ``) em vez de aspas, e `${variavel}` para interpolar valores direto na string, mais legível que concatenação com `+`, e permite quebra de linha real dentro da string sem percisar de `\n`.

---

## 5. Arrays: métodos assenciais

```js
   const numeros = [1, 2, 3, 4, 5];
   
   //map: transforma cada item, retorna um NOVO array do mesmo tamanho
   const dobrado = numeros.map(n => n * 2); // [2, 4, 6, 8, 10]

   // filter: selecione itens que passam um teste, retorna array (possivelmente menor)
   const pares = numeros.filter(n => n % 2 === 0); // [2, 4]

   // reduce: acumula todos os itens num único valor final
   const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0) // 15

   //forEach: executa uma ação para cada item, NÃO retorna array novo
   numeros.forEach(n => console.log(n));
```

**Quando usar cada um, não só como escrever:**

- `map`: quando você quer transformar cada item e manter a mesma quantidade de itens no resultado.
- `filter`: quando você quer um subconjunto dos itens, baseado numa condição.
- `reduce`: quando você quer um único valor final resultante de todos os itens (soma, produto, maior valor, agrupamento).
- `forEach`: quando você só quer *fazer algo* com cada item (ex: imprimir, salvar em banco), sem precisar de um array novo como resultado.

**Erro comum:** usar `forEach` esperando que ele retorna algo, ou usar `map` só para executar uma ação sem usar array retornado (isso funciona, mas comunica intenção errado para quem lê o código depois, `map` promete uma array novo transformado, não é "só um loop bonito").

---

## Exercício

Dado uma array de objetos representando produtos, por exemplo:

```js
   const produtos = [
    {nome: "Notebook", preco: 3000, categoria: "eletronico"},
    {nome: "Mouse", preco: 50, categoria: "eletronico"},
    {nome: "Cadeira", preco: 400, categoria: "moilia"},
    {nome: "Monitor", preco: 800, categoria: "eletronico"},
   ];
```

- Use `filter` para pegar só os produtos da categoria `"eletronico"`.
- Use `map` para gerar um array só com os nomes desses produtos filtrados.
- Use `reduce` para somar o preço total dos produtos filtrados.

Entregar o código real executado (pode ser no console do navegador, Node, ou qualquer ambiente, mas com output real mostrado, não descrito).

---

## Perguntas de verificação (sem consultar material)

1. Por que `reduce` foi escolhido pra somar os preços, em vez de um loop `for` manual? Existe alguma vantagem real, ou é só estilo?
2. O que `"5" + 3` retorna, e por que, o que está acontecendo de coerção de tipo aí?
3. Por que `===` é preferido a `==` como padrão, mesmo `==` "funcionando" na maioria dos casos comuns?