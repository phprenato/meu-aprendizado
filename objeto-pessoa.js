let empresa = {
    nome: "Faça Com Sua Marca",
    cnpj: "54.314.221/0001-63",
    telefone: "85 999271661",
    cidade: "Cruz",
    ramo: "Confecção",
};

console.log("Nome da Empresa:", empresa.nome);
console.log("CNPJ:", empresa.cnpj);
console.log("Telefone de Contato:", empresa.telefone);
console.log("Localidade:", empresa.cidade);
console.log("Ramo:", empresa.ramo);

//Alterando um valor
empresa.telefone = "85 9 9927-1661";
console.log("\nNovo telefone:", empresa.telefone);

//Adicionando nova propriedade
empresa.email = "contato@empresa.com.br";
console.log("E-mail:", empresa.email);

console.log("\n---OBJETO ATUALIZADO---");
console.log(empresa);