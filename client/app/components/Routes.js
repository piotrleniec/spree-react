import React from 'react'
import { ConnectedRouter  } from 'react-router-redux'
import { Route } from 'react-router'
import history from '../history'
import HomePage from './HomePage'

export default () => (
  <ConnectedRouter history={history}>
    <Route exact path="/" component={HomePage} />
  </ConnectedRouter>
)
