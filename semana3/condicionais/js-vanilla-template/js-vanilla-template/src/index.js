// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO //

// 1. //
/* O código recebe um input do usuário com um número,
   (em forma de string) depois converte para o tipo número,
   e com o condicional "if" ele testa se o resto da divisão
   do número por 2 é zero, retornando a mensagem de "Passou
   no teste." (ou seja, é um número par), ou retorna a
   mensagem "Não passou no teste." se o resto da divisão
   não for zero, indicando que o número informado é ímpar. */

// 2. //
/* a) O código serve para informar o usuário do preço
      de algumas frutas.

    b) A mensagem impressa no console será:
       "O preço da fruta maçã é R$ 2.25"

    c) Na retirada do "break" de pêra, o restante do
       bloco continua sendo executado, no caso o default.
       Acredito que o valor na mensagem será o do default:
       "O preço da fruta pêra é R$ 5" */

// 3. //
 /* a) A primeira linha declara uma variável global
       e a converte para número ao mesmo tempo em que 
       solicita um input do usuário.

    b) Se o usuário digitar o número 10, a mensagem no
       terminal será "Esse número passou no teste", mas
       se ele digitar o número -10, então nenhuma mensagem
       será retornada no terminal, pois não existe um "else"
       para o caso de números menores que zero.
       

    c) Não vai aparecer erro no console, mas a variável
       "mensagem" não vai aparecer se o console.log 
       estiver fora do escopo de onde ela foi criada. */



// EXERCÍCIOS DE ESCRITA DE CÓDIGO //

// 4. //

// Declaração da variável e conversão para número
/* const idade = Number(prompt("Qual a sua idade?")); */

// Condicional que checa em qual condição se enquadra a idade
/* if (idade >= 18) {
    console.log("Você pode dirigir.");
}
else {
    console.log("Você não pode dirigir.");
} */

// 5. //

// Declaração da variável
//const turno = prompt("Qual o turno que você estuda? informe M para matutino, V para vespertino e N para noturno");

// Condicional que checa o input do usuário e retorna
// uma mensagem personalizada de acordo com o turno
/*if (turno === "M" || turno === "m") {
    console.log("Bom dia!");
}
else if (turno === "V" || turno === "v") {
    console.log("Boa tarde!");
}
else if (turno === "N" || turno === "n") {
    console.log("Boa noite!");
}
else {
    console.log("Digite apenas M, V ou N.");
}*/

// 6. //

/*const turnoSwitch = prompt("Qual o turno que você estuda? informe M para matutino, V para vespertino e N para noturno");

switch (turnoSwitch) {
    case 'M':
        console.log("Bom dia!");
        break
    case 'm':
        console.log("Bom dia!");
        break
    case 'V':
        console.log("Boa tarde!");
        break
    case 'v':
        console.log("Boa tarde!");
        break
    case 'N':
        console.log("Boa noite!");
        break
    case 'n':
        console.log("Boa noite!");
        break
    default:
        console.log("Digite apenas M, V ou N.");
        break
}*/

// 7. //

const generoFilme = prompt("Qual o gênero do filme que você vai assistir?");
const preco = prompt("O preço do ingresso está abaixo de R$15.00? s/n");

if (generoFilme == "fantasia" && preco == "s") {
    console.log("Bom filme!");
}
else {
    console.log("Escolha outro filme :(");
}
