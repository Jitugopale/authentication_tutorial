import express from "express";
import { GetUserController, Login, Register } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/register",Register)
authRouter.post("/login",Login)
authRouter.get("/getUser",authMiddleware,GetUserController)

export default authRouter;