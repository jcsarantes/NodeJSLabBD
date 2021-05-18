/* 
 Carrega os módulos "somar", "subtrair", "multiplicar" e "dividir", 
 que estão nos arquivos ".js" (não é necessário colocar a extensão
 do arquivo). Esses módulos são guardados nas variáveis "somaFunc",
 "subFunc", "multiFunc", "divFunc".
*/
var somaFunc = require("./somar");
var subFunc = require("./subtrair");
var multiFunc = require("./multiplicar");
var divFunc = require("./dividir");

console.log(somaFunc(1, 2));
console.log(subFunc(10, 5));
console.log(multiFunc(100, 10));
console.log(divFunc(60, 3));

