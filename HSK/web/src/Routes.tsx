// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { Private, Router, Route, Set } from '@redwoodjs/router'
import ProductsLayout from 'src/layouts/ProductsLayout'
import HeaderAndFooterLayout from './layouts/HeaderAndFooterLayout/HeaderAndFooterLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/shop/{id:String}" page={ShopPage} name="shop" />
      <Set wrap={ProductsLayout}>
        <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
        <Route path="/products/{id}/edit" page={ProductEditProductPage} name="editProduct" />
        <Route path="/products/{id}" page={ProductProductPage} name="product" />
        <Route path="/products" page={ProductProductsPage} name="products" />
      </Set>
      <Set wrap={HeaderAndFooterLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/pricing" page={PricingPage} name="pricing" />
      </Set>

      <Route path="/contact" page={ContactPage} name="contact" />

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
