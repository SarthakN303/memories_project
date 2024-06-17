import mongoose from "mongoose";

const connectToMongo = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database is connected"))
    .catch((error) => console.log(error.message));
};

export default connectToMongo;
