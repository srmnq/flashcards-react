import React, { useState } from 'react'
import cardData from './cards.json'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Create from './Create'

export default function App() {
  const [cards, setCards] = useState(loadCards() || cardData)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  function toggleBookmark(index) {
    const card = cards[index]
    setCards([
      ...cards.slice(0, index),
      { ...card, isBookmarked: !card.isBookmarked },
      ...cards.slice(index + 1),
    ])
  }
  function loadCards() {
    const cardsJSON = localStorage.getItem('savedCards')
    return JSON.parse(cardsJSON)
  }

  function createNew() {
    setCards([{ question: question, answer: answer }, ...cards])
    setAnswer('')
    setQuestion('')
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
            onClick={() => createNew()}
          />
        </Route>
        <Route exact path="/">
          <Home cards={cards} toggleBookmark={toggleBookmark} />
        </Route>
      </Switch>
    </Router>
  )
}
