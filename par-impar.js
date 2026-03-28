const prompt = require('prompt-sync')();

let numero = prompt("Digite um número: ");
numero =  parseInt(numero);

if (numero % 2 === 0) {
    console.log(numero + " é PAR!");
} else {
    console.log(numero + " é IMPAR!");
}