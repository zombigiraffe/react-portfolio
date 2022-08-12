import React from 'react'
import { ThemeContext } from '../App'

const Footer = () => {
const date = new Date().getFullYear()
  return (
    <ThemeContext.Provider>
    <footer>Arron Mixell Dev {date}</footer>
    </ThemeContext.Provider>
  )
}

export default Footer