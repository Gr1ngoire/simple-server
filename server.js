import express from "express";
import { config } from "dotenv";
config();

const PORT_To_LISTEN = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Health check");
});

app.listen(PORT_To_LISTEN);
