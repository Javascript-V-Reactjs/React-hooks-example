import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext"

function Button(props) {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <button 
            onClick={toggleTheme} 
            className='dark-theme'
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    )    
}

export default Button