import express from "express";
import { login, logout, register } from "../controllers/auth.controllers.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)


// protected route

router.get('/dashboard', authMiddleware, (req, res)=>{
    res.json({message: "Welcome to dashboard"})
})

export default router;