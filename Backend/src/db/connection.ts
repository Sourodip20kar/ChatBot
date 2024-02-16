//use mongoos package to connect to the database
import {connect, disconnect} from "mongoose";
async function connect_to_DB(){
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error("Unable to connect to the database");
    }
}
async function disconnect_from_DB(){
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Unable to connect to the database");
    }
}
export {connect_to_DB,disconnect_from_DB};