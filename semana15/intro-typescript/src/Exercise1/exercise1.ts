// a) Se um valor numérico for atribuído a uma variável
//    do tipo "string", o código mostra um erro informando que
//    o tipo "number" não é atribuível ao tipo "string".

// let minhaString: string = 2;

// b) Para que a variável aceite mais de um tipo, basta
//    usar o símbolo "|" (ou) e adicionar ao lado um outro
//    tipo.

// let meuNumero: number | string = 2;

// c) Criar objetos sem type e com type:

// Verboso
// const amelie: {
//   nome: string;
//   idade: number;
//   corFavorita: string;
// } = {
//   nome: "Amèlie",
//   idade: 4,
//   corFavorita: "laranja",
// };

// // Não-verboso
// type pessoa = {
//   nome: string;
//   idade: number;
//   corFavorita: string;
// };

// const ravioli: pessoa = {
//   nome: "Ravioli",
//   idade: 0.9,
//   corFavorita: "preta",
// };

// const dan: pessoa = {
//   nome: "Dan",
//   idade: 32,
//   corFavorita: "azul",
// };

// const aldenir: pessoa = {
//   nome: "Aldenir",
//   idade: 53,
//   corFavorita: "cinza",
// };

// d) Modificar o tipo do objeto para escolher apenas entre
//    as cores do arco-íris.

enum COR_FAVORITA {
  VERMELHO = "vermelho",
  LARANJA = "laranja",
  AMARELO = "amarelo",
  VERDE = "verde",
  AZUL = "azul",
  ANIL = "anil",
  VIOLETA = "violeta",
}

type pessoa = {
  nome: string;
  idade: number;
  corFavorita: COR_FAVORITA;
};

const ravioli: pessoa = {
  nome: "Ravioli",
  idade: 0.9,
  corFavorita: COR_FAVORITA.AZUL,
};

const dan: pessoa = {
  nome: "Dan",
  idade: 32,
  corFavorita: COR_FAVORITA.VERDE,
};

const aldenir: pessoa = {
  nome: "Aldenir",
  idade: 53,
  corFavorita: COR_FAVORITA.ANIL,
};
