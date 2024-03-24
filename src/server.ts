import "dotenv/config";
import express from "express";
import { connectDb } from "./config/db.config";
import { addBill, editBill } from "./controller/bill.controller";
import { addPayment, editPayment } from "./controller/payment.controller";
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/addBill", addBill);
app.put("/editBill/:id", editBill);
app.post("/addPayment", addPayment);
app.put("/editPayment/:id", editPayment);

connectDb();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
