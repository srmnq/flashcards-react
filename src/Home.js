import React, { useState } from 'react'

import cardData from './cards.json'
import GlobalStyle from './GlobalStyle'
import Card from './Card'
import styled from 'styled-components/macro'
import Button from './Button.js'

function Home() {
  const [cards, setCards] = useState(loadCards() || cardData)
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
      {saveCards()}
    </AppStyled>
  )

  function showBookmarked() {
    setIsOnlyBookmarksShown(!isOnlyBookmarksShown)
  }

  function toggleBookmark(index) {
    const card = cards[index]
    setCards([
      ...cards.slice(0, index),
      { ...card, isBookmarked: !card.isBookmarked },
      ...cards.slice(index + 1),
    ])
  }
  function saveCards() {
    localStorage.setItem('savedCards', JSON.stringify(cards))
  }

  function loadCards() {
    const cardsJSON = localStorage.getItem('savedCards')
    return JSON.parse(cardsJSON)
  }

  function createCard(questionValue, answerValue) {
    const newCard = <Card question={questionValue} answer={answerValue} />
    console.log(newCard)
    // setCards(cards.push(newCard))
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
