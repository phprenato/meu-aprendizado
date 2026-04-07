const prompt = require('prompt-sync')();

let estoque = [];

function mostrarMenu() {
    console.log("\n=== SISTEMA DE ESTOQUE ===");
    console.log("1 - Adicionar produto");
    console.log("2 - Listar produtos");
    console.log("3 - Dar baixa (vender)");
    console.log("4 - Ver valor total do  estoque");
    console.log("5 - Sair");
    console.log("=========================");
}   

function adicionarProtuto() {
    let nome = prompt("Nome do produto: ");
    let preco = parseFloat(prompt("Preço: R$ "));
    let quantidade = parseInt(prompt("Quantidade: "));

    estoque.push({ nome: nome, preco: preco, quantidade: quantidade });
    console.log("✅ Produto adicionado!");
}

function listarProdutos() {
    if (estoque.length === 0) {
        console.log("📭 Nenhum produto no estoque.");
        return;
    }

    console.log("\n--- PRODUTOS EM ESTOQUE ---");
    for (let i = 0; i < estoque.length; i++) {
        let p = estoque[i];
        console.log((i + 1) + " - " + p.nome + " | R$ " + p.preco + " | " + p.quantidade + "unid.");

        if (p.quantidade < 5) {
            console.log("  ⚠️ ESTOQUE BAIXO!");
        }
    }
}

function venderProduto() {
    listarProdutos();
    if (estoque.length === 0) return;

    let num = parseInt(prompt("Número do produto: ")) - 1;

    if (num >= 0 && num < estoque.length) {
        let p = estoque[num];
        let qtd = parseInt(prompt("Quantidade a vender: "));

    if (qtd <= p.quantidade) {
        p.quantidade -= qtd;
        let total = qtd * p.preco;
        console.log(`💰 Venda realizada! total: R$ ${total}`);

        if (p.quantidade === 0) {
            estoque.splice(num, 1);
            console.log("🗑️ Produto removido (estoque zerou)");
        }
    } else {
        console.log("❌ Quantidade insuficiente!");
    }
    } else {
        console.log("❌ Produto inválido!");
    }
}

function valorTotal() {
    let total = 0;
    for (let i = 0; i < estoque.length; i++) {
        total += estoque[i].preco * estoque[i].quantidade;
    }
    console.log(`💰 /Valor total do estoque: R$ ${total.toFixed(2)}`);
}

function main() {
    let opcao;

    do {
        mostrarMenu();
        opcao = prompt("Escolha: ");

        switch (opcao) {
            case "1": adicionarProtuto(); break;
            case "2": listarProdutos(); break;
            case "3": venderProduto(); break;
            case "4": valorTotal(); break;
            case "5": console.log("👋 Até mais!"); break;
            default: console.log("❌ Opção inválida");
        }
    } while (opcao !== "5");
}

main();