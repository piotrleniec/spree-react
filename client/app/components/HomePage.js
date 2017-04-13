import React from 'react'
import { connect } from 'react-redux'
import range from 'lodash/range'
import classNames from 'classnames'
import { push } from 'react-router-redux'
import { fetchProducts, fetchProductsAndNavigateToPage } from '../actions/homePage'
import Product from './Product'

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts(this.props.currentPage)
  }

  render() {
    return (
      <div>
        <div id="products" className="row">
          {this.props.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>

        <ul className="pagination">
          {range(1, this.props.pages + 1).map(page => (
            <li
              key={page}
              className={classNames('page', { active: this.props.currentPage === page })}
            >
              <a onClick={() => { this.props.fetchProductsAndNavigateToPage(page) }}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const queryString = state.router.location.search
  const params = new URLSearchParams(queryString)

  return {
    products: state.homePage.products,
    currentPage: parseInt(params.get('page'), 10) || 1,
    pages: state.homePage.pages
  }
}

const mapDispatchToProps = ({
  fetchProducts,
  fetchProductsAndNavigateToPage,
  push
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
