
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './components/login/Login'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/dashboard'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

function Home () {
  return <h2>Home</h2>
}

export default App
