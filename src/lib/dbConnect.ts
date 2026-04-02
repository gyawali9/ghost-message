import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const Connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (Connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    Connection.isConnected = db.connections[0].readyState;
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Error connecting to database", error);
    process.exit(1);
  }
}
export default dbConnect;
