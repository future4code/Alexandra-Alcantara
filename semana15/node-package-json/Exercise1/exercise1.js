// 1.
//a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//   Os parâmetros são acessados pela posição no array usando o process.argv[posição].

// b) Crie um programa que receba seu nome e sua idade e imprima no console "Olá, (Nome)! Você tem (sua idade) anos."
const nome = process.argv[2];
const idade = process.argv[3];

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
const nome2 = process.argv[2];
const idade2 = Number(process.argv[3]);
const idadeFutura = idade2 + 7;

console.log(
  `Olá, ${nome2}! Você tem ${idade2} anos. Em sete anos você terá`,
  idadeFutura,
  "anos."
);
