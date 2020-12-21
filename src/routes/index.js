import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import { Sandwiches } from 'pages'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/sandwiches' />} />
      <Route path='/sandwiches' component={Sandwiches} />
    </Switch>
  </Router>
)

export default Routes
