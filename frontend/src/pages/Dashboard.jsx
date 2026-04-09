import { useEffect } from "react"
import api from "../api/api"


export default function Dashboard() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get('/users/dashboard')
                console.log(res.data)
            } catch (error) {
                console.error(error)
            }
        };
        fetchData()
    }, [])
    return (
        <>
            <h1>Dashboard Page</h1>
        </>
    )
}