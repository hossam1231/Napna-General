// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'

import HomeLayout from 'src/layouts/HomeLayout'
import PlansLayout from 'src/layouts/PlansLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/profile" page={ProfilePage} name="profile" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={PlansLayout}>
          <Route path="/admin/plans/new" page={PlanNewPlanPage} name="newPlan" />
          <Route path="/admin/plans/{id}/edit" page={PlanEditPlanPage} name="editPlan" />
          <Route path="/admin/plans/{id}" page={PlanPlanPage} name="plan" />
          <Route path="/admin/plans" page={PlanPlansPage} name="plans" />
        </Set>
        <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/admin/posts" page={PostPostsPage} name="posts" />
      </Private>
      <Set wrap={HomeLayout}>
        <Route path="/pricing" page={PricingPage} name="pricing" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
