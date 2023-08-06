"use client"
import { useState } from "react"

const LoginComponent = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="w-[80%] md:w-[60%] lg:w-[30%] h-[50vh] bg-white shadow-lg shadow-black rounded-lg flex flex-col items-start px-5 py-8">
      <h1 className="font-semibold text-lg">Login</h1>
      <p className="text-xs font-normal mt-2">Login to you account</p>

      <form className="w-full flex flex-col items-start gap-2 mt-3">
        <label className="font-semibold text-sm">Email</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-600 text-xs placeholder:text-xs "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="font-semibold text-sm">Password</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-600 text-xs placeholder:text-xs "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="self-center px-10 py-3 bg-yellow-600 text-white hover:bg-yellow-800 duration-300 ease-in-out mt-2">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginComponent
