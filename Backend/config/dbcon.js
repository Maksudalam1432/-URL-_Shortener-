import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGODB CONNECT SUCCESFULLY");
  } catch (error) {
    console.log("mongodb connect failed");
  }
};
export default connectdb