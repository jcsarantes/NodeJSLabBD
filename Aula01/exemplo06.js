// Carrega o módulo "http", que faz parte do Node.
var http = require("http");

/* 
 Abre um servidor HTTP na porta "8081", mas, ao acessar o servidor,
 via browser, ele ficará carregando infinitamente. Um servidor foi
 criado, mas, nada foi solicitado a ele.
*/
http.createServer().listen(8081);
console.log("Servidor executando..."); 