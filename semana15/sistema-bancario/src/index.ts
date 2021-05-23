import express, { Request, Response } from "express";
import cors from "cors";
import { accounts } from "./accounts";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server running at http://localhost:3003");
});
