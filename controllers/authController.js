import { prismaClient } from "../routes/index.js";
import { loginSchema, userSchema } from "../schema/user.js";
import jwt from "jsonwebtoken";
import { compareSync, hashSync } from "bcrypt";
import dotenv from "dotenv"
dotenv.config();

const JWT_SECRET = "677gghhfv";

//Register
export const Register = async (req, res) => {
  const userData = userSchema.parse(req.body);

  if (!userData.name || !userData.email || !userData.password) {
    return res.status(400).json({ message: "All fields are required" });
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

export const Login = async (req, res) => {
  const userData = loginSchema.parse(req.body);

  if (!userData.email || !userData.password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await prismaClient.user.findFirst({
    where: {
      email: userData.email,
    },
  });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isPasswordCorrect = compareSync(userData.password, user.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid password" });
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

    return res.status(200).json({
        message: "User retrieved successfully",
        user,
    });
}

