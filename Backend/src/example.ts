/*


//Setup Node, Express app with typescript
import exp from 'constants';
import express from 'express';
const app=express();
//new route
//Types of request:-
//1. GET
//2. POST
//3. PUT
//4. DELETE
/*app.get("/hello",(req,res,next)=>{
    return res.send("Hello World");
});*/
//app.use(express.json());
/*app.post("/hello",(req,res,next)=>{
    console.log(req.body.name);
    return res.send("Hello World");
});*/
/*app.put("/hello",(req,res,next)=>{
    console.log(req.body.name);
    return res.send("Hello World");
});*/
/*app.delete("/hello",(req,res,next)=>{
    console.log(req.body.name);
    return res.send("Hello World");
});*/
//Dynamic route
//app.delete("/user/:id",(req,res,next)=>{
  //  console.log(req.params.id);
    //return res.send("Hello World");
//});
//(req,res,next) these are the callback parameters
/*req:- if the client or frontend sends any data to the server then it will be stored in req
res:- if the server sends any data to the client or frontend then it will be stored in res
next:- it is used to call the next middleware function in the middleware stack
*/
// /hello is a static route
//app.listen(5000,()=>console.log("Server is running on port 5000"));