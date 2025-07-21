import express from "express";
import dotenv from "dotenv";
import rootRouter from "./routes/index.js";
import { globalErrorHandler } from "./errorhandler.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Working");
})

app.use("/api",rootRouter)

app.use(globalErrorHandler);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})


