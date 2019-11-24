import React, { useState } from 'react'
import styled from 'styled-components/macro'
function Form({ value, onInputAnswer, onInputQuestion, onClick }) {
  return (
    <FormStyle onSubmit={onClick}>
      <label>Question</label>
      <input required onInput={onInputQuestion} name="question"></input>
      <label>Answer</label>
      <input
        required
        value={value}
        onInput={onInputAnswer}
        name="answer"
      ></input>
      <button>Submit</button>
    </FormStyle>
  )
}
const FormStyle = styled.form`
  display: grid;
  font-size: 2rem;
  gap: 30px;
  margin: auto;
  width: 400px;

  input {
    height: 2rem;
    font-size: 2rem;
    padding: 20px;
    border-radius: 4px;
    border: 4px solid #333;
  }
  button {
    border: none;
    font-size: 2rem;
    border-radius: 4px;
    padding: 20px;
    background: #000;
    color: #eee;
    &:disabled {
      background: red;
    }
  }
`

export default Form
