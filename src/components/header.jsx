import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div><ul>
        <li><Link>Home</Link></li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
    </ul></div>
  )
}

export default Header