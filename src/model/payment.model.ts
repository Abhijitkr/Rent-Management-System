import mongoose, { Schema } from "mongoose";

enum PaymentMethod {
  Cash = "Cash",
  Bank = "Bank",
}

interface IPayment {
  paymentDate: Date;
  paymentAmount: number;
  paymentMethod: PaymentMethod;
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

const Payment = mongoose.model<IPayment>("Payment", paymentSchema);

export default Payment;
