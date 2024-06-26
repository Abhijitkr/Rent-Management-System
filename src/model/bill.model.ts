import { Schema, model } from "mongoose";

export interface IBill {
  billingDate: Date;
  billingAmount: number;
}

const billSchema: Schema = new Schema({
  billingDate: {
    type: Date,
    required: true,
  },
  billingAmount: {
    type: Number,
    required: true,
  },
});

const Bill = model<IBill>("Bill", billSchema);

export default Bill;
