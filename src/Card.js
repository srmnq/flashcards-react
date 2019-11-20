import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Bookmark from './Bookmark'
import Button from './Button'

function Card({ question, answer, toggleBookmark, isBookmarked }) {
  const [isToggled, setIsToggled] = useState(true)
  const classes = isToggled ? 'CardStyled' : ' CardStyled active'
  const classAnswer = isToggled ? 'AnswerStyled' : ' AnswerStyled active'
  return (
    <CardStyled className={classes}>
      <Bookmark active={isBookmarked} onClick={toggleBookmark} />
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
  padding: 20px;
  margin: 0;
  word-wrap: break-word;
  position: relative;
  transition: all 0.5s;
  h2 {
    margin: 15px 0px 30px 0px;
  }
  .AnswerStyled {
    transition: all 0.5s;
    opacity: 0;
    max-height: 0px;
    &.active {
      opacity: 1;
      max-height: 400px;
    }
  }
`

export default Card

Card.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}
