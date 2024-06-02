import mongoose from "mongoose";

async function ConnectDB(){ 
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected");
    } catch (error) {
        console.log("Error in db", error)
    }
}
