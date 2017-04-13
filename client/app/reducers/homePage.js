import { SET_PRODUCTS } from '../actionTypes'

const initialState = {
  products: [],
  pages: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { products: action.products, pages: action.pages }
    default:
      return state
  }
}
