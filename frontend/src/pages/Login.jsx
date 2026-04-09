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
            const data = {
                email: form.email,
                password: form.password
            }

            const response = await api.post("/users/login", data)

            // save  token in localStorage

            localStorage.setItem("token", res.data.token)


            console.log(response)
            setForm({
                email: "",
                password: ""
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="max-w-4xl m-auto p-5">

            <h1 className="text-3xl mb-5 text-center">Login Page</h1>

            <form onSubmit={handleFormSubmit} className="flex flex-col">
                <input type="text" placeholder="Email" name="email" className="border border-gray-400 p-2 mb-3" value={form.email} onChange={handleInputChange} />
                <input type="password" name="password" placeholder="Password" className="border border-gray-400 p-2 mb-3" value={form.password} onChange={handleInputChange} />
                <button className="bg-green-700 p-2 text-2xl text-white cursor-pointer">Login</button>
            </form>


        </div>
    )
}