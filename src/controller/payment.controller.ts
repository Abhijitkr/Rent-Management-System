import { Request, Response } from "express";
import Payment, { IPayment } from "../model/payment.model";

// Add a payment
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

// Edit payment
export const editPayment = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const editPayment: IPayment | null = await Payment.findByIdAndUpdate(
      { _id: id },
      body
    );
    res.status(200).json({ editPayment });
  } catch (error) {
    console.log("Error editing payment", error);
    return res.status(500).json({ error: "Failed to edit payment" });
  }
};
