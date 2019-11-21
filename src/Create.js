import React, { useState } from 'react'
import Form from './Form'

function Create({ value, onInputQuestion, onInputAnswer, onClick }) {
  return (
    <Form
      onInputQuestion={onInputQuestion}
      onInputAnswer={onInputAnswer}
      onClick={onClick}
      value={value}
    />
  )
}

export default Create
