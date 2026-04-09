import jwt from "jsonwebtoken"
export const authMiddleware = (req, res, next) => {
    // const token = req.headers.authorization?.split(' ')[1]
    // if (!token) {
    //     return res.status(401).json({ message: "No token" })
    // }
    // try {
    //     const decode = jwt.decode(token, process.env.JWT_SECRET_KEY)
    //     req.user = decode;
    //     next()
    // } catch (error) {
    //     res.status(401).json({ message: "No token" })
    // }

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Not authorized" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = decoded;
        next()
    } catch (error) {
        console.error(error)
        res.status(401).json({ message: "Invalid token" })
    }
}