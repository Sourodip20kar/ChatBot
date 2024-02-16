import app from "./app.js";
import { connect_to_DB } from "./db/connection.js";
/*import exp from 'constants';
import express from 'express';
import {config} from "dotenv";
config();
const app=express();
//middlewares
app.use(express.json());*/

//connections and listening
const PORT=process.env.PORT || 5000;
connect_to_DB()
.then(()=>{
    app.listen(PORT,()=>console.log("Server open and connected to DB"));
})
.catch((err)=>console.log(err));