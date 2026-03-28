const prompt = require('prompt-sync')();

//Lista de produtos (array)
let produtos = ["Arroz", "Feijão", "Macarrão", "Café"];
let precos = [5.50, 6.00, 4.50, 12.00];

console.log("=== CARRINHO DE COMPRAS ===\n");

//Loop para mostrar os produtos
for (let i = 0; i < produtos.length; i++) {
    console.log((i + 1) + " - " + produtos[i] + " - R$" + precos[i]);
    }

console.log("\n===========================");   

// Perguntar qual produto quer comprar
let escolha = prompt("\nDigite o nuúmero do produto: ");
escolha = parseInt(escolha) -1; //Ajusta porque array começa do 0

if (escolha >= 0 && escolha < produtos.length) {
    console.log("\nVocê escolheu: " + produtos[escolha]);
    console.log("Preço: R$ " + precos[escolha]);

// Calcular o tatal (aqui estra OUTRO loop)

let total = 0;
for (let i = 0; i <precos.length; i++) {
    total = total + precos[i];
}
console.log("\nTotal da compra se levar tudo: R$ " +total);
}else{
    console.log("Produto inválido!");
}
