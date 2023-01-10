import mongoose from "mongoose";

const Connection = async () => {
    mongoose.set('strictQuery', false);

    try{
        await mongoose.connect("mongodb://localhost:27017/curd-app");
        console.log("Connection Successfully Done.");
    }
    catch(error){
        console.log("Error While Connecting to the Database");
    }
}

export default Connection;