const pedidos = [
    {nome: "Notebook", preco: 3000, categoria: "eletronico"},
    {nome: "Mouse", preco: 40, categoria: "eletronico"},
    {nome: "Cadeira", preco: 400, categoria: "Mobilia"},
    {nome: "Monitor", preco: 800, categoria: "eletronico"},
];

const pedidosFiltrados = pedidos.filter(n => n.categoria === "eletronico");
console.log(pedidosFiltrados);

const pedidosFiltradosArray = pedidosFiltrados.map(n => n.nome);
console.log(pedidosFiltradosArray);

const pedidosValorSomado = pedidosFiltrados.reduce((acumulador, total) => acumulador + total.preco, 0);
console.log(pedidosValorSomado);