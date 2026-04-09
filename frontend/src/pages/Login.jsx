import { useState } from "react"
import api from "../api/api"

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post("/users/login", { form })
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>

            <h1>Login Page</h1>

            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Email" name="email" value={form.email} onChange={handleInputChange} />
                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleInputChange} />
                <button>Login</button>
            </form>


        </>
    )
}