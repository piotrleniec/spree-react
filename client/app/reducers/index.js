import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import homePage from './homePage'

export default combineReducers({
  router: routerReducer,
  homePage
})
