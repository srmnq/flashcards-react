import React, { useState } from 'react'

import GlobalStyle from './GlobalStyle'
import Card from './Card'
import styled from 'styled-components/macro'
import Button from './Button.js'

function Home({ cards, toggleBookmark }) {
  const [isOnlyBookmarksShown, setIsOnlyBookmarksShown] = useState(false)

  return (
    <AppStyled>
      <GlobalStyle />
      <Button onClick={showBookmarked}>
        {isOnlyBookmarksShown ? 'Bookmarked cards' : 'All Cards'}
      </Button>
      {isOnlyBookmarksShown
        ? cards
            .filter(card => card.isBookmarked)
            .map(card => (
              <Card
                toggleBookmark={() => toggleBookmark(card._id)}
                key={card._id}
                id={card._id}
                {...card}
              />
            ))
        : cards.map(card => (
            <Card
              toggleBookmark={() => toggleBookmark(card._id)}
              key={card._id}
              id={card._id}
              {...card}
            />
          ))}
      {saveCards()}
    </AppStyled>
  )

  function showBookmarked() {
    setIsOnlyBookmarksShown(!isOnlyBookmarksShown)
  }

  function saveCards() {
    localStorage.setItem('savedCards', JSON.stringify(cards))
  }
}
const AppStyled = styled.div`
  display: grid;
  justify-items: center;

  gap: 40px;
  margin: 0;
  padding: 20px;
  padding-top: 50px;
`

export default Home
