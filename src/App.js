import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import { getCards, patchCard, patchBookmark } from './services'

export default function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards().then(setCards)
  }, [])

  // useEffect(() => {
  //   console.log('this is called once')
  // }, [])

  // useEffect(() => {
  //   console.log('this is called on every change')
  // })

  // useEffect(() => {
  //   console.log('this is called when cards is changed')
  // }, [cards])

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  function toggleBookmark(id) {
    const index = cards.findIndex(card => card._id === id)
    const card = cards[index]
    patchBookmark(card).then(changedCard => {
      setCards([
        ...cards.slice(0, index),
        changedCard,
        ...cards.slice(index + 1),
      ])
    })
  }

  function loadCards() {
    const cardsJSON = localStorage.getItem('savedCards')
    return JSON.parse(cardsJSON)
  }

  function createNew(event) {
    event.preventDefault()
    setCards([{ question: question, answer: answer }, ...cards])
    setAnswer('')
    setQuestion('')
    event.target.reset()
  }

  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>

      <Switch>
        <Route path="/create">
          <Create
            onInputQuestion={event => setQuestion(event.target.value)}
            onInputAnswer={event => setAnswer(event.target.value)}
            onClick={event => createNew(event)}
          />
        </Route>
        <Route exact path="/">
          <Home cards={cards} toggleBookmark={toggleBookmark} />
        </Route>
      </Switch>
    </Router>
  )
}
