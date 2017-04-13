import { push } from 'react-router-redux'
import { SET_PRODUCTS } from 'actionTypes'

const setProducts = (products, pages) => ({
  type: SET_PRODUCTS,
  products,
  pages
})

export const fetchProducts = page => dispatch => {
  fetch(`/api/v1/products?page=${page}&per_page=12`)
    .then(response => response.json())
    .then(({ products, pages }) => {
      dispatch(setProducts(products, pages))
    })
}

export const fetchProductsAndNavigateToPage = page => dispatch => {
  dispatch(fetchProducts(page))
  dispatch(push({ search: `?page=${page}` }))
}
