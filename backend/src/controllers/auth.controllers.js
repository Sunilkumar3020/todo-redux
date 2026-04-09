import User from "../models/user.models.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// register user controller
export const register = async (req, res) => {
    const { name, email, phone, password } = req.body;
    try {
        if (!name || !email || !phone || !password) {
            return res.status(400).json({ message: "Please fill required fields." })
        }

        // check user exist or not

        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(409).json({ message: "User already exists" })
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
        // console.error(error)
        const message = error.response?.data?.message || "Something went wrong"
        alert(message)
        // res.status(500).json({ message: "Server error" })
    }
}


//login user controller

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "All fields required" })
        }
        // find user

        const user = await User.findOne({ email });
        if (!user) {
            return res.send(400).json({ message: "Invalid credentials" })
        }

        // check password

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        // token generate

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
        res.status(200).json({
            message: "Login successful",
            token,
            uses: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
        // res.json({ token })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
}