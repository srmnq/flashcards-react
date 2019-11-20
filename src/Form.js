import React, { useState } from 'react'
import styled from 'styled-components/macro'
function Form({ onInputAnswer, onInputQuestion, onClick }) {
  return (
    <FormStyle>
      <label>Question</label>
      <input onInput={onInputQuestion} name="question"></input>
      <label>Answer</label>
      <input onInput={onInputAnswer} name="answer"></input>
      <button onClick={onClick}>Submit</button>
    </FormStyle>
  )
}
const FormStyle = styled.div`
  display: grid;
`

export default Form
