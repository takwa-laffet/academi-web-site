import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from './firebase'
// import { useAuth } from '../context/GlobalState'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  // const { user } = useAuth()
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const navigate = useNavigate()

  const registre = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password).then((auth) =>
    {
      if (auth) {
        navigate("/")
      } 
    } ).catch((error) => {
      alert(error.message)
    })
  }
  const SignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then((auth) => {
      if (auth) {
        navigate("/")
      }
    })
  }
  // console.log(user)
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
            value={email}  
            onChange={(e) => setEmail(e.target.value)}         
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-signInBtn" type="submit" onClick={SignIn} >
            Sign in
          </button>
          <p>
            By continuing, jjj
          </p>
          <button className="login-registerBtn"
          onClick={registre}
          >
            Create your Account
          </button>
        </form>
      </div>
    </div>
  )
}

