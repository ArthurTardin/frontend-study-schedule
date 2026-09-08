# Etapa 2 - HTML: Formulários e Acessibilidade básica

## 1. Elementos de formulário

```html
    <form action="/enviar" method="POST">
        <input type="text" name="nome">
        <input type="email" name="email">
        <input type="password" name="senha">
        <input type="date" name="nascimento">
        <input type="tel" name="telefone">
        <input type="number" name="idade">
        <input type="checkbox" name="aceite">
        <input type="radio" name="plano" value="basico">
        <textarea name="mensagem"></textarea>
        <select name="pais">
            <option value="br">Brasil</option>
        </select>
        <button type="submit">Enviar</button>
    </form>
```

Pontos que importam, não só sintaxe:

- `type` do `input` não é cosmético. `type="email"` faz o navegador validar formato de email antes de submeter, e em mobile troca o teclado virtual para um com @ acessível. `type="tel"` abre teclado numérico. Usar `type="text"` para tudo joga fora validação e UX gratuitas que o navegador já resolve sozinho.

- `name` é o que vira chave no dado enviado. Sem `name`, o campo é preenchido na tela, mas não é enviado no submit, erro comum e silencioso.
- `<button type="submit">` vs `<button type="button">`: dentro de um `<form>`, `type="submit"` (que é o padrão se você omitir) dispara o envio do formulário. Se você quer um botão dentro do form que *não* submete (ex: "cancelar", "adicionar outro campo"), precisa declarar `type="button"` explicitamente, senão ele vai submeter sem querer.
- **Radio buttons compartilham** `name` para funcionar como grupo mutuamente exclusivo. Se dois radios têm `name` diferente, os dois podem ficar marcados ao mesmo tempo, o que quebra a própria função do radio.

---

## 2. `label` associado corretamente

Duas formas corretas de associar:

```HTML
    <!-- Forma 1: for + id -->
     <label for="email-usuario">Email</label>
     <input type="email" id="email-usuario" name="email">

     <!-- Forma 2: label envolvendo o input -->
      <label>
        Email
        <input type="email" name="email">
        </label>
```

**Por que isso importa de verdade, não é só boa prática:** um `label` associado corretamente faz o clique no texto do label focar o input, isso ajuda qualquer usuário com pouca precisão de mouse/touch a acertar um alvo pequeno (um checkbox de 16px, por exemplo). E um leitor de tela, ao focar o input, lê o conteúdo do `label` associado, sem essa associação, o campo é anunciado como "campo de texto em branco", sem dizer para que serve.

**Erro comum:** colocar um texto visualmente perto do input, parecendo um label, mas usando `<span>` em vez de `<label for="..."`. Visualmente idêntico, funcionalmente nulo para quem depende de leitor de tela.

---

## 3. Validação nativa

```HTML
    <input type="text" name="usuario" required minlength="3" maxlength="20">
    <input type="number" name="idade" min="18" max="120">
    <input type="text" name="cep" pattern="[0-9]{5}-[0-9]{3}" title="Formato: 00000-000">
    <input type="email" name="email" required>
```

- `required`: Impede submit se vazio
- `min`/`max`: Limite numérico ou de data
- `minlength`/`maxlength`: Limite de caracteres.
- `pattern`: regex que o valor precisa satisfazer. `title` é o que aparece na mensagem de erro nativsa, então sem o `title` o navegador motra uma mensagem genérica inútil.

Isso tudo funciona **sem uma linha de JavaScript**. É o primeiro nível de defesa, validação real e completa (contra ataque malicioso, por exemplo) sempre precisa ser feita também no servidor, mas isso é assunto de etapa futura.

---

## 4. Acessibilidade básica

- `alt` **em imagens dentro do formulário** (ex: ícone de botão de mostrar/ocultar senha) segue a mesma regra já vista na Etapa 1: descreve função, não decoração
- `aria-label` usada quando não há como ter um `<label>` visível (ex: campo de busca com só um ícone de lupa, sem texto). `aria-label="buscar"` dá nome ao camp para leitor de tela mesmo sem label visual.
- `aria-descibedby`: associa um campo a um texto de ajuda ou erro que fica em outro elemento (ex: uma mensagem de erro abaixo do input), fazendo o leitor de tela ler essa mensagem junto quando o campo é focado.
- `role`: introdução por enquanto: `role` redefine para o leitor de tela o que um elemento é, quando a tag usada não deixa isso claro nativamente (ex: uma `<div>` que funciona como botão via JS deveria ter `role="button"`, mas o ideal, sempre que possível, é usar a tag nativa `<button>` em vez de recriar o comportamento dela com `role` e JS)

Regra prática para essa etapa: **prefira sempre o elemento nativo certo antes de usar `aria-*` para consertar um elemento errado.** `aria-*` existe para os casos em que não há tag nativa que resolve, não para compensar escolha errada de tag.

---

## Exercício

Formulário de cadastro completo, funcional **sem nenhuma linha de JavaScript ou CSS**, com:
- Nome (texto, obrigatório, mínimo 3 caracteres)
- Email (obrigatório, validação nativa de formato)
- Senha (obrigatório, mínimo 8 caracteres)
- Data de nascimento
- Select de país com pelo menos 3 opções
- Todo `input` com `label` corretamente associado

Entregar o arquivo `.html` real.

---

## Perguntas de verificação (sem consultar material)

1. Por que `type="email"` é melhor que `type="text"` com validação manual depois, mesmo os dois eventualmente "funcionando"?
2. O que quebra, na prática, se um `<input>` não tiver `label` associado (nem por `for`, nem envolvendo)?
3. Em que situação você usuaria `aria-label` em vez de `<label>`, e por que não usar `aria-label` como padrão para tudo, já que "resolve" mais rápido?