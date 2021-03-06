//Exercício 1

function inverteArray(array) {
  return array.reverse();
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   evenNum = [];
   array.forEach(number => {
      if (number % 2 === 0) {
         evenNum.push(number ** 2);
      }
   });
   return evenNum;
}

//Exercício 3

function retornaNumerosPares (array) {
   evenNum = [];
   array.forEach(number => {
      if (number % 2 === 0) {
         evenNum.push(number);
      }
   });
   return evenNum;
}

//Exercício 4

function retornaMaiorNumero(array) {
   const biggestNumber = Math.max(...array);
   return biggestNumber;
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length;
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleanOperations = [false, false, true, true, true];
   return booleanOperations;
}

//Exercício 7

function retornaNNumerosPares(n) {
   arrayNum = [];
   arrayEven = [];
   
   for (let index = 0; index < 10; index++) {
      arrayNum.push(Number(index));
   }

   arrayNum.forEach(number => {
      if (number % 2 === 0) {
         arrayEven.push(number);
      }
   });
   return arrayEven.slice(0, n);
}

// Exercício 8

function checaTriangulo(a, b, c) {
  if ((a === b) && (a === c) && (b === c)) {
     return 'Equilátero';
  }

  else if ((a === b) || (a === c) || (b === c)) {
   return 'Isósceles';
  }

  else {
   return 'Escaleno';
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let nums = [num1, num2];
   let subtracao = Math.abs(num1 - num2);
   let oMaiorNumero = Math.max(...nums);
   let oMenorNumero = Math.min(...nums);

   maiorDivisivelporMenor = oMaiorNumero % oMenorNumero === 0;

   return {
      maiorNumero: oMaiorNumero,
      maiorDivisivelporMenor: maiorDivisivelporMenor,
      diferenca: subtracao
   };
};

// Exercício 10

function segundoMaiorEMenor(array) {
   array.splice(array.indexOf(Math.max(...array)), 1);
   array.splice(array.indexOf(Math.min(...array)), 1);

   const segundoMaiorEMenor = [Math.max(...array), Math.min(...array)];
   
   return segundoMaiorEMenor;
};

//Exercício 11

function ordenaArray(array) {
   const len = array.length;
   for (let index = 0; index < len; index++) {
      for (let j = 0; j < len; j++) {
         const atual = array[j];
         const proximo = array[j + 1];
         if (array[j] > array[j + 1]) {
            array[j + 1] = atual;
            array[j] = proximo;
         }
      }     
   }
   return array;  
}

// Exercício 12

function filmeFavorito() {
   const filmeFav = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filmeFav;
}

// Exercício 13

function imprimeChamada() {
   const filmeFav = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel', 
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

   let concatenaAtores = "";
   for(let i = 0; i < filmeFav.atores.length; i++) {
      if (i === filmeFav.atores.length - 1) {
         concatenaAtores += filmeFav.atores[i];
      }
      else {
         concatenaAtores += filmeFav.atores[i] + ", ";
      }
   }
   return `Venha assistir ao filme ${filmeFav.nome}, de ${filmeFav.ano}, dirigido por ${filmeFav.diretor} e estrelado por ${concatenaAtores
   }.`;
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const perimetroCalc = 2 * (lado1 + lado2);
   const areaCalc = lado1 * lado2;

   return {
      largura: lado1,
      altura: lado2,
      perimetro: perimetroCalc,
      area: areaCalc
   }
}

// Exercício 15

function anonimizaPessoa(pessoa) {

   const nomeAnonimo = {
      ...pessoa,
      nome: 'ANÔNIMO'
   }

   return nomeAnonimo;
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const maiores = arrayDePessoas.filter((item) => {
      return item.idade >= 20
   })

   return maiores;
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const menores = arrayDePessoas.filter((item) => {
      return item.idade <= 18
   })

   return menores;
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const novoArray = array.map((item) => {
      return item * 2
   })
   
   return novoArray;
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  let novoArray = array.map((item) => {
   return (item * 2).toString();
   })
   return novoArray;
}

// Exercício 17, letra C

function verificaParidade(array) {
   let numStrings = array.map((item) => {
      if (item % 2 === 0) {
         return (`${item} é par`)
      }
      else {
         return (`${item} é ímpar`)
      }
   });
   return numStrings;
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   let autorizados = [];
   for (const item of pessoas) {
      if ((item.idade > 14) && (item.idade < 60) && (item.altura > 1.5)) {
         autorizados.push(item);
      }
   }
   return autorizados;
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   let naoAutorizados = [];
   for (const item of pessoas) {
      if ((item.idade < 14) || (item.idade > 60) || (item.altura < 1.5)) {
         naoAutorizados.push(item);
      }
   }
   return naoAutorizados;
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta() {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}