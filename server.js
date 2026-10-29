import express from 'express';
const app = express(); 
const PORT = 3000;

function criarMensagem (id,usuario,texto) {
    return {id,usuario: usuario.trim(), texto: texto.trim()}
}
//split2- array de objetos e função de consulta

const mensagem = [
     criarMensagem(1, "ana", 'olá turma'),
     criarMensagem(2, "lucas", 'servidor funciona'),
     criarMensagem(3, 'felipe', 'vamos conversar com o mensageiro local'),
];
function listaMensagem () {
    return mensagem;
}

function quantidadeDeMensagem () {
    return mensagem.length;
}

function buscarMensagem(id) {
    return mensagem.find(mensagem => mensagem.id === id)
}

app.get("/", (req, res) => {res.send("Server rodando! 🚀")});
app.get("/status", (req, res) => {res.json( {status: "Online", sprint: 2, total:quantidadeDeMensagem } )});
app.get("/sobre", (req, res) => {res.json( `Meu primeiro servidor Node.js com Express e ES modules. `)});    

app.get('/mensagens', (req, res) => res.json(listaMensagem ()))
app.get('/total-mensagens', (req, res) => res.json({total: quantidadeDeMensagem}));
app.get('/mensagens/:id', (req, res) => {
    const mensagem = buscarMensagem(Number(req.params.id));
    if (!mensagem)
        return res.status(404).json({erro: 'mensagem não encontrada'})
    res.json(mensagem);
});

 app.listen(PORT, () => console.log(`Servidor em http://localhost:${PORT}`))
 
 
 
 