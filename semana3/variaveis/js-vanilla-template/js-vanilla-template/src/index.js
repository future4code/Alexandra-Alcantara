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

// a) e b)
let nome;
let idade;

// c)
/* console.log(typeof nome, typeof idade);*/

// d)
/* O tipo impresso foi "undefined" para ambas as variáveis
porque elas foram declaradas sem um valor, então
não é possível saber qual o tipo delas. */

// e)
/* nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");*/

// f)
/* console.log(typeof nome, typeof idade);*/

/* Quando o usuário digita valores, são atribuídos 
"strings" para as variáveis, o número também é reconhecido
como "string" e agora o typeof das variáveis muda de
"undefined" para "string". */

// g)
/* console.log("Olá", nome, ",", "você tem", idade, "anos.")*/;
////// Espaço desnecessário antes da vírgula: pesquisar como corrigir. //////

// 2. //

let cor;
let comida;
let animal;
let filme;
let hobby;

/* cor = prompt("1. Qual a sua cor favorita?");
comida = prompt("2. Qual a sua comida preferida?");
animal = prompt("3. Qual o seu animal favorito?");
filme = prompt("4. Qual o seu filme favorito?");
hobby = prompt("5. Qual o seu hobby preferido?");

console.log("1. Qual a sua cor favorita? \nResposta:", cor);
console.log("2. Qual a sua comida preferida? \nResposta:", comida);
console.log("3. Qual o seu animal favorito? \nResposta:", animal);
console.log("4. Qual o seu filme favorito? \nResposta:", filme);
console.log("5. Qual o seu hobby preferido? \nResposta:", hobby);*/

// 3. //

let favFoods = ["strawberry", "brownie", "lasagna", "cake", "pamonha"];
let foodUser;

// a) Imprimindo o array completo:
// console.log(favFoods);

// b) Imprimindo mensagem com as comidas uma embaixo da outra:
/* console.log("Essas são as minhas comidas preferidas:", 
            "\n", favFoods[0], "\n", favFoods[1], 
            "\n", favFoods[2], "\n", favFoods[3], 
            "\n", favFoods[4]);*/

// c) Trocando a segunda comida pela do usuário:
/* foodUser = prompt("Qual a sua comida preferida?");

favFoods[1] = foodUser;

console.log("Essas são as minhas comidas preferidas:", 
            "\n", favFoods[0], "\n", favFoods[1], 
            "\n", favFoods[2], "\n", favFoods[3], 
            "\n", favFoods[4]);*/

// 4. //

let questions = ["Você está motivado hoje?", 
                 "Você está alimentado agora?", 
                 "Você quer brownie mesmo assim?"];

// a) Criando uma variável com valores booleanos:
let answers = ["True", "True", "True"];

// b) Imprimindo as perguntas seguidas pelas respostas:
console.log(questions[0], answers[0], "\n",
            questions[1], answers[1], "\n",
            questions[2], answers[2]);

////// THE END //////

        