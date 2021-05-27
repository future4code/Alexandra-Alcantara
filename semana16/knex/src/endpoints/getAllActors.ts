import app from "../config/app";
import { connection } from "../config/connection";
import { Request, Response } from "express";

// TRAZER A LISTA DE ATORES
app.get("/actors", async (req, res) => {
  try {
    const result = await connection.raw(`
                SELECT * FROM Actor
            `);
    res.send(result[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("An unexpected error occurred");
  }
});
