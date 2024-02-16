import { Router } from "express";
import userRouter from "./user_routes.js";
import chatRouter from "./chat_routes.js";
const appRouter = Router();
appRouter.use("/user", userRouter); //domain/api/v1/user             
appRouter.use("/chat", chatRouter); //domain/api/v1/chat
export default appRouter;
//# sourceMappingURL=index.js.map