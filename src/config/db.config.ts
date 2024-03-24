import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

export const connectDb = () => {
  mongoose
    .connect(uri)
    .then(() => console.log("Connected to database!"))
    .catch((err) => console.log(err));
};
