import React from 'react'
import range from 'lodash/range'
import classNames from 'classnames'
import Product from './Product'

export default ({
  products = [],
  pages = 0,
  currentPage = 1,
  onPaginationClick = () => {}
}) => (
  <div>
    <div id="products" className="row">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>

    <ul className="pagination">
      {range(1, pages + 1).map(page => (
        <li
          key={page}
          className={classNames('page', { active: currentPage === page })}
        >
          <a onClick={() => { onPaginationClick(page) }}>
            {page}
          </a>
        </li>
      ))}
    </ul>
  </div>
)
