import { Navigate } from "react-router";
export const ProtectedRoute = ({ children }) => {
    // const token = localStorage.getItem("token")
    // if (!token) {
    //     return <Navigate to="/login" />
    // }

    const isAuth = true; // optional check via api
    return isAuth ? children : <Navigate to="/login" />;
}