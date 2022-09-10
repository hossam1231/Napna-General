// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import MerchantsLayout from 'src/layouts/MerchantsLayout'

import PartnersLayout from 'src/layouts/PartnersLayout'

import PlansLayout from 'src/layouts/PlansLayout'

import AuthRedirect from 'src/components/AuthRedirect'
import HomeLayout from 'src/layouts/HomeLayout'
import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/terms" page={TermsPage} name="terms" />
      <Route path="/privacy" page={PrivacyPage} name="privacy" />
      <Route path="/profile" page={ProfilePage} name="profile" />
      <Set wrap={MerchantsLayout}>
        <Route path="/merchants/new" page={MerchantNewMerchantPage} name="newMerchant" />
        <Route path="/merchants/{id}/edit" page={MerchantEditMerchantPage} name="editMerchant" />
        <Route path="/merchants/{id}" page={MerchantMerchantPage} name="merchant" />
        <Route path="/merchants" page={MerchantMerchantsPage} name="merchants" />
      </Set>
      <Set wrap={PartnersLayout}>
        <Route path="/partners/new" page={PartnerNewPartnerPage} name="newPartner" />
        <Route path="/partners/{id}/edit" page={PartnerEditPartnerPage} name="editPartner" />
        <Route path="/partners/{id}" page={PartnerPartnerPage} name="partner" />
        <Route path="/partners" page={PartnerPartnersPage} name="partners" />
      </Set>
      <Set wrap={PlansLayout}>
        <Route path="/plans/new" page={PlanNewPlanPage} name="newPlan" />
        <Route path="/plans/{id}/edit" page={PlanEditPlanPage} name="editPlan" />
        <Route path="/plans/{id}" page={PlanPlanPage} name="plan" />
        <Route path="/plans" page={PlanPlansPage} name="plans" />
      </Set>
      <Route path="/settings" page={SettingsPage} name="settings" />
      <Set>
        <Set wrap={MainLayout}>
          <Route path="/pricing" page={PricingPage} name="pricing" />
        </Set>
        <Set wrap={HomeLayout}>
          <Route path="/" page={HomePage} name="home" />
        </Set>
        <Set wrap={AuthRedirect}>
          <Route path="/login" page={LoginPage} name="login" />
          <Route path="/signup" page={SignupPage} name="signup" />
          <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
          <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        </Set>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
