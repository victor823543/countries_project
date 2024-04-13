import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import StartPage from './pages/StartPage'
import GamePage from './pages/GamePage'
import SearchPage from './pages/SearchPage'
import useDarkMode from './hooks/useDarkMode'
import NavButton from './components/NavButton'

function App() {
  const [theme, themeName, toggleTheme] = useDarkMode()
  const [openNavigation, setOpenNavigation] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavButton theme={themeName} toggleTheme={toggleTheme} openNavigation={openNavigation} setOpenNavigation={setOpenNavigation}/>
        <Routes>
          <Route path='/' element={
            <StartPage toggleTheme={toggleTheme}/>
          }/>
          <Route path='/search' element={
            <SearchPage />
          }/>
          <Route path='/game' element={
            <GamePage />
          }/>
        </Routes>
      </>
      
    </ThemeProvider>
    
  )
}

export default App
