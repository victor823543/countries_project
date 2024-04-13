import { StyledNavButton } from "./styles/Button.styles"
import { Nav } from "./styles/Nav.styles"
import MenuSvg from "../assets/MenuSvg"
import Navigation from "../sections/Navigation"

const NavButton = ({theme, toggleTheme, openNavigation, setOpenNavigation}) => {
  return (
    <>
      <Nav>
        <StyledNavButton onClick={() => setOpenNavigation(!openNavigation)}>
          <MenuSvg openNavigation={openNavigation}/>
        </StyledNavButton>
      </Nav>
      {openNavigation &&
        <Navigation setOpneNavigation={setOpenNavigation} theme={theme} toggleTheme={toggleTheme}/>
      }
    </>
  )
}

export default NavButton