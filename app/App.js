import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

export default () => (
  <div>
    <Router>
      <div>
        <Header />
        <hr />
        <Route
            component={Home}
            exact
            path="/"
        />
        <Route
            component={About}
            exact
            path="/about"
        />
      </div>
    </Router>
  </div>
)
