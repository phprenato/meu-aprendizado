const http = require('http');

const produtos = [
    { id: 1, nome: "Arroz", preco: 5.50, quantidade: 10},
    { id: 2, nome: "Feijão", preco: 6.00, quantidade: 3},
    { id: 3, nome: "Macarrão", preco: 4.50, quantidade: 8 }
];

const servidor = http.createServer((req, res) =>{
    console.log("Requisição recebida", req.url);

    //Configura o cabeçalho para JSON
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8'});

    if (req.url === '/'){
        res.end(JSON.stringify({ mensagem: "API de produtos funcionando"}));

    } else if (req.url =='/produtos') {
        res.end(JSON.stringify(produtos));

    } else if (req.url.startsWith('/produtos/')) {
        //Exemplo: /produtos/1
        const id = parseInt(req.url.split('/')[2]);
        const produto = produtos.find(p => p.id === id);

        if (produto) {
            res.end(JSON.stringify(produto));
        } else {
            res.end(JSON.stringify({ erro: "Produto não encontrado" }));
        }

    } else {
        res.end(JSON.stringify({ erro: "Rota não encontrado"}));
    }
});

servidor.listen(3000, () => {
    console.log('API rodando em http://localhost:3000');
    console.log('Teste: http://localhost:3000/produtos');
    console.log('Test: http://localhost:3000/produtos/2');
});