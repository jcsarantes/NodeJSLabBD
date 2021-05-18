// Carrega o módulo "express", que faz parte do Node.
const express = require('express');

/* 
 A função "express", que vem do módulo "express", cria uma
 instância, uma cópia inteira do framework "express" para 
 a constante "app".
 */
const app = express();

/* 
 Comando suficiente para deixar o servidor executando, mas,
 tem que ser a última linha do código e executar uma função
 de callback (função que é executada sempre que algum evento
 acontece).
*/
app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081");
});