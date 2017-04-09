import React from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import store from '../store'
import HomePage from './HomePage'

export default () => (
  <Provider store={store}>
    <div>
      <HomePage />
      <DevTools />
    </div>
  </Provider>
)
