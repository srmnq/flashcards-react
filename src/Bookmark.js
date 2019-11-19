import React, { useState } from 'react'
import styled from 'styled-components/macro'

function Bookmark() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  return (
    <BookmarkStyle
      onClick={toggleBookmark}
      color={isBookmarked ? 'red' : 'blue'}
    />
  )

  function toggleBookmark() {
    return setIsBookmarked(!isBookmarked)
  }
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
