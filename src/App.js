import React, {createContext, useState} from "react";
import { Route, Routes, Link} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { HireMe } from "./pages/HireMe";
import HeadLogo from "./components/logo";
import HeadLogoDark from "./components/logodark"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button } from "@mui/material";
export const ThemeContext = createContext('null')

function App() {

const [theme, setTheme] = useState('light')

function toggleTheme() {
  setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  const theBody = document.getElementById("the-body")
    if (theme === "dark") {
      theBody.classList.remove("theBody")
    } else {
      theBody.classList.add("theBody")
    }
  }

  return (
    <div id={theme}>
      <ThemeContext.Provider>
      <nav>
      {theme === "light" ? (<HeadLogo />) : (<HeadLogoDark/>)}
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
        <Button className="theme-button" sx={{ color: 'white'}}>
        
        {theme === "dark" ? (
          <LightModeIcon sx={{ color: 'white'}}
            onClick={toggleTheme}
          />
        ) : (
          <DarkModeIcon sx={{ color: "rgb(80, 80, 80)" }}
            onClick={toggleTheme}
          />
        )}
        
        </Button>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/About" element={<About />} />
        <Route path="/pages/Portfolio" element={<Portfolio />} />
        <Route path="/pages/HireMe" element={<HireMe />} />
      </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
