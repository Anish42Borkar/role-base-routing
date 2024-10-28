import mongoose from "mongoose";

async function connectDB() {
  await mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING!, {})
    .then((res) => {
      console.log(res.connection.host);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default connectDB;
