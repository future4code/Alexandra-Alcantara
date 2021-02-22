// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO //

/*  1. No console.log(b) será imprimido o número "10"
    Depois é atribuído um novo valor à letra b e então o 
    console.log(a, b) irá imprimir os números "10, 5".

    2. São atribuídos números apenas às variáveis "a" e "b",
    a variável "c" tem seu valor dado de acordo com o 
    valor de "a", então console.log(a, b, c) irá imprimir 
    os números "20, 10, 10", valores relacionados às últimas
    atribuições para cada variável. */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO //

// 1. //

// let nome;
// let idade;

// console.log(typeof nome, typeof idade);

/* O tipo impresso foi "undefined" para ambas as variáveis
porque elas foram declaradas sem um valor, então
não é possível saber qual o tipo delas. */

// nome = prompt("Qual o seu nome?");
// idade = prompt("Qual a sua idade?");

// console.log(typeof nome, typeof idade);

/* Quando o usuário digita valores, são atribuídos 
"strings" para as variáveis, o número também é reconhecido
como "string" e agora o typeof das variáveis muda de
"undefined" para "string". */

//console.log("Olá", nome, ",", "você tem", idade, "anos.");
////// Espaço desnecessário antes da vírgula: pesquisar como corrigir. //////

// 2. //

let cor;
let comida;
let animal;
let filme;
let hobby;

cor = prompt("1. Qual a sua cor favorita?");
comida = prompt("2. Qual a sua comida preferida?");
animal = prompt("3. Qual o seu animal favorito?");
filme = prompt("4. Qual o seu filme favorito?");
hobby = prompt("5. Qual o seu hobby preferido?");

console.log("1. Qual a sua cor favorita? \nResposta:", cor);
console.log("2. Qual a sua comida preferida? \nResposta:", comida);
console.log("3. Qual o seu animal favorito? \nResposta:", animal);
console.log("4. Qual o seu filme favorito? \nResposta:", filme);
console.log("5. Qual o seu hobby preferido? \nResposta:", hobby);




