import { Request, Response } from "express";
import Bill from "../model/bill.model";

// add a current bill
export const addBill = async (req: Request, res: Response) => {
  try {
    const { billingDate, currentBill } = req.body;

    const newBill = new Bill({
      billingDate,
      currentBill,
    });

    await newBill.save();
    return res.status(201).json({ newBill });
  } catch (error) {
    console.log("Error adding bill", error);
    return res.status(500).json({ error: "Failed to add bill" });
  }
};
