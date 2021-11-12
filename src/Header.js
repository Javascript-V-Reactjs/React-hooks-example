import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext"
import Button from "./Button"

function Header(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <header>
            <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
            <Button />
        </header>
    )    
}

export default Header
