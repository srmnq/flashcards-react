import React, { useState } from 'react'
import cardData from './cards.json'
import styled from 'styled-components/macro'
import Bookmark from './Bookmark'
import Button from './Button'

function Card({ question, answer }) {
  const [isToggled, setIsToggled] = useState(true)
  const classes = isToggled ? 'CardStyled' : ' CardStyled active'
  const classAnswer = isToggled ? 'AnswerStyled' : ' AnswerStyled active'
  return (
    <CardStyled className={classes}>
      <Bookmark />
      <Button onClick={toggle}>{isToggled ? 'show' : 'hide'}</Button>
      <h2>{question}</h2>

      <h3 className={classAnswer}>{answer}</h3>
    </CardStyled>
  )

  function toggle() {
    return setIsToggled(!isToggled)
  }
}

const CardStyled = styled.div`
  width: 300px;
  background: cornsilk;
  height: 200px;
  padding: 20px;
  margin: 0;
  word-wrap: break-word;
  position: relative;
  transition: all 0.5s;
  h2 {
    margin: 15px 0px 30px 0px;
  }
  .AnswerStyled {
    transition: all 1s;
    opacity: 0;
    &.active {
      opacity: 1;
    }
  }
  &.active {
    height: 250px;
  }
`

export default Card
