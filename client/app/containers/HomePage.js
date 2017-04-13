import React from 'react'
import { connect } from 'react-redux'
import HomePageComponent from '../components/HomePage'
import { fetchProducts, fetchProductsAndNavigateToPage } from '../actions/homePage'

class HomePageContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProducts(this.props.currentPage)
  }

  render() {
    return (
      <HomePageComponent
        products={this.props.products}
        pages={this.props.pages}
        currentPage={this.props.currentPage}
        onPaginationClick={this.props.fetchProductsAndNavigateToPage}
      />
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
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
