import express, { Request, Response } from "express";
import cors from "cors";
import { countries, country } from "./countries";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/countries/all", (req: Request, res: Response) => {
  const result = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }));
  res.status(200).send(result);
});

app.get("/countries/search", (req: Request, res: Response) => {
  let result: country[] = countries;

  if (req.query.name) {
    const name = req.query.name as string;
    result = result.filter((country) =>
      country.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (req.query.capital) {
    const capital = req.query.capital as string;
    result = result.filter((country) =>
      country.capital.toLowerCase().includes(capital.toLowerCase())
    );
  }

  if (req.query.continent) {
    const continent = req.query.continent as string;
    result = result.filter((country) =>
      country.continent.toLowerCase().includes(continent.toLowerCase())
    );
  }

  if (
    (req.query.name || req.query.capital || req.query.continent) &&
    result.length > 0
  ) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Not found :(");
  }
});

app.get("/countries/:id", (req: Request, res: Response) => {
  const result: country | undefined = countries.find(
    (country) => country.id === Number(req.params.id)
  );

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Country not found :(");
  }
});

// app.get("/countries/edit/id:", (req: Request, res: Response) => {
//   res.send("");
// });

app.listen(3003, () => {
  console.log("Server is running at http://localhost:3003");
});
