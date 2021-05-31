import app from "../config/app";

// DIZER HELLO WORLD
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
