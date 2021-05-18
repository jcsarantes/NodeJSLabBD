const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("Seja bem-vindo a minha app!");
});

app.get('/sobre', function(req, res) {
    res.send("Minha página Sobre.");
});

app.get('/blog', function(req, res) {
    res.send('Seja bem-vindo ao meu Blog!');
});

app.get('/ola/:nome/:cargo/:cor', function(req, res) {
    // A função "send" só pode ser chamada uma vez.
    res.send('<h1>Olá, ' +req.params.nome + '</h1><h2>Seu cargo é: ' + 
    req.params.cargo + '</h2><h3>Sua cor favorita é: ' + 
    req.params.cor + '</h3>');
});

app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081");
});