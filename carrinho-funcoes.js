const prompt = require('prompt-sync')();

let produtos = ["Arroz", "Feijão", "Macarrão", "Café"];
let precos = [5.50, 6.00, 4.50, 12.00];

//Função para mostrar o menu
function mostrarMenu() {
    console.log("\n=== CARRINHO DE COMPRAS ===\n");
    for (let i = 0; i < produtos.length; i++) {
        console.log((i + 1) + " - " + produtos[i] + " - R$ " + precos[i]);
    }
    console.log("\n===========================");
}

//Função para calcular o total
function calcularTotal() {
    let total = 0;
    for (let i = 0; i < precos.length; i++) {
        total = total + precos[i];
    }
    return total;
}

//Função principal
function main() {
    mostrarMenu();

    let escolha = prompt("Digite o número do produto: ");
    escolha = parseInt(escolha) - 1;

    if (escolha >= 0 && escolha < produtos.length) {
        console.log("\nVocê escolheu: " + produtos[escolha]);
        console.log("Preço: R$ " + precos[escolha]);

        let total = calcularTotal();
        console.log("\nTotal da compra se levar tudo: R$ " + total);
    } else {
        console.log("Produto inválido");
    }
}

//Executa o programa
main();