// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ProductsLayout from 'src/layouts/ProductsLayout'
import FooterLayout from 'src/layouts/FooterLayout'
import HeaderLayout from 'src/layouts/HeaderLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ProductsLayout}>
        <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
        <Route path="/products/{id}/edit" page={ProductEditProductPage} name="editProduct" />
        <Route path="/products/{id}" page={ProductProductPage} name="product" />
        <Route path="/products" page={ProductProductsPage} name="products" />
      </Set>
      <Set wrap={FooterLayout}>
        <Set wrap={HeaderLayout}>
          <Route path="/" page={HomePage} name="home" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
