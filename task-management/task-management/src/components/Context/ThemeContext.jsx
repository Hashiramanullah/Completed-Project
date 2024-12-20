import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export const useTheme = (()=> useContext(ThemeContext));

export const ThemeProvider = (({children})=>{
   const [theme,setTheme] = useState(()=>{
    const savedTheme =localStorage.getItem("theme");
    return savedTheme ? savedTheme : 'light'
   });

    const toggelTheme = () => {
        const newTheme = theme == 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme',newTheme);
    }
 
    return (

        <ThemeContext.Provider value={{theme,toggelTheme}}>
            {children}
        </ThemeContext.Provider>

    )
})