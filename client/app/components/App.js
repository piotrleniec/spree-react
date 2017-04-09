import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import HomePage from './HomePage'

export default () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
)
