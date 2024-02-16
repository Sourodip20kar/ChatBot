import { Router } from "express";
import { getAllUsers,userSignup } from "../controllers/user_controllers.js";
import user from "../models/User.js";
const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup",userSignup);
export default userRouter;