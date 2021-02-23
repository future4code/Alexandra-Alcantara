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
/* let numero;

numero = Number(prompt("Digite um número par: "));

console.log("Resto da divisão do seu número por 2: ", numero %= 2); */
// Se o número digitado for par, o resto da divisão por 2 sempre será "zero" 
// e se for ímpar, sempre será "um".

// 3. //
/* let listaDeTarefas = [];
let tarefa;

tarefa = (prompt("Informe a primeira tarefa que precisará realizar hoje: "));
listaDeTarefas.push(tarefa);

tarefa = (prompt("Agora informe a segunda: "));
listaDeTarefas.push(tarefa);

tarefa = (prompt("E agora a terceira: "));
listaDeTarefas.push(tarefa);

console.log(listaDeTarefas);

listaDeTarefas.splice((prompt("Insira um índice de 0 a 2: ")), 1);

console.log(listaDeTarefas); */

// .4 //
/* let nomeDoUsuario;
let emailDoUsuario;

nomeDoUsuario = prompt("Qual o seu nome?");
emailDoUsuario = prompt("Qual o seu e-mail?");

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!"); */

// DESAFIOS //

let grausCelsius;
let grausFahrenheit;
let kelvin;

grausCelsius = Number(grausCelsius);
grausFahrenheit = Number(grausFahrenheit);
kelvin = Number(kelvin);

// a. //
// grausFahrenheit = 77;
// let fahrenheitParaKelvin = (grausFahrenheit - 32) * (5/9) + 273.15;
// console.log(grausFahrenheit + "°F é igual a " + fahrenheitParaKelvin + "K.");

// b. //
// grausCelsius = 80;
// let celsiusParaFahrenheit = (grausCelsius * 1.8) + 32;
// console.log(grausCelsius + "°C é igual a " + celsiusParaFahrenheit + "°F.");

// c. //
// grausCelsius = 30;
// let celsiusParaFahrenheit = (grausCelsius * 1.8) + 32;
// let celsiusParaKelvin = grausCelsius + 273;
// console.log(grausCelsius + "°C é igual a " + celsiusParaFahrenheit + "°F e " + celsiusParaKelvin + "K.");

// d. //
// grausCelsius = Number(prompt("Insira graus Celsius para converter em Fahrenheit e Kelvin: "));
// let celsiusParaFahrenheit = (grausCelsius * 1.8) + 32;
// let celsiusParaKelvin = grausCelsius + 273;
// console.log(grausCelsius + "°C é igual a " + celsiusParaFahrenheit + "°F e " + celsiusParaKelvin + "K.");

// Converter de °C para °F:
// grausCelsius = prompt("Insira graus Celsius para converter em Fahrenheit: ");
// let celsiusParaFahrenheit = (grausCelsius * 1.8) + 32;
// console.log(grausCelsius + "°C é igual a " + celsiusParaFahrenheit + "°F.");

// Converter de °F para °C:
// grausFahrenheit = prompt("Insira graus Fahrenheit para converter em Celsius: ");
// let fahrenheitParaCelsius = (grausFahrenheit - 32) / 1.8;
// console.log(grausFahrenheit + "°F é igual a " + fahrenheitParaCelsius + "°C.");

// Converter de °F para K:
// grausFahrenheit = prompt("Insira graus Fahrenheit para converter em Kelvin: ");
// let fahrenheitParaKelvin = (grausFahrenheit - 32) * (5/9) + 273.15;
// console.log(grausFahrenheit + "°F é igual a " + fahrenheitParaKelvin + "K.");

// Converter de K para °F:
// kelvin = prompt("Insira Kelvin para converter em Fahrenheit: ");
// let kelvinParaFahrenheit = (kelvin - 273) * 1.8 + 32;
// console.log(kelvin + "K é igual a " + kelvinParaFahrenheit + "°F.");

// Converter de K para °C:
// kelvin = prompt("Insira Kelvin para converter em Celsius: ");
// let kelvinParaCelsius = kelvin - 273;
// console.log(kelvin + "K é igual a " + kelvinParaCelsius + "°C.");

// Converter de °C para K:
// grausCelsius = Number(prompt("Insira graus Celsius para converter em Kelvin: "));
// let celsiusParaKelvin = grausCelsius + 273;
// console.log(grausCelsius + "°C é igual a " + celsiusParaKelvin + "K.");
