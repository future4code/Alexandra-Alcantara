import app from "../config/app";
import { connection } from "../config/connection";
import { Request, Response } from "express";

// INCLUSÃO DE ATORES
app.post("/actors", async (req: Request, res: Response) => {
  try {
    await connection.raw(`
              INSERT INTO Actor (id, name, salary, birth_date, gender)
              VALUES(
                  "${req.body.id}",
                  "${req.body.name}",
                   ${req.body.salary},
                  "${req.body.birthDate}",
                  "${req.body.gender}"
              );
          `);
    res.status(201).send("Actor created!");
  } catch (error) {
    if (error.sqlMessage.includes("gender")) {
      res.send("Invalid gender. Valid values are 'female' and 'male'");
    }
    res.status(500).send("Internal server error");
  }
});
