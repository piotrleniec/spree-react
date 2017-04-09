import { SET_PRODUCTS } from '../actionTypes'

const setProducts = (products, currentPage, pages) => ({
  type: SET_PRODUCTS,
  products,
  currentPage,
  pages
})

export const fetchProducts = page => dispatch => {
  fetch(`/api/v1/products?page=${page}&per_page=12`)
    .then(response => response.json())
    .then(({ products, current_page: currentPage, pages }) => {
      dispatch(setProducts(products, currentPage, pages))
    })
}
