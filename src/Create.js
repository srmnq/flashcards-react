import React, { useState } from 'react'
import Form from './Form'

function Create() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  return (
    <Form
      onInputQuestion={event => setQuestion(event.target.value)}
      onInputAnswer={event => setAnswer(event.target.value)}
      onClick={() => console.log({ question: question, answer: answer })}
    />
  )
}

export default Create
