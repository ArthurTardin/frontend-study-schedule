# Etapa 8 - JavaScript: Estruturas de Controle e Funções

## 1. Condicionais e loops

```js
    // if / else if / else
    if (idade >= 18) {
        console.log("Maior de idade");
    } else if (idade >= 12) {
        console.log("adolescente");
    } else {
        console.log("Criança");
    }

    // for clássico
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    //while
    let contador = 0;
    while (contador < 5) {
        console.log(contador);
        contador++;
    }

    // for...in - itera sobre CHAVES de um objeto (ou índice de array, mas não é uso recomendado para array)
    const pessoa = {nome: "Arthur", idade: 17 };
    for (const chave in pessoa) {
        console.log(chave, pessoa[chave]); // "nome" "Arthur", "idade" 17
    }
```

**Erro comum:** usar `for...in` em array esperando pegar os valores, `for...in` em array itera sobre os **índices** (como string: "0", "1"...), não sobre valores. Para array, o certo é `for...of` ou os métodos de array (`map`, `forEach`, etc) vistos na Etapa 7.

---

## 2. Funções: declaradas, expressões, arrow functions

```js
    // função declarada
    function somar(a, b) {
        return a + b;
    }
    // função com expressão (atrbuída a uma varíavel)
    const subtrair = function (a, b) {
        return a - b;
    }
    // arrow function
    const multiplicar = (a, b) => a * b;
```

**Diferenças reais, não só sintaxe:**

- **Hoisting:** função declarada pode ser chamada **antes** de aparecer no código (o JS "eleva" a declaração inteira pro topo do escopo); Função como expressão e arrow function **não podem**, só existem a partir da linha onde foram definidas.

```js
    somar(2, 3); // funciona, mesmo chamado antes da declaração abaixo function somar(a, b) { return a + b; }

    multiplicar(2, 3); // Erro: Cannot acess 'multiplicar' before initialization

    const multiplicar = (a, b) => a * b
```

- **this**: essa é a diferença mais importante, e o motivo real de arrow function existir além de sintaxe curta. Função tradicional (declarada ou expresão) tem seu **próprio** `this`, que muda dependendo de como a função é chamada. Arrow function **não tem `this` próprio**, ela usa o `this` do contexto onde foi escrita (escopo léxico). Isso importa muito em callbacks e em código dentro de objetos/classes, assuntos que aparece com mais força quando chegarmos em DOM e eventos (Etapa 9 e 10), mas o conceito começa a ser registrado.

---

## 3. Escopo: block scope vs function scope

```js
   function exemplo() {
        if (true) {
            let x = 10; // block scope, só existe dentro desse { }
            let y = 20; // function scope, existe na função inteira
        }
        console.log(y); // 20, funciona (var "vazou" do bloco if)
        console.log(x); // Erro: x is not defined (let não vaza do bloco)
   } 
```

Isso é outro motivo prático de evitar `var`: ela ignora os limites `{ }` de um `if` ou `for`, o que gera bugs onde uma variável que deveria estar "presa" dentro de um bloco continua acessível (e sobrescrevível) fora dele.

---

## 4. Closures (introdução)

Closures é quando uma função "lembra" do ambiente (variáveis) onde foi criada, mesmo depois que esse ambiente já deveria ter terminado de existir.

```js
    function criarContador() {
        let contador = 0;
        return function () {
            contador++;
            return contador;
        };
    }

    const meuContador = criarContador();
    console.log(meuContador()); // 1
    console.log(meuContador()); // 2
    console.log(meuContador()); // 3
```

`criarContador()` executa e, normalmente, `contador` deixaria de existir assim que a função termina. Mas a função interna retorna **"fecha" sobre** a variável `contador`, ela continua acessando e modificando essa variável específica, mesmo depois que `criarContador` já terminou de rodar. Cada chamada de `criarContador()` cria um `contador` **novo e independente**, se você cria `const outroContador = criarContador()`, ele tem seu próprio `contador`, começando do zero, sem interferir no primeiro.

Isso é usado na prática para criar funções com "memória privada", um jeito de guardar estado sem expor a variável diretamente no escopo global.

---

## Exercício

Implementar um validador de formulário em JS puro (sem tocar DOM ainda, isso é Etapa 9), que recebe um objeto e retorna os erros encontrados. Exemplo de uso esperado:
 
```javascript
function validarFormulario(dados) {
    // sua lógica aqui
}
 
const resultado = validarFormulario({
    nome: "Ar",
    email: "emailinvalido",
    idade: 15
});
 
console.log(resultado);
// esperado algo como:
// { nome: "deve ter pelo menos 3 caracteres", email: "formato inválido", idade: "deve ser maior ou igual a 18" }
```
 
Regras mínimas pra validar: `nome` com pelo menos 3 caracteres, `email` contendo `@` e `.`, `idade` maior ou igual a 18. Use `if`/`else` ou outra estrutura condicional de sua escolha — o foco aqui é estrutura de controle, não sintaxe decorada.

---

## Perguntas de verificação (sem consultar material)
 
1. Por que `multiplicar(2, 3)` dá erro se chamado antes da linha `const multiplicar = ...`, mas `somar(2, 3)` funciona antes da declaração de `function somar`?
2. O que é uma closure, com um exemplo seu (pode ser simples, mas não pode ser o mesmo do material)?
3. No exemplo de `var` "vazando" do bloco `if`, por que isso é considerado risco de bug, na prática, e não só uma curiosidade técnica?