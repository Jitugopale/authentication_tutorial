import {z} from "zod";

export const userSchema = z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().min(6)
})

export const loginSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})