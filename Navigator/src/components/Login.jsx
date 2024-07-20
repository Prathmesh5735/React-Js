import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { Login } = useContext(AuthContext)  // Correctly destructure `auth`

  const handleSubmit = (e) => {
    e.preventDefault();
    let userdata = {
      email,
      password
    }

    axios.post("https://reqres.in/api/login", userdata)
      .then((res) => {
        console.log(res.data.token)
        Login(res.data.token)  // Use `auth` from the context
      })
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Login Page</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input className="login-input" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Username" />
        <input className="login-input" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
