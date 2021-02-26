// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO //

// 1. //

/* O código está contando de 0 a 4 e vai imprimir esse
   intervalo no terminal (0, 1, 2, 3, 4), cada vez que 
   a execução passa pelo "for", é acrescentado +1 à 
   variável "valor" e a iteração só continua enquanto
   "i < 5". */

// 2. //

/* a) No console serão impressos os números do array 
      maiores que 18: (19, 21, 23, 25, 27, 30).

   b) Acessar o índice de cada elemento é possível usando
      for...in
 */

 // DESAFIO DE INTERPRETAÇÃO DE CÓDIGO //

 /* Os "asteriscos" estão funcionando como o "i",
    então acredito que serão impressos os números:
    0, 1, 2, 3. O usuário digita 4 e a iteração só
    acontece enquanto i < 4 (quantidadeTotal) e a cada
    execução, a "linha" ganha +1. */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO //

// 3. //

// a) //
/*const arrayOriginal = [10, 11, 21, 32, 53, 85, 138, 223, 361, 584, 945, 1529];
for (let i of arrayOriginal) {
    console.log(i);
}*/

// b) //
/*const arrayOriginal = [10, 11, 21, 32, 53, 85, 138, 223, 361, 584, 945, 1529];
for (let i of arrayOriginal) {
    console.log(i/10);
}*/

// c) //
/*const arrayOriginal = [10, 11, 21, 32, 53, 85, 138, 223, 361, 584, 945, 1529];
let novoArray = []; 

for (let i of arrayOriginal) {
    if (i % 2 === 0) {
        novoArray.push(i);
    }
}
console.log(novoArray);*/

// d) //
/*const arrayOriginal = [10, 11, 21, 32, 53, 85, 138, 223, 361, 584, 945, 1529];
let index = 0;

while (index < arrayOriginal.length) {
    console.log("O elemento do índex " + index + " é: " + arrayOriginal[index]);
    index++
}*/

// e) //
const arrayOriginal = [10, 11, 21, 32, 53, 85, 138, 223, 361, 584, 945, 1529];
let valorMaximo = 9;
let valorMinimo = 1600;

for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] > valorMaximo) {
        valorMaximo = arrayOriginal[i];
    }

    if (arrayOriginal[i] < valorMinimo) {
        valorMinimo = arrayOriginal[i];
    }
}

console.log("O maior número é " + valorMaximo + " e o menor é " + valorMinimo + ".");


