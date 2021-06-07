// Arquivo de configuração do Express
import express from "express";
import cors from "cors";
import { config } from "dotenv";

config();
const app = express();

app.use(express.json());
app.use(cors());

// Isso ativa o listen do server
app.listen(3003, () => {
  console.log("Server is running at http://localhost:3003");
});

export default app;
