import { connection } from "./config/connection";
import app from "./config/app";
import { Request, Response } from "express";

// BUSCAR ATOR PELO NOME (Exercício 1/b)
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
          SELECT * FROM Actor WHERE name = '${name}'
      `);
  return result[0];
};

getActorByName("Ale")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// RETORNAR A QUANTIDADE DE ATRIZES OU ATORES (Exercício 1/c)
const getGenderAmount = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT COUNT (*) AS amount
        FROM Actor
        WHERE gender = '${gender}'
      `);
  const amount = result[0][0];
  return amount;
};

getGenderAmount("female")
  .then((amount) => {
    console.log(amount);
  })
  .catch((err) => {
    console.log(err);
  });

/* RECEBER UM SALÁRIO E ID E FAZER A ATUALIZAÇÃO DO 
  SALÁRIO DO ATOR EM QUESTÃO (Exercício 2/a) */
const updateSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

/* RECEBER UM ID E DELETAR O ATOR CORRESPONDENTE 
(Exercício 2/b) */
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};

/* RECEBER UM GENDER E RETORNAR A MÉDIA DOS SALÁRIOS DESSE
GÊNERO (Exercício 2/c) */
const showAvg = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as avg")
    .where({ gender });

  return result[0].average;
};

/* PESQUISAR ATOR PELO ID (Exercício 3/a) */
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
            SELECT * FROM Actor WHERE id = '${id}'
        `);
  return result[0][0];
};

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);
    res.status(200).send(actor);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});
