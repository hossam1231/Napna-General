// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import FooterLayout from 'src/layouts/FooterLayout'
import HeaderLayout from 'src/layouts/HeaderLayout'

const Routes = () => {
  return (
    <Router>
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
