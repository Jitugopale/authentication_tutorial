import { prismaClient } from "../routes/index.js";
import { loginSchema, userSchema } from "../schema/user.js";
import jwt from "jsonwebtoken";
import { compareSync, hashSync } from "bcrypt";
import dotenv from "dotenv"
import { BadRequestException } from "../exceptions/bad-request.js";
import { ErrorCodes } from "../exceptions/root.js";
import { NotFoundException } from "../exceptions/not-found.js";
dotenv.config();

const JWT_SECRET = "677gghhfv";

//Register
export const Register = async (req, res, next) => {
  const userData = userSchema.parse(req.body);

  if (!userData.name || !userData.email || !userData.password) {
    return next (new BadRequestException("All fields are required",ErrorCodes.ALL_FEILDS_REQUIRED))
  }

  const alreadyExists = await prismaClient.user.findFirst({
    where: {
      email: userData.email,
    },
  });

  if(alreadyExists){
    return next(new BadRequestException("User already exists",ErrorCodes.USER_ALREADY_EXISTS))
  }

  const user = await prismaClient.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: hashSync(userData.password, 10),
    },
  });

  return res.status(200).json({
    message: "User created successfully",
    user,
  });
};

//Login

export const Login = async (req, res, next) => {
  const userData = loginSchema.parse(req.body);

  if (!userData.email || !userData.password) {
    return next (new BadRequestException("All fields are required",ErrorCodes.ALL_FEILDS_REQUIRED));
  }

  const user = await prismaClient.user.findFirst({
    where: {
      email: userData.email,
    },
  });

  if (!user) {
    return next(new NotFoundException("User not found",ErrorCodes.USER_NOT_FOUND));
  }

  const isPasswordCorrect = compareSync(userData.password, user.password);

  if (!isPasswordCorrect) {
    return next(new BadRequestException("Invalid password",ErrorCodes.INVALID_PASSWORD))
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return res.status(200).json({
    message: "User logged in successfully",
    user,
    token,
  });
};

//Get User

export const GetUserController = async (req, res) => {
    const user = await prismaClient.user.findFirst({
        where: {
            id: req.user.id,
        },
    });

    if(!user){
        return next(new NotFoundException("User not found",ErrorCodes.USER_NOT_FOUND))
  }

    return res.status(200).json({
        message: "User retrieved successfully",
        user,
    });
}

