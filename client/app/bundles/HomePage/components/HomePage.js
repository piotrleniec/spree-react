import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = { products: [], currentPage: 0, pages: 0 }
  }

  componentDidMount() {
    fetch('/api/v1/products?page=1&per_page=12')
      .then(response => response.json())
      .then(({ products, current_page: currentPage, pages }) => {
        this.setState({ products, currentPage, pages })
      })
  }

  render() {
    return (
      <div>
        {this.state.products.map(product => (
          <div>
            {JSON.stringify(product)}
          </div>
        ))}
      </div>
    )
  }
}
