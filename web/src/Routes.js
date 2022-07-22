// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'

import CartProvider from 'src/components/CartProvider'
import HomeLayout from 'src/layouts/HomeLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={[CartProvider]}>
        <Route path="/profile" page={ProfilePage} name="profile" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Private unauthenticated="home">{/* hi */}</Private>
        <Set wrap={HomeLayout}>
          <Route path="/pricing" page={PricingPage} name="pricing" />
          <Route path="/contact" page={ContactPage} name="contact" />
          <Route path="/about" page={AboutPage} name="about" />
          <Route path="/" page={HomePage} name="home" />
        </Set>
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
