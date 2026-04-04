let produtos = [
    { nome: "Arroz", preco: 5.50, quantidade: 10 },
    { nome: "Feijão", preco: 6.00, quantidade: 3 },
    { nome: "Macarrão", preco: 4.50, quantidade: 8 }
];

console.log("--- LISTA DE PRODUTOS ---");
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].nome + " - R$ " + produtos[i].preco + " - " + produtos[i].quantidade + " unidades");
}

// Valor total do Arroz
let totalArroz = produtos[0].preco * produtos[0].quantidade;
console.log("\nValor total do Arroz: R$ " + totalArroz);

// Valor total do estoque
let totalGeral = 0;
for (let i = 0; i < produtos.length; i++) {
    totalGeral += produtos[i].preco * produtos[i].quantidade;
}
console.log("Valor total do estoque: R$ " + totalGeral);