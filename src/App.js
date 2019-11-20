import React, { useState } from 'react'
import cardData from './cards.json'
import GlobalStyle from './GlobalStyle'
import Card from './Card'
import styled from 'styled-components/macro'
import Button from './Button.js'

function App() {
  const [cards, setCards] = useState(cardData)
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
            .map((card, index) => (
              <Card
                toggleBookmark={() => toggleBookmark(index)}
                key={index}
                {...card}
              />
            ))
        : cards.map((card, index) => (
            <Card
              toggleBookmark={() => toggleBookmark(index)}
              key={index}
              {...card}
            />
          ))}
    </AppStyled>
  )

  function showBookmarked() {
    setIsOnlyBookmarksShown(!isOnlyBookmarksShown)
  }

  function toggleBookmark(index) {
    const card = cards[index]
    return setCards([
      ...cards.slice(0, index),
      { ...card, isBookmarked: !card.isBookmarked },
      ...cards.slice(index + 1),
    ])
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

export default App
