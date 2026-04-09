import { useState } from "react"
import api from "../api/api"
export default function Register() {

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
        try {
            const response = await api.post('/users/register', { form })
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h1>User Register</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Name" value={form.name} name="name" onChange={handleInputChange} />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleInputChange} />
                <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleInputChange} />
                <input type="text" name="password" placeholder="Password" value={form.password} onChange={handleInputChange} />
                <button>Register</button>
            </form>
        </>
    )
}