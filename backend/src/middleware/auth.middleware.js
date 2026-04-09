import jwt from "jsonwebtoken"
export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: "No token" })
    }
    try {
        const decode = jwt.decode(token, process.env.JWT_SECRET_KEY)
        req.user = decode;
        next()
    } catch (error) {
        res.status(401).json({ message: "No token" })
    }
}