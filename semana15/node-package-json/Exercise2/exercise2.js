// 2. Aplicação Node calculadora básica com 2 valores numéricos:
const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
const sum = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;

switch (operation) {
  case "sum":
    console.log(`O resultado da soma é: ${sum}`);
    break;
  case "sub":
    console.log(`O resultado da subtração é: ${sub}`);
    break;
  case "mult":
    console.log(`O resultado da multiplicação é: ${mult}`);
    break;
  case "div":
    console.log(`O resultado da divisão é: ${div}`);
    break;
}
