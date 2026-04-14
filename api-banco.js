const http = require('http');
const { MongoClient } = require('mongodb');

// SUA URL DO MONGODB (já está certinha!)
const uri = "mongodb+srv://phprenato_db_user:7it7pxhh53rER6p5@cluster0.oqqmtru.mongodb.net/?appName=Cluster0";

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
        console.error("❌ Erro ao conectar:", erro);
    }
}

const servidor = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    
    if (req.url === '/produtos' && req.method === 'GET') {
        const produtosLista = await db.collection('produtos').find({}).toArray();
        res.end(JSON.stringify(produtosLista));
        
    } else if (req.url.startsWith('/produtos/') && req.method === 'GET') {
        const id = parseInt(req.url.split('/')[2]);
        const produto = await db.collection('produtos').findOne({ id: id });
        
        if (produto) {
            res.end(JSON.stringify(produto));
        } else {
            res.end(JSON.stringify({ erro: "Produto não encontrado" }));
        }
        
    } else {
        res.end(JSON.stringify({ erro: "Rota não encontrada" }));
    }
});

async function iniciar() {
    await conectarBanco();
    servidor.listen(3000, () => {
        console.log('API rodando em http://localhost:3000');
        console.log('Teste: http://localhost:3000/produtos');
    });
}

iniciar();