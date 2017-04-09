import { SET_PRODUCTS } from '../actionTypes'

const initialState = {
  products: [],
  currentPage: 1,
  pages: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        products: action.products,
        currentPage: action.currentPage,
        pages: action.pages
      }
    default:
      return state
  }
}
