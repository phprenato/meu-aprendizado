require('dotenv').config();
const http = require('http');
const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
let db;

async function conectarBanco() {
    try {
        await client.connect();
        db = client.db("loja");
        console.log("✅ Conectado ao MongoDB!");

        const produtos = db.collection("produtos");
        const count = await produtos.countDocuments();

        if (count === 0) {
            await produtos.insertMany([
                { id: 1, nome: "Arroz", preco: 5.50, quantidade: 10 },
                { id: 2, nome: "Feijão", preco: 6.00, quantidade: 3 },
                { id: 3, nome: "Macarrão", preco: 4.50, quantidade: 8 }
            ]);
            console.log("✅ Produtos iniciais inseridos!");
        }
    } catch (erro) {
        console.error("❌ Erro fatal ao conectar:", erro);
        process.exit(1);
    }
}

const servidor = http.createServer(async (req, res) => {
    try {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

        res.setHeader('Content-Type', 'application/json; charset=utf-8');

        if (req.url === '/' && req.method === 'GET') {
            res.statusCode = 200;
            res.end(JSON.stringify({ mensagem: "API segura rodando" }));

        } else if (req.url === '/produtos' && req.method === 'GET') {
            const produtosLista = await db.collection('produtos').find({}).toArray();
            res.statusCode = 200;
            res.end(JSON.stringify(produtosLista));

        } else if (req.url.startsWith('/produtos/') && req.method === 'GET') {
            const idPart = req.url.split('/')[2];
            const id = parseInt(idPart);

            if (isNaN(id)) {
                res.statusCode = 400;
                res.end(JSON.stringify({ erro: "ID deve ser um número" }));
                return;
            }

            const produto = await db.collection('produtos').findOne({ id: id });

            if (produto) {
                res.statusCode = 200;
                res.end(JSON.stringify(produto));
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ erro: "Produto não encontrado" }));
            }

        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ erro: `Rota ${req.url} não encontrada` }));
        }
    } catch (erro) {
        console.error("❌ ERRO NÃO TRATADO:", erro);
        res.statusCode = 500;
        res.end(JSON.stringify({
            erro: "Erro interno no servidor",
            detalhe: process.env.NODE_ENV === 'development' ? erro.message : undefined
        }));
    }
});

async function iniciar() {
    await conectarBanco();
    servidor.listen(3000, () => {
        console.log('🛡️ API SEGURA rodando em http://localhost:3000');
        console.log('Teste: http://localhost:3000/produtos');
        console.log('Teste erro: http://localhost:3000/produtos/abc');
    });
}

iniciar();