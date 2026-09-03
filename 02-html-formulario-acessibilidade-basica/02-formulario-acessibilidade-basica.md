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