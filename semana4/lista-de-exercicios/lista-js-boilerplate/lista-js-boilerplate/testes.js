
const isObject = (obj) => typeof obj === 'object' && obj !== null && !Array.isArray(obj)

const objectCompare = (obj1, obj2) => {
  if(!obj1 || !obj2 ){
    return false
  }
  if(Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  }
  for(let property in obj1) {
    if(Array.isArray(obj1[property])) {
      return arrayCompare(obj1[property], obj2[property])
    } else if (obj1[property] !== obj2[property]) {
      return false
    }
  }
  return true
}

const arrayCompare = (arr1, arr2) => {
  if(!arr1 || !arr2 ){
    return false
  }
  if(arr1.length !== arr2.length) {
    return false
  }
  for(let i = 0; i < arr1.length; i++) {
    if (isObject(arr1[i])) {
      return objectCompare(arr1[i], arr2[i])
    } else if (arr1[i] !== arr2[i]) {
        return false
      }
    }
  return true
}


// Teste exercício 1

function testEx1() {
  const numbers = [0, 8, 23, 16, 10, 15, 41, 12, 13];
  if(arrayCompare(inverteArray(numbers), [13, 12, 41, 15, 10, 16, 23, 8, 0])){
    console.log('%c Você acertou a questão número 1', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 1', 'color: #CD0000')
  }
}

testEx1();

//Teste exercício 2

function testEx2() {
  const numbers = [1, 2, 3, 4, 5, 6];
  if(arrayCompare(retornaNumerosParesElevadosADois(numbers), [4, 16, 36])) {
    console.log('%c Você acertou a questão número 2', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 2', 'color: #CD0000')
  }
}

testEx2();

//Teste exercício3

function testEx3() {
  const numbers = [1, 2, 3, 4, 5, 6];
  if(arrayCompare(retornaNumerosPares(numbers), [2, 4, 6])) {
    console.log('%c Você acertou a questão número 3', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 3', 'color: #CD0000')
  }
}

testEx3();

//Teste exercício 4

function testEx4() {
  if(retornaMaiorNumero([10, 18, 7, 56, 39]) === 56) {
    console.log('%c Você acertou a questão número 4', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 4', 'color: #CD0000')
  }
}

testEx4();
//Teste exercício 5

function testEx5() {
  const array = [1, 2, 3, 4, 5, 6];
  if(retornaQuantidadeElementos(array) === 6) {
    console.log('%c Você acertou a questão número 5', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 5', 'color: #CD0000')
  }
}

testEx5();

// Teste exercício 6

function testEx6() {
  const output = [false, false, true, true, true]
  if(arrayCompare(retornaExpressoesBooleanas(), output)) {
    console.log('%c Você acertou a questão número 6', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 6', 'color: #CD0000')
  }
}

testEx6()
// Teste exercício 7

function testEx7() {
  const n = 5
  if(arrayCompare(retornaNNumerosPares(n), [ 0, 2, 4, 6, 8 ])) {
    console.log('%c Você acertou a questão número 7', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 7', 'color: #CD0000')
  }
}

testEx7();

// Teste exercício 8

function testEx8() {
  const tests = [false, false, false]
  if (checaTriangulo(2, 3, 4) === 'Escaleno') {
      tests[0] = true
  }
  if (checaTriangulo(20, 20, 20) === 'Equilátero') {
      tests[1] = true
  }
  if (checaTriangulo(10, 10, 20) === 'Isósceles') {
      tests[2] = true
  }

  for (let test of tests) {
    if (test === false) {
        console.log('%c Você errou a questão número 8', 'color: #CD0000')
        return
    }
  }

  console.log('%c Você acertou a questão número 8', 'color: #00FF00')
}

testEx8();

// Teste exercício 9
//problema: nome das propriedades dos objetos devem ser idênticas
function testEx9() {
  const output =  { maiorNumero: 30, maiorDivisivelporMenor: true, diferenca: 15 }
  if(objectCompare(comparaDoisNumeros(15, 30), output )) {
    console.log('%c Você acertou a questão número 9', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 9', 'color: #CD0000')
  }
}

testEx9();

// Teste exercício 10

function testEx10() {
  const output = [50, 2]
  const array = [-1, 2, 34, 26, 15, 50, 46, 102]
  if (arrayCompare(segundoMaiorEMenor(array), output)) {
    console.log('%c Você acertou a questão número 10', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 10', 'color: #CD0000')
  }
}

testEx10();

// Teste exercício 11

function testEx11() {
  const array = [20, 13, -1, 2, 5, 49, -40, 10, 70, 5]
  const output = [-40, -1, 2, 5, 5, 10, 13, 20, 49, 70]

  if (arrayCompare(ordenaArray(array), output)) {
    console.log('%c Você acertou a questão número 11', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 11', 'color: #CD0000')
  }
}

testEx11()

// Teste Exercício 12

function testEx12() {
  const output = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }

  if (objectCompare(filmeFavorito(), output)) {
    console.log('%c Você acertou a questão número 12', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 12', 'color: #CD0000')
  }

}

testEx12()

// Teste exercício 13

function testEx13() {
  const output = 'Venha assistir ao filme O Diabo Veste Prada, de 2006, dirigido por David Frankel e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci.'
  
  if (imprimeChamada() === output) {
    console.log('%c Você acertou a questão número 13', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 13', 'color: #CD0000')
  }
  
}

testEx13()

// Teste exercício 14

function testEx14() {
  const output = {
      largura: 10,
      altura: 20,
      perimetro: 60,
      area: 200
  }

  if (objectCompare(criaRetangulo(10, 20), output)) {
    console.log('%c Você acertou a questão número 14', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 14', 'color: #CD0000')
  }
}

testEx14()

// Teste exercício 15

function testEx15() {
  const output = {
    nome: "ANÔNIMO",
    idade: 25,
    email: "astrodev@future4.com.br",
    endereco: "Rua do Futuro, 4"
  }

  const pessoa = {
    nome: "Astrodev",
    idade: 25,
    email: "astrodev@future4.com.br",
    endereco: "Rua do Futuro, 4"
  }

  if(objectCompare(anonimizaPessoa(pessoa), output)) {
    console.log('%c Você acertou a questão número 15', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 15', 'color: #CD0000')
  }
}

testEx15();

// Teste exercício 16A

function testEx16A() {
  const array = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 } 
  ]

  const output = [
    { nome: "Pedro", idade: 20 },
    { nome: "Artur", idade: 89 }
  ]

  if (arrayCompare(maioresDe18(array), output)) {
    console.log('%c Você acertou a questão número 16A', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 16A', 'color: #CD0000')
  }
}

testEx16A()

// Teste exercício 16B

function testEx16B() {
  const array = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 } 
  ]

  const output = [
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 }
  ]

  if (arrayCompare(menoresDe18(array), output)) {
    console.log('%c Você acertou a questão número 16B', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 16B', 'color: #CD0000')
  }
}

testEx16B()

// Teste exercício 17A

function testEx17A() {
  const array = [-1, 1, 2, 5, 25, 4]
  const output = [-2, 2, 4, 10, 50, 8]

  if (arrayCompare(multiplicaArrayPor2(array), output)) {
    console.log('%c Você acertou a questão número 17A', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 17A', 'color: #CD0000')
  }

}

testEx17A()

// Teste exercício 17B

function testEx17B() {
  const array = [-1, 1, 2, 5, 25, 4]
  const output = ["-2", "2", "4", "10", "50", "8"]

  if (arrayCompare(multiplicaArrayPor2S(array), output)) {
    console.log('%c Você acertou a questão número 17B', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 17B', 'color: #CD0000')
  }
}

testEx17B()

// Teste exercício 17C

function testEx17C() {
  const array = [0, 1, 2, 5, 25, 4]
  const output = ["0 é par", "1 é ímpar", "2 é par", "5 é ímpar", "25 é ímpar", "4 é par"]

  if (arrayCompare(verificaParidade(array), output)) {
    console.log('%c Você acertou a questão número 17C', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 17C', 'color: #CD0000')
  }
}

testEx17C()

// Teste exercício 18 - A

function textEx18A() {
  const output = [{nome: "Pedro", idade: 15, altura: 1.9}, {nome: "Luciano", idade: 22, altura: 1.8} ]
  if(arrayCompare(retornaPessoasAutorizadas(), output)) {
    console.log('%c Você acertou a questão número 18A', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 18A', 'color: #CD0000')
  }
}

textEx18A();

//Teste exercício 18 - B

function testEx18B() {
   const output = [
    { nome: "Paula", idade: 12, altura: 1.8},
    { nome: "João", idade: 20, altura: 1.3},
    { nome: "Artur", idade: 10, altura: 1.2},
    { nome: "Soter", idade: 70, altura: 1.9}
  ]
  if(arrayCompare(retornaPessoasNaoAutorizadas(), output)) {
    console.log('%c Você acertou a questão número 18B', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 18B', 'color: #CD0000')
  }
}

testEx18B()

// Teste exercício 19

function testEx19() {

  const output = [
    "Olá, Sr. João. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia 01/10/2019. Por favor, acuse o recebimento deste-email.",
    "Olá, Sr. Pedro. Infelizmente sua consulta marcada para o dia 02/10/2019 foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.",
    "Olá, Sra. Paula. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia 03/11/2019. Por favor, acuse o recebimento deste-email.",
    "Olá, Sra. Márcia. Infelizmente sua consulta marcada para o dia 04/11/2019 foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la."
    ];

  if(arrayCompare(retornaEmailConsulta(), output)) {
    console.log('%c Você acertou a questão número 19', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 19', 'color: #CD0000')
  }
}

testEx19();

// Teste exercício 20

function testEx20() {
  const output =  [
    { cliente: 'João', saldoTotal: 400, compras: [ 100, 200, 300 ] },
    { cliente: 'Paula', saldoTotal: 6260, compras: [ 200, 1040 ] },
    { cliente: 'Pedro', saldoTotal: -3340, compras: [ 5140, 6100, 100, 2000 ] },
    { cliente: 'Luciano', saldoTotal: -1900, compras: [ 100, 200, 1700 ] },
    { cliente: 'Artur', saldoTotal: 1300, compras: [ 200, 300 ] },
    { cliente: 'Soter', saldoTotal: 1200, compras: [] }
 ]
  if(arrayCompare(atualizaSaldo(), output)) {
    console.log('%c Você acertou a questão número 20', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 20', 'color: #CD0000')
  }
}

testEx20()