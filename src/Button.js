import React, { useState } from 'react'
import styled from 'styled-components/macro'

function Button({ onClick, children }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}
const ButtonStyled = styled.button`
  background: #000;
  color: #eee;
  padding: 8px;
  border-radius: 4px;
  position: absolute;
  border: none;
  right: 8px;
  top: 8px;
`
export default Button
