import express from "express";

const PORT_To_LISTEN = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Health check");
});

app.listen(PORT_To_LISTEN);
