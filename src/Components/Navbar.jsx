import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <ul>
            <li> <Link to ="/">Register</Link></li>
            <li> <Link to="/login">Login</Link></li>
            <li> <Link to="/todo">To-do</Link></li>
            <li> <Link to="/mood">Mood</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar