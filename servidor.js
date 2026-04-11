const http = require('http');

const servidor = http.createServer((req, res) => {
    console.log("Recebi: " + req.url);

    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });

    if (req.url === '/') {
        res.end('<h1>Olá, mundo!</h1><p>Meu primeiro servidor Node.js!</p>');
    } else if (req.url === '/produtos') {
        res.end('<h1>Produtos</h1><ul><li>Arroz - R$ 5,50</li><li>Feijão - R$ 6,00</li><li>Macarrão - R$ 4,50</li></ul>');
    } else if (req.url === '/sobre') {
        res.end('<h1>Sobre mim</h1><p>Estudante de back-end em transição de carreira.</p>');
    } else {
        res.end('<h1>404</h1><p>Página não encontrada"</p>');
    }
});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});