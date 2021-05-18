// Carrega o módulo "http", que faz parte do Node.
var http = require("http");

/* 
 A função "createServer" tem um outra função chamada de callback,
 que recebe 2 parâmetros (requisição e resposta).
*/
http.createServer(function (req, res) {
    // A função "end" serve para enviar uma msg.
    res.end("Hello World! Welcome to my website!");
}).listen(8081);
console.log("Servidor executando..."); 
