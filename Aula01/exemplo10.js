const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("Seja bem-vindo a minha app!");
});

app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081");
});