import { Request, Response } from "express";
import Payment from "../model/payment.model";

// add a payment
export const addPayment = async (req: Request, res: Response) => {
  try {
    const { paymentDate, paymentAmount, paymentMethod } = req.body;

    const newPayment = new Payment({
      paymentDate,
      paymentAmount,
      paymentMethod,
    });

    await newPayment.save();
    return res.status(201).json({ newPayment });
  } catch (error) {
    console.log("Error adding payment", error);
    return res.status(500).json({ error: "Failed to add payment" });
  }
};
