import { mockHttpEvent } from '@redwoodjs/testing/api'

import { stripe } from 'src/lib/stripe'

import { handler } from './stripeWebhooks'

describe('stripeWebhooks function', () => {
  it('Should respond with 200', async () => {
    /**
     * Copied from Stripe's tests: {@link https://github.com/stripe/stripe-node/blob/master/test/Webhook.spec.js#L8-L12}
     */
    const payload = JSON.stringify(
      {
        id: 'evt_test_webhook',
        object: 'event',
      },
      null,
      2
    )

    process.env.stripe_webhook_sk = 'whsec_test_secret'

    /**
     * @see {@link https://github.com/stripe/stripe-node/blob/master/README.md#testing-webhook-signing}
     */
    const header = stripe.webhooks.generateTestHeaderString({
      payload,
      secret: process.env.stripe_webhook_sk,
    })

    const httpEvent = mockHttpEvent({
      body: payload,
      headers: {
        'stripe-signature': header,
      },
    })

    const response = await handler(httpEvent, null)

    expect(response.statusCode).toBe(200)
  })
})
