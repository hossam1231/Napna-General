import { useAuth } from '@redwoodjs/auth'

import db from '../App'


async function CreateCheckoutSession() {

  const { currentUser } = useAuth()

  const docRef = await db
    .collection('customers')
    .doc(currentUser.uid)
    .collection('checkout_sessions')
    .add({
      automatic_tax: true, // Automatically calculate tax based on the customer's address
      tax_id_collection: true, // Collect the customer's tax ID (important for B2B transactions
      price: 'price_1GqIC8HYgolSBA35zoTTN2Zl',
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    })
  // Wait for the CheckoutSession to get attached by the extension
  docRef.onSnapshot((snap) => {
    const { error, url } = snap.data()
    if (error) {
      // Show an error to your customer and
      // inspect your Cloud Function logs in the Firebase console.
      alert(`An error occured: ${error.message}`)
    }
    if (url) {
      // We have a Stripe Checkout URL, let's redirect.
      window.location.assign(url)
    }
  })
}

export default CreateCheckoutSession
