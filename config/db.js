import mongoose from "mongoose";
mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    // const conn = await mongoose.connect("mongodb://0.0.0.0:27017/f-commerce");

    console.log("connected to mongodb database");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
// "dev": "nodemon server.js",
// "start": "node  server.js"
