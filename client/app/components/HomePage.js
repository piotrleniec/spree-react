import React from 'react'
import { connect } from 'react-redux'
import range from 'lodash/range'
import classNames from 'classnames'
import { fetchProducts } from '../actions/homePage'
import Product from './Product'

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts(1)
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
              <a onClick={() => { this.props.fetchProducts(page) }}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.homePage.products,
  currentPage: state.homePage.currentPage,
  pages: state.homePage.pages
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: page => { dispatch(fetchProducts(page)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
