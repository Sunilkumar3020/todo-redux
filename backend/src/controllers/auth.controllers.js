import User from "../models/user.models.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// register user controller
export const register = async (req, res) => {
    const { name, email, phone, password } = req.body;
    try {
        if (!name || !email || !phone || !password) {
            res.status(400).json({ message: "Please fill required fields." })
        }

        // check user exist or not

        const userExist = await User.findOne({ email })
        if (userExist) {
            res.status(400).json({ message: "User already exists" })
        }

        // hashed password
        const hashedPassword = await bcrypt.hash(password, 10)

        // create new user

        const newUser = await User.create({
            name,
            email,
            phone,
            password: hashedPassword

        })

        res.status(201).json({ message: "User created successfully" })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
}


//login user controller