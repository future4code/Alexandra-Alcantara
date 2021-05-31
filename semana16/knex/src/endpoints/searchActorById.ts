import app from "../config/app";
import { connection } from "../config/connection";
import { Request, Response } from "express";

// BUSCAR ATOR PELO ID
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
