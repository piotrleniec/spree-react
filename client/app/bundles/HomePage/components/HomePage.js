import React from 'react'
import range from 'lodash/range'
import classNames from 'classnames'
import Product from './Product'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = { products: [], currentPage: 1, pages: 0 }

    this.fetchProducts = this.fetchProducts.bind(this)
  }

  fetchProducts(page) {
    fetch(`/api/v1/products?page=${page}&per_page=12`)
      .then(response => response.json())
      .then(({ products, current_page: currentPage, pages }) => {
        this.setState({ products, currentPage, pages })
      })
  }

  componentDidMount() {
    this.fetchProducts(1)
  }

  render() {
    return (
      <div>
        <div id="products" className="row">
          {this.state.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>

        <ul className="pagination">
          {range(1, this.state.pages + 1).map(page => (
            <li
              key={page}
              className={classNames('page', { active: this.state.currentPage === page })}
            >
              <a onClick={() => { this.fetchProducts(page) }}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
