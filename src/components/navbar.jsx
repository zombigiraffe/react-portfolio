import React, { useState } from 'react'
import HeadLogo from './logo'
import { Link } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


const NavBar = () => {
const [theme, setTheme] = useState('light')

function toggleTheme(props) {
  setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
}

  return (<nav>
    <HeadLogo />
      <ul>
        <li>
          <Link className="link" style={{textDecoration: "none"}} to="/">HOME</Link>
        </li>
        <li>
          <Link className="link" style={{textDecoration: "none"}} to="/pages/About">ABOUT</Link>
        </li>
        <li>
          <Link className="link" style={{textDecoration: "none"}} to="/pages/Portfolio">PORTFOLIO</Link>
        </li>
        <li>
          <Link className="link" style={{textDecoration: "none"}} to="/pages/HireMe">HIRE ME!</Link>
        </li>
        <li>
        <button>{theme === "dark" ? (
          <LightModeIcon
            onClick={toggleTheme}
          />
        ) : (
          <DarkModeIcon
            onClick={toggleTheme}
          />
        )}</button>
        </li>
      </ul>
    </nav>)
}

export default NavBar