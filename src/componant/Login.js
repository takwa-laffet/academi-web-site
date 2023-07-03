import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
     <div className="login">
      <Link to="/">
        <h1>place of logo</h1>
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"           
          />
          <h5>Password</h5>
          <input
            type="password"
          />
          <button className="login-signInBtn" type="submit" >
            Sign in
          </button>
          <p>
            By continuing
          </p>
          <button className="login-registerBtn">
            Create your Account
          </button>
        </form>
      </div>
    </div>
  )
}

