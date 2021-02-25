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

/* const generoFilme = prompt("Qual o gênero do filme que você vai assistir?");
const preco = prompt("O preço do ingresso está abaixo de R$15.00? s/n");

if (generoFilme == "fantasia" && preco == "s") {
    console.log("Bom filme!");
}
else {
    console.log("Escolha outro filme :(");
} */

// DESAFIO 1 //

/*const generoFilme = prompt("Qual o gênero do filme que você vai assistir?");
const preco = prompt("O preço do ingresso está abaixo de R$15.00? s/n");

if (generoFilme == "fantasia" && preco == "s") {
    const snack = prompt("Qual snack você deseja comprar?");
    console.log("Bom filme!" + "\n" + "...com " + snack + ".");
}
else {
    console.log("Escolha outro filme :(");
}*/

// DESAFIO 2 //

const nome = prompt("Qual o seu nome, meu bem?");
const tipoJogo = prompt("Qual o tipo do jogo que gostaria de assistir? DO/IN");
const etapaJogo = prompt("Qual a etapa do jogo? SF/DT/FI");
const categoria = prompt("Qual a categoria? 1/2/3/4");
const qtdIngressos = Number(prompt("Qual a quantidade de ingressos?"));
const cat1SF = 1320;
const cat1DT = 660;
const cat1FI = 1980;
const cat2SF = 880;
const cat2DT = 440;
const cat2FI = 1320;
const cat3SF = 550;
const cat3DT = 330;
const cat3FI = 880;
const cat4SF = 220;
const cat4DT = 170;
const cat4FI = 330;

if (tipoJogo === "DO") {
    if (etapaJogo === "SF") {
        switch (categoria) {
            case "1":
                valorTotal = qtdIngressos * cat1SF;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: R$" + cat1SF + "\n" + "Valor total: R$" + valorTotal);
                break
            case "2":
                valorTotal = qtdIngressos * cat2SF;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: R$" + cat2SF + "\n" + "Valor total: R$" + valorTotal);
                break
            case "3":
                valorTotal = qtdIngressos * cat3SF;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: R$" + cat3SF + "\n" + "Valor total: R$" + valorTotal);
                break
            case "4":
                valorTotal = qtdIngressos * cat4SF;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: R$" + cat4SF + "\n" + "Valor total: R$" + valorTotal);
                break
            default:
                console.log("Ops, alguma informação não foi digitada de forma correta, tente novamente!")
                break
        }
    }

    if (etapaJogo === "DT") {
        switch (categoria) {
            case "1":
                valorTotal = qtdIngressos * cat1DT;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: R$" + cat1DT + "\n" + "Valor total: R$" + valorTotal);
                break
            case "2":
                valorTotal = qtdIngressos * cat2DT;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: R$" + cat2DT + "\n" + "Valor total: R$" + valorTotal);
                break
            case "3":
                valorTotal = qtdIngressos * cat3DT;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: R$" + cat3DT + "\n" + "Valor total: R$" + valorTotal);
                break
            case "4":
                valorTotal = qtdIngressos * cat4DT;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: R$" + cat4DT + "\n" + "Valor total: R$" + valorTotal);
                break
            default:
                console.log("Ops, alguma informação não foi digitada de forma correta, tente novamente!")
                break
        }
    }

    if (etapaJogo === "FI") {
        switch (categoria) {
            case "1":
                valorTotal = qtdIngressos * cat1FI;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: R$" + cat1FI + "\n" + "Valor total: R$" + valorTotal);
                break
            case "2":
                valorTotal = qtdIngressos * cat2FI;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: R$" + cat2FI + "\n" + "Valor total: R$" + valorTotal);
                break
            case "3":
                valorTotal = qtdIngressos * cat3FI;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: R$" + cat3FI + "\n" + "Valor total: R$" + valorTotal);
                break
            case "4":
                valorTotal = qtdIngressos * cat4FI;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: R$" + cat4FI+ "\n" + "Valor total: R$" + valorTotal);
                break
            default:
                console.log("Ops, alguma informação não foi digitada de forma correta, tente novamente!")
                break
        }
    }
}

if (tipoJogo === "IN") {
    if (etapaJogo === "SF") {
        switch (categoria) {
            case "1":
                valorTotal = (qtdIngressos * cat1SF)/4.10;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: $" + cat1SF/4.10 + "\n" + "Valor total: $" + valorTotal);
                break
            case "2":
                valorTotal = (qtdIngressos * cat2SF)/4.10;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: $" + cat2SF/4.10 + "\n" + "Valor total: $" + valorTotal);
                break
            case "3":
                valorTotal = (qtdIngressos * cat3SF)/4.10;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: $" + cat3SF/4.10 + "\n" + "Valor total: $" + valorTotal);
                break
            case "4":
                valorTotal = (qtdIngressos * cat4SF)/4.10;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: $" + cat4SF/4.10 + "\n" + "Valor total: $" + valorTotal);
                break
            default:
                console.log("Ops, alguma informação não foi digitada de forma correta, tente novamente!")
                break
        }
    }

    if (etapaJogo === "DT") {
        switch (categoria) {
            case "1":
                valorTotal = (qtdIngressos * cat1DT)/4.10;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: $" + cat1DT/4.10 + "\n" + "Valor total: $" + valorTotal);
                break
            case "2":
                valorTotal = (qtdIngressos * cat2DT)/4.10;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: $" + cat2DT/4.10 + "\n" + "Valor total: $" + valorTotal);
                break
            case "3":
                valorTotal = (qtdIngressos * cat3DT)/4.10;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: $" + cat3DT/4.10 + "\n" + "Valor total: $" + valorTotal);
                break
            case "4":
                valorTotal = (qtdIngressos * cat4DT)/4.10;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: $" + cat4DT/4.10 + "\n" + "Valor total: $" + valorTotal);
                break
            default:
                console.log("Ops, alguma informação não foi digitada de forma correta, tente novamente!")
                break
        }
    }

    if (etapaJogo === "FI") {
        switch (categoria) {
            case "1":
                valorTotal = (qtdIngressos * cat1FI)/4.10;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: $" + cat1FI/4.10 + "\n" + "Valor total: $" + valorTotal);
                break
            case "2":
                valorTotal = (qtdIngressos * cat2FI)/4.10;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: $" + cat2FI/4.10 + "\n" + "Valor total: $" + valorTotal);
                break
            case "3":
                valorTotal = (qtdIngressos * cat3FI)/4.10;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: $" + cat3FI/4.10 + "\n" + "Valor total: $" + valorTotal);
                break
            case "4":
                valorTotal = (qtdIngressos * cat4FI)/4.10;
                console.log("--- Dados da compra ---" + "\n" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo + "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" + "Quantidade de ingressos: " + qtdIngressos + "\n" + "\n" + "--- Valores ---" + "\n" + "\n" + "Valor do ingresso: $" + cat4FI/4.10 + "\n" + "Valor total: $" + valorTotal);
                break
            default:
                console.log("Ops, alguma informação não foi digitada de forma correta, tente novamente!")
                break
        }
    }
}