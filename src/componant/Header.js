import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useAuth } from '../context/GlobalState.js'
import {auth} from '../componant/firebase.js'

export default function Header() {
  const {user} = useAuth()
  const handelAuthentacation = () => {
    auth.signOut()
  }
  return (
    <div className='header' >
        <Link to="/" >
            <button>go to home page</button>
        </Link>
        <div onClick={handelAuthentacation}>
          <Link to={!user && "/login"}  >
        <div>Hello {user ? `${user.email}` : "Guest" } </div>
        <div>{user ? "SignOut" : "SignIn" }</div>
        </Link>
        </div>
        
    </div>
  )
}

