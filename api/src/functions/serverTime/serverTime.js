import { logger } from 'src/lib/logger'

// importing `db` directly
import { db } from 'src/lib/db'

// importing services
import { update } from 'src/services/subscriptions'

export const handler = async (event, context) => {

  // Safely use the validated webhook payload body
  const body = JSON.parse(event.body)
  const trackingNumber = body.trackingNumber
  const status = body.status

  const order = await db.order.update({
        where: { trackingNumber_status: { trackingNumber, status: currentOrderStatus } },
        data: { status: status },
      })

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
         order,
         message: `Updated order ${order.id} to ${order.status} at ${order.updatedAt}`,
       }),
  }
}
