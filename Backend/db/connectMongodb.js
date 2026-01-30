import mongoose from "mongoose";

let gfs;

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);

    // Drop the erroneous studentRef index if it exists
    try {
      await conn.connection.db.collection("users").dropIndex("studentRef_1");
      console.log("Dropped studentRef index");
    } catch (indexError) {
      console.log("studentRef index not found or already dropped");
    }

    // Set up GridFS bucket
    gfs = new mongoose.mongo.GridFSBucket(conn.connection.db, {
      bucketName: "uploads",
    });
  } catch (error) {
    console.error(`Error connection to mongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;
export { gfs };
