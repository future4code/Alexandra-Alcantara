// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO //

// 1. //

/* a) Serão impressos os números 10 e 50.

   b) Acredito que como o "console.log" não faz parte da
      função, nada seria impresso na tela, a função é 
      chamada, mas não impressa.
*/

// 2. //

/* a) Pelo laço, acredito que serão impressos apenas os
      nomes nas posições 0 e 1 (Darvas e Caio).

   b) Com a mudança, a impressão seria "Amanda e Caio".
*/

// 3. //

/* O código verifica se um número é par, e se for, 
   ele eleva esse número à segunda potência  e o adiciona
   no arrayFinal, que também poderia ser chamado de 
   arraySegundaPotencia. No final o arraySegundaPotencia
   é retornado com return. */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO //


// 4. //

/* a) */

/*let dadosFunction = (array) => {
    console.log(array);
    return array.lenght;
}

const texto = dadosFunction(["Eu sou Alexandra", "tenho 31 anos", "moro em Fortaleza", "e sou estudante."]);
console.log(texto);*/

/* b) */

/*let suasInfos = (nome, idade, cidade, estudante) => {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante} estudante.`);
}

let nome = "Alê";
let idade = 31;
let cidade = "Interlaken";
let estudante = 1;

if (estudante) {
    estudante = "sou";
}
else {
    estudante = "não sou";
}

console.log(suasInfos(nome, idade, cidade, estudante));*/

// 5. //

/* a) */

/*function sumNumbers(num1,num2) {
    const sum = num1 + num2;
    return sum;
}

console.log(sumNumbers(20,11))*/

/* b) */
 
/*function maiorOuIgual(num1, num2) {
    if (num1 >= num2) {
        return true;
    }
    else {
        return false;
    }
}

console.log(maiorOuIgual(20, 11));*/

/* c) */

/*function recebeMensagem (texto) {
    for (let i = 0; i < 10; i++) {
        console.log(texto);
    }
}

recebeMensagem("It's me 10 times!");*/

// 6. //

/* a) */

/*const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

function recebeNumeros (arrayNumber) {
    console.log(`Este array contém ${arrayNumber.length} números`);
}

recebeNumeros(array);*/

/* b) */

/*function verificaSeEhPar (num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}*/

/*num = prompt("Que número gostaria de verificar?")
console.log(`O número ${num} é par?`, recebeNumeroDeNovo(num));*/

/* c) */

/*arrayPares = [];
arrayImpares = [];
numerosAleatorios = [2, 5, 8, 7, 1, 6, 9];

function contarNumPares (arrayNumeros) {
    for (thing of arrayNumeros) {
        if (thing % 2 == 0) {
            arrayPares.push(arrayNumeros);
        }
        else {
            arrayImpares.push(arrayNumeros);
        }
    }
    console.log(`O array ${numerosAleatorios} possui`, arrayPares.length, "números pares.");
    console.log(`O array ${numerosAleatorios} possui`, arrayImpares.length, "números ímpares.");
}

contarNumPares(numerosAleatorios);*/

/* d) */

/*arrayPares = [];
arrayImpares = [];
numerosAleatorios = [2, 5, 8, 7, 1, 6, 9];

function contarNumPares (arrayNumeros) {
    for (thing of arrayNumeros) {
        if (verificaSeEhPar (thing)) {
            arrayPares.push(arrayNumeros);
        }
        else {
            arrayImpares.push(arrayNumeros);
        }
    }
    console.log(`O array ${numerosAleatorios} possui`, arrayPares.length, "números pares.");
    console.log(`O array ${numerosAleatorios} possui`, arrayImpares.length, "números ímpares.");
} 

contarNumPares(numerosAleatorios);*/

// DESAFIOS //

// EXERCÍCIO 1 //

// 1. //

/*let lista = ["ovo", "pintinho", "galinha ", "galo"];

let recebeImprime = (thing) => {
    console.log(`O parâmetro é '${thing}' e está sendo impresso agora.`);
}*/

/*recebeImprime(lista);*/

// 2. //

/*let recebeDoisValores = (valor1, valor2) => {
    totalSoma = valor1 + valor2;
    recebeImprime(totalSoma);
}

recebeDoisValores(5, 10);*/

// EXERCÍCIO 2 //

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// a) //

arrayNumPares = [];

let recebeUmArray = (array) => {
    for (thing of array) {
        if (thing % 2 == 0) {
            arrayNumPares.push(array);
        }
    }
    console.log(arrayNumPares);
    /*for (let i = 0; i < arrayNumPares.length; i++) {
        newArray = thing * 2;
    } 
    console.log(`Este é o novo array: ${newArray}`);*/
}

recebeUmArray(numeros);

// b) //

// c) //

// e) //