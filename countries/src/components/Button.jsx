import React from 'react'
import { StyledButton } from './styles/Button.styles'

const Button = ({children, onClick}) => {
  return (
    <StyledButton onClick={onClick}>
        {children}
    </StyledButton>
  )
}

export default Button