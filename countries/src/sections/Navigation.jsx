import React from 'react'
import { ModalContainer } from '../components/styles/Modal.styles'
import { NavUl, NavLi } from '../components/styles/Nav.styles'
import { ThemeToggleButton } from '../components/styles/Button.styles'
import { useNavigate } from 'react-router-dom'

const navItems = {'START': '/', 'SEARCH': '/search', 'GAME': '/game', }
const Navigation = ({theme, toggleTheme, setOpneNavigation}) => {
    const navigate = useNavigate()

    const handleNavClick = (path) => {
        navigate(path)
        setOpneNavigation(false)
    }

    return (
        <ModalContainer>
            <NavUl>
                {Object.entries(navItems).map(([name, path]) => 
                    <NavLi onClick={() => handleNavClick(path)} key={name}>
                        {name}
                    </NavLi>
                )}
            </NavUl>
            <ThemeToggleButton onClick={() => toggleTheme()}>
                {theme === 'light' ? 'DARK' : 'LIGHT'}
            </ThemeToggleButton>
        </ModalContainer>
    )
}

export default Navigation