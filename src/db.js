import { connect,set } from "mongoose";

//uri imports constants
import { MONGODB_URI } from "./config";

export const connectDB = async () => {
    set("strictQuery", false);
    try {
        await connect(MONGODB_URI);
        console.log("Connection succesful");
    } catch (error) {
        console.log(error)
    }
    
}

