const prompt = require('prompt-sync')();

let idade = prompt("Qual a sua idade?");
idade = parseInt(idade);

if (idade >= 18) {
    console.log("Você é maior de idade!");
    } else {
    console.log("Você é menor de idade!");
    }