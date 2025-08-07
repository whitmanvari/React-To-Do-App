import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-brand'> To-Do App </div>
        <ul className='navbar-links'>
        <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo" className={({ isActive }) => (isActive ? 'active' : '')}>
            To-do
          </NavLink>
        </li>
        <li>
          <NavLink to="/mood" className={({ isActive }) => (isActive ? 'active' : '')}>
            Mood
          </NavLink>
        </li>
        </ul>
    </nav>
  )
}

export default Navbar