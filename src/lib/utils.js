
const {default:mongoose}=require("mongoose")

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("use exisiting connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
