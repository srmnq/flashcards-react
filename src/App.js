import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Create from './Create'

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>

      <Switch>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
