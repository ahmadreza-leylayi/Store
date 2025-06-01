'use client'
import Container from '@/components/Container'
// import axios from 'axios'
import Cookie from "js-cookie"
import { redirect } from 'next/navigation'

export default function Login() {

    const handleSubmit = () => {
        // const data = axios({
        //     method: 'post',
        //     url: '/login',
        //     data: {
        //         username: username,
        //         password: password
        //     }
        // })

        const response = {
            token: "ahmadrezaleylayi321321321",
            expire: 7,
        }

        Cookie.set("token", response.token, { expires: response.expire })
        redirect('/dashboard')
    }

    return (
        <Container>
            <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-white">
                <h1 className="text-4xl font-bold text-center text-gray-800 font-serif">Login</h1>
                <div className="w-full max-w-sm space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full px-4 bg-orange-50 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 bg-orange-50 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-800 transition-colors duration-200"
                    >
                        Login
                    </button>
                </div>
            </div>
        </Container>
    )
}