import express from "express";
import { GetUserController, Login, Register } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { errorHandler } from "../errorhandler.js";
const authRouter = express.Router();

authRouter.post("/register",errorHandler(Register))
authRouter.post("/login",errorHandler(Login))
authRouter.get("/getUser",authMiddleware,errorHandler(GetUserController))

export default authRouter;