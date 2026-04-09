import { useState } from "react"
import api from "../api/api"
export default function Register() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: ''
    })


    const handleInputChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            console.log("form", form)
            const data = {
                name: form.name,
                email: form.email,
                phone: form.phone,
                password: form.password
            }
            const response = await api.post('/users/register', data)
            console.log(response.data.message)
            setForm({
                name: "",
                email: "",
                phone: "",
                password: ''
            })
        } catch (error) {
            // console.error(error)
            setError(error.response?.data?.message)
        }
        finally {
            setLoading(false)
        }
    }
    { error && <p>{error    }</p> }
    return (
        <div className="max-w-4xl m-auto p-5">
            <h1 className="text-3xl mb-5 text-center">User Register</h1>
            <form onSubmit={handleFormSubmit} className="flex flex-col">
                <input type="text" placeholder="Name" className="border border-gray-400 p-2 mb-3" value={form.name} name="name" onChange={handleInputChange} />
                <input type="email" name="email" placeholder="Email" className="border border-gray-400 p-2 mb-3" value={form.email} onChange={handleInputChange} />
                <input type="text" name="phone" placeholder="Phone" className="border border-gray-400 p-2 mb-3" value={form.phone} onChange={handleInputChange} />
                <input type="password" name="password" placeholder="Password" className="border border-gray-400 p-2 mb-3" value={form.password} onChange={handleInputChange} />
                <button className="bg-green-700 p-2 text-2xl text-white cursor-pointer">Register</button>
            </form>
        </div>
    )
}