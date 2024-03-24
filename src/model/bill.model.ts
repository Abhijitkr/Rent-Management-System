import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
  billingDate: {
    type: Date,
    required: true,
  },
  currentBill: {
    type: Number,
    required: true,
  },
});

const Bill = mongoose.model("Bill", billSchema);

export default Bill;
