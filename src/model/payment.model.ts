import { Schema, model } from "mongoose";

enum PaymentMethod {
  Cash = "Cash",
  Bank = "Bank",
}

interface IPaymentEntry {
  paymentDate: Date;
  paymentAmount: number;
  paymentMethod: PaymentMethod;
}

export interface IPayment {
  payments: IPaymentEntry[];
}

const paymentSchema: Schema = new Schema({
  paymentDate: {
    type: Date,
    required: true,
  },
  paymentAmount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: Object.values(PaymentMethod),
    required: true,
  },
});

const Payment = model<IPayment>("Payment", paymentSchema);

export default Payment;
