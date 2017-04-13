import React from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import store from '../store'
import Routes from './Routes'

export default () => (
  <Provider store={store}>
    <div>
      <Routes />
      <DevTools />
    </div>
  </Provider>
)
