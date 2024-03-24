import { Request, Response } from "express";
import Bill, { IBill } from "../model/bill.model";

// Add a current bill
export const addBill = async (req: Request, res: Response) => {
  try {
    const { billingDate, billingAmount } = req.body;

    const newBill = new Bill({
      billingDate,
      billingAmount,
    });

    await newBill.save();
    return res.status(201).json({ newBill });
  } catch (error) {
    console.log("Error adding bill", error);
    return res.status(500).json({ error: "Failed to add bill" });
  }
};

// Edit bill
export const editBill = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const editBill: IBill | null = await Bill.findByIdAndUpdate(
      { _id: id },
      body
    );
    res.status(200).json({ editBill });
  } catch (error) {
    console.log("Error editing bill", error);
    return res.status(500).json({ error: "Failed to edit bill" });
  }
};
