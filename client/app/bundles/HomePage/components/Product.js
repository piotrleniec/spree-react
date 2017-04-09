import React from 'react'

export default ({ product }) => (
  <div
    id={`product_${product.id}`}
    className="col-md-3 col-sm-6 col-xs-6 product-list-item"
  >
    <div className="panel panel-default">
      <div className="panel-body text-center product-body">
        <a href={`/products/${product.slug}`}>
          <img src={product.master.images[0].small_url} />
          <br />
          {product.name}
        </a>
        <br />
      </div>
      <div className="panel-footer text-center">
        <span>
          <span className="price selling lead">${product.price}</span>
        </span>
      </div>
    </div>
  </div>
)
