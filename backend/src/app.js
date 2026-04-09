import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js"
import { authMiddleware } from "./middleware/auth.middleware.js";

const app = express()

app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send('Hello')
})
app.use('/api/v1/users', authRouter)



export default app;