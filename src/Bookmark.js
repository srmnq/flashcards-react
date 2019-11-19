import React, { useState } from 'react'
import styled from 'styled-components/macro'

function Bookmark({ onClick, active }) {
  //   const [isBookmarked, setIsBookmarked] = useState(false)
  return <BookmarkStyle onClick={onClick} color={active ? 'red' : 'blue'} />

  //   function toggleBookmark() {
  //     return setIsBookmarked(!isBookmarked)
  //   }
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
