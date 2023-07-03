import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className='header' >
        <Link to="/" >
            <button>go to home page</button>
        </Link>
        <Link to="/login" >
        <div>Welcome</div>
        <div>Sign In</div>
        </Link>
    </div>
  )
}

