import React, {useState, createContext} from "react"
const ThemeContext = createContext()

function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState('dark')
    
    const toggleTheme = () => { theme === 'light' ? setTheme('dark') : setTheme('light') }

    return (
        <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}