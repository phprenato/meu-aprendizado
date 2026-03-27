let produto1 = "Arroz";
let produto2 = "Feijão";
let quantidadedeArroz = 2;
let quantidadedeFeijao = 4;
let precoArroz = 5.50;
let precoFeijao = 6.00;

let totalArroz = quantidadedeArroz * precoArroz;
let totalFeijao = quantidadedeFeijao * precoFeijao;
let totalCompra = totalArroz + totalFeijao;

console.log("Arroz:" , quantidadedeArroz, "x R$" , precoArroz, "= R$", totalArroz);
console.log("Feijão:" , quantidadedeFeijao, "x R$" , precoFeijao, "= R$", totalFeijao);
console.log("Total da compra: R$" , totalCompra);