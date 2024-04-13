import { useState, useEffect } from "react"
import { darkTheme, lightTheme } from '../theme'

const useDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme);
    const [themeName, setThemeName] = useState(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light')
  
    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme))
      setThemeName(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    };
  
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setThemeName(savedTheme);
        if (savedTheme === 'light') {
          setTheme(lightTheme)
        } else {
          setTheme(darkTheme)
        }
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('theme', themeName);
      if (themeName === 'light') {
        setTheme(lightTheme)
      } else {
        setTheme(darkTheme)
      }
    }, [themeName]);
  
    return [theme, themeName, toggleTheme];
};

export default useDarkMode
