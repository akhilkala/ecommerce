import mongoose from "mongoose";

export default () => {
  const URI = process.env.MONGO_URI;
  if (!URI) throw new Error("Environment Invalid");

  mongoose.connect(URI, (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  });
};
