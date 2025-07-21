import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UnauthorizedException } from "../exceptions/unauthorized.js";
import { ErrorCodes } from "../exceptions/root.js";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("auth-token");

    if (!token){
      return next(new UnauthorizedException("Unauthorized",ErrorCodes.UNAUTHORIZED));
    }

    const user = jwt.verify(token, JWT_SECRET);
    if (!user) {
      return next(new UnauthorizedException("Unauthorized",ErrorCodes.UNAUTHORIZED));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new UnauthorizedException("Unauthorized",ErrorCodes.UNAUTHORIZED));
  }
};
