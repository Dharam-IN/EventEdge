import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DBNAME}`)
        console.info("Database Connected Succefully!")
    } catch (error) {
        console.error("Error Connecting to Database", error)
        process.exit(1)
    }
}

export default ConnectDB;