import express, { Request, Response } from "express";
import cors from "cors";
import { countries, country } from "./countries";

const app = express();

app.use(express.json());
app.use(cors());

// Endpoint 1: Get All Countries
app.get("/countries/all", (req: Request, res: Response) => {
  const result = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }));
  res.status(200).send(result);
});

// Endpoint 2: Get Country By Name/Capital/Continent
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

// Endpoint 3: Get Country By Id
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

// Endpoint 4: Update country (name/capital)
app.put("/countries/edit/:id", (req: Request, res: Response) => {
  const { name, capital } = req.body;
  let errorCode: number = 400;

  try {
    const countryIndex: number = countries.findIndex(
      (country) => country.id === Number(req.params.id)
    );

    if (countryIndex === -1) {
      errorCode = 404;
      throw new Error("Id doesn't exist");
    }

    if (!name && !capital) {
      throw new Error("Invalid Parameters");
    }

    if (name) {
      countries[countryIndex].name = name;
    }

    if (capital) {
      countries[countryIndex].capital = capital;
    }
    res.status(200).send("Country successfully updated");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.listen(3003, () => {
  console.log("Server is running at http://localhost:3003");
});
