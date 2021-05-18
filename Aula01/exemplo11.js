const express = require('express');
const app = express();

app.get('/', function(req, res) {
    /* 
      __dirname: pega o caminho da aplicação
      "C:\Users\jana\WorkspaceNodeJSLabBD\Aula01"
    */
   res.sendFile(__dirname + '/html/index.html');
});

app.get('/sobre', function(req, res) {
   res.sendFile(__dirname + '/html/sobre.html');
});

app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081");
});