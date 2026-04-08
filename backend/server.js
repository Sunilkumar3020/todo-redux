import dotenv from "dotenv"
import app from "./src/app.js"
import connectDB from "./src/config/db.js"

dotenv.config({ path: "./.env" })

const PORT = process.env.PORT || 5000;
const MONGODB_STRING = process.env.MONGODB_URL
const startServer = async () => {
    try {
        await connectDB(MONGODB_STRING)
        app.listen(PORT, () => {
            console.log("APP running on port", PORT)
        })
    } catch (error) {
        console.error(error)
    }
}

startServer()