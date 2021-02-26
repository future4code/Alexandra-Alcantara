console.log("Bem vind@ ao jogo de Blackjack!");

let userCard1;
let userCard2;
let machineCard1;
let machineCard2;

if (confirm("Gostaria de iniciar uma nova rodada?")) {

   // COMPRANDO AS CARTAS DO USUÁRIO
   userCard1 = comprarCarta();
   userCard2 = comprarCarta();

   // FAZENDO A SOMA DOS PONTOS DO USUÁRIO
   let userSum = userCard1.valor + userCard2.valor;
   console.log("Usuário - cartas:", userCard1.texto, userCard2.texto, "- pontuação", userSum);

   // COMPRANDO AS CARTAS DO COMPUTADOR
   machineCard1 = comprarCarta();
   machineCard2 = comprarCarta();

   // FAZENDO A SOMA DOS PONTOS DO COMPUTADOR
   let machineSum = machineCard1.valor + machineCard2.valor;
   console.log("Computador - cartas:", machineCard1.texto, machineCard2.texto, "- pontuação", machineSum);

   if (userSum > machineSum) {
      console.log("O usuário ganhou!");
   }

   else if(machineSum > userSum) {
      console.log("O computador ganhou!")
   }

   else {
      console.log("Empate!")
   }

}

else {
   console.log("O jogo acabou.")
}