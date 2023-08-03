import mongoose from "mongoose";

let isConnected = false

export const connectTODB = async () => {
    mongoose.set("StrictQuery", true);

    if (isConnected) {
        console.log("Connected");
    } else {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: "bloggspot",
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            isConnected = true
            console.log("Database Connected");
        } catch (error) {
            console.log(error);
        }
    }
}