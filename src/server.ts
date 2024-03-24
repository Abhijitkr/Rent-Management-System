import "dotenv/config";
import express from "express";
import { connectDb } from "./config/db.config";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.post('/', )
connectDb();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
