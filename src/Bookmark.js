import React from 'react'
import styled from 'styled-components/macro'

function Bookmark({ onClick, active }) {
  return <BookmarkStyle onClick={onClick} color={active ? 'red' : 'blue'} />
}
const BookmarkStyle = styled.div`
  border: 10px solid ${props => props.color};
  border-bottom-color: transparent;
  position: absolute;
  left: 10px;
  top: 0;
  height: 30px;
`
export default Bookmark
