import { Router } from "express";
import { getAllUsers,userLogin,userSignup } from "../controllers/user_controllers.js";
import user from "../models/User.js";
import {validate,signupValidator, loginValidator} from "../utils/validation.js";
const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup",validate(signupValidator),userSignup);
userRouter.post("/login",validate(loginValidator),userLogin);
export default userRouter;