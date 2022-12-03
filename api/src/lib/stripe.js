import Stripe from 'stripe'

export const stripe = new Stripe(process.env.stripe_sk)

export const handleStripeWebhooks = (event, context, webhooksObj) => {
  let stripeEvent
  try {
    const sig = event.headers['stripe-signature']
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      process.env.stripe_webhook_sk
    )

    let results = null
    if (typeof webhooksObj[stripeEvent.type] !== 'undefined') {
      results = webhooksObj[stripeEvent.type](event, context)
    }
    return results
  } catch (error) {
    console.log(error)
    throw error
  }
}
