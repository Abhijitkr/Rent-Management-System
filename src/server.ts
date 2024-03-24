import "dotenv/config";
import express from "express";
import { connectDb } from "./config/db.config";
import { addBill } from "./controller/bill.controller";
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/addBill", addBill);

connectDb();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
