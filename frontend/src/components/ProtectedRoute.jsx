import { Navigate } from "react-router"
import api from "../api/api";
import { useEffect, useState } from "react";


export const ProtectedRoute = ({ children }) => {
    // const token = localStorage.getItem("token")
    // if (!token) {
    //     return <Navigate to="/login" />
    // }
    const [isAuth, setIsAuth] = useState(null)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await api.get('/users/me')
                setIsAuth(true)
            } catch (error) {
                setIsAuth(false)
            }
        }
        checkAuth()
    }, [])
    //wait until auth checked

    if (isAuth === null) return <p>Loading ...</p>
    return isAuth ? children : <Navigate to="/login" />;
}