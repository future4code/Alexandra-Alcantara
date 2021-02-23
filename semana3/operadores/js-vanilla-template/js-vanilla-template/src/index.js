// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO //

// 1. //

/* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2  
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // b. true

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) // c. false

console.log("e. ", typeof resultado) // d. boolean
*/

// 2. //

/* let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. Erro?

array[i+1] = 19
console.log('e. ', array) // e. Não sei

const valor = array[i+6]
console.log('f. ', valor) // f. array[i+6]
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO //

// 1. //
/* let idadeUser;
let idadeFriend;

idadeUser = Number(prompt("Qual a sua idade?"));
idadeFriend = Number(prompt("Qual a idade do seu melhor amigo?"));

let idadeMaior = idadeUser > idadeFriend;
let diferenca = idadeUser - idadeFriend;

console.log("Sua idade é maior que a do seu melhor amigo? " + idadeMaior);
console.log("Diferença de idade: " + diferenca); */

// 2. //
let numero;

numero = Number(prompt("Digite um número par: "));

console.log("Resto da divisão do seu número por 2: ", numero %= 2);
/* Se o número digitado for par, o resto da divisão por 2 sempre será "zero" 
e se for ímpar, sempre será "um". */


