/* Exercícios de interpretação de código:

1. No console.log(b) será imprimido o número "10"
   Depois é atribuído um novo valor à letra b e então o 
   console.log(a, b) irá imprimir os números "10, 5".

2. São atribuídos números apenas às variáveis "a" e "b",
   a variável "c" tem seu valor dado de acordo com o 
   valor de "a", então console.log(a, b, c) irá imprimir 
   os números "20, 10, 10", valores relacionados às últimas
   atribuições para cada variável.
*/

let nome;
let idade;

// console.log(typeof nome, typeof idade);

/* O tipo impresso foi "undefined" para ambas as variáveis
porque elas foram declaradas sem um valor, então
não é possível saber qual o tipo delas. */

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");

// console.log(typeof nome, typeof idade);

/* Quando o usuário digita valores, são atribuídos 
"strings" para as variáveis, o número também é reconhecido
como "string" e agora o typeof das variáveis muda de
"undefined" para "string". */

console.log("Olá", nome, ",", "você tem", idade, "anos.")
