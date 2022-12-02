import _JSON$stringify from "@babel/runtime-corejs3/core-js/json/stringify";
import { handleStripeWebhooks } from "../../lib/stripe";
import { handleDBSync } from "../../services/users/users";

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */

/*
 * Stripe documentation recommends making any calls to db for syncing inside of webhooks
 */
export const handler = async (event, context) => {
  // Create services to handle webhooks
  const results = await handleStripeWebhooks(event, context, {
    'checkout.session.completed': e => e.type,
    'checkout.session.async_payment_succeeded': e => e.type,
    'checkout.session.async_payment_failed': e => e.type,
    'customer.updated': async e => {
      const {
        data: {
          object
        }
      } = JSON.parse(e.body);
      const results = await handleDBSync(object.id, object.name, object.email);
      if (results) {
        console.log('Database has been synced successfully');
      }
    }
  });
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      data: results
    })
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJoYW5kbGVTdHJpcGVXZWJob29rcyIsImhhbmRsZURCU3luYyIsImhhbmRsZXIiLCJldmVudCIsImNvbnRleHQiLCJyZXN1bHRzIiwiZSIsInR5cGUiLCJkYXRhIiwib2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImlkIiwibmFtZSIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsInN0YXR1c0NvZGUiLCJoZWFkZXJzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBpL3NyYy9mdW5jdGlvbnMvc3RyaXBlV2ViaG9va3Mvc3RyaXBlV2ViaG9va3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlU3RyaXBlV2ViaG9va3MgfSBmcm9tICdzcmMvbGliL3N0cmlwZSdcbmltcG9ydCB7IGhhbmRsZURCU3luYyB9IGZyb20gJ3NyYy9zZXJ2aWNlcy91c2VycydcblxuLyoqXG4gKiBUaGUgaGFuZGxlciBmdW5jdGlvbiBpcyB5b3VyIGNvZGUgdGhhdCBwcm9jZXNzZXMgaHR0cCByZXF1ZXN0IGV2ZW50cy5cbiAqIFlvdSBjYW4gdXNlIHJldHVybiBhbmQgdGhyb3cgdG8gc2VuZCBhIHJlc3BvbnNlIG9yIGVycm9yLCByZXNwZWN0aXZlbHkuXG4gKlxuICogSW1wb3J0YW50OiBXaGVuIGRlcGxveWVkLCBhIGN1c3RvbSBzZXJ2ZXJsZXNzIGZ1bmN0aW9uIGlzIGFuIG9wZW4gQVBJIGVuZHBvaW50IGFuZFxuICogaXMgeW91ciByZXNwb25zaWJpbGl0eSB0byBzZWN1cmUgYXBwcm9wcmlhdGVseS5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL3JlZHdvb2Rqcy5jb20vZG9jcy9zZXJ2ZXJsZXNzLWZ1bmN0aW9ucyNzZWN1cml0eS1jb25zaWRlcmF0aW9uc3xTZXJ2ZXJsZXNzIEZ1bmN0aW9uIENvbnNpZGVyYXRpb25zfVxuICogaW4gdGhlIFJlZHdvb2RKUyBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEB0eXBlZGVmIHsgaW1wb3J0KCdhd3MtbGFtYmRhJykuQVBJR2F0ZXdheUV2ZW50IH0gQVBJR2F0ZXdheUV2ZW50XG4gKiBAdHlwZWRlZiB7IGltcG9ydCgnYXdzLWxhbWJkYScpLkNvbnRleHQgfSBDb250ZXh0XG4gKiBAcGFyYW0geyBBUElHYXRld2F5RXZlbnQgfSBldmVudCAtIGFuIG9iamVjdCB3aGljaCBjb250YWlucyBpbmZvcm1hdGlvbiBmcm9tIHRoZSBpbnZva2VyLlxuICogQHBhcmFtIHsgQ29udGV4dCB9IGNvbnRleHQgLSBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaW52b2NhdGlvbixcbiAqIGZ1bmN0aW9uLCBhbmQgZXhlY3V0aW9uIGVudmlyb25tZW50LlxuICovXG5cbi8qXG4gKiBTdHJpcGUgZG9jdW1lbnRhdGlvbiByZWNvbW1lbmRzIG1ha2luZyBhbnkgY2FsbHMgdG8gZGIgZm9yIHN5bmNpbmcgaW5zaWRlIG9mIHdlYmhvb2tzXG4gKi9cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gYXN5bmMgKGV2ZW50LCBjb250ZXh0KSA9PiB7XG4gIC8vIENyZWF0ZSBzZXJ2aWNlcyB0byBoYW5kbGUgd2ViaG9va3NcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGhhbmRsZVN0cmlwZVdlYmhvb2tzKGV2ZW50LCBjb250ZXh0LCB7XG4gICAgJ2NoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkJzogKGUpID0+IGUudHlwZSxcbiAgICAnY2hlY2tvdXQuc2Vzc2lvbi5hc3luY19wYXltZW50X3N1Y2NlZWRlZCc6IChlKSA9PiBlLnR5cGUsXG4gICAgJ2NoZWNrb3V0LnNlc3Npb24uYXN5bmNfcGF5bWVudF9mYWlsZWQnOiAoZSkgPT4gZS50eXBlLFxuICAgICdjdXN0b21lci51cGRhdGVkJzogYXN5bmMgKGUpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YTogeyBvYmplY3QgfSxcbiAgICAgIH0gPSBKU09OLnBhcnNlKGUuYm9keSlcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBoYW5kbGVEQlN5bmMob2JqZWN0LmlkLCBvYmplY3QubmFtZSwgb2JqZWN0LmVtYWlsKVxuICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGFiYXNlIGhhcyBiZWVuIHN5bmNlZCBzdWNjZXNzZnVsbHknKVxuICAgICAgfVxuICAgIH0sXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGRhdGE6IHJlc3VsdHMsXG4gICAgfSksXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVNBLG9CQUFvQjtBQUM3QixTQUFTQyxZQUFZOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE1BQU1DLE9BQU8sR0FBRyxPQUFPQyxLQUFLLEVBQUVDLE9BQU8sS0FBSztFQUMvQztFQUNBLE1BQU1DLE9BQU8sR0FBRyxNQUFNTCxvQkFBb0IsQ0FBQ0csS0FBSyxFQUFFQyxPQUFPLEVBQUU7SUFDekQsNEJBQTRCLEVBQUdFLENBQUMsSUFBS0EsQ0FBQyxDQUFDQyxJQUFJO0lBQzNDLDBDQUEwQyxFQUFHRCxDQUFDLElBQUtBLENBQUMsQ0FBQ0MsSUFBSTtJQUN6RCx1Q0FBdUMsRUFBR0QsQ0FBQyxJQUFLQSxDQUFDLENBQUNDLElBQUk7SUFDdEQsa0JBQWtCLEVBQUUsTUFBT0QsQ0FBQyxJQUFLO01BQy9CLE1BQU07UUFDSkUsSUFBSSxFQUFFO1VBQUVDO1FBQU87TUFDakIsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsQ0FBQyxDQUFDTSxJQUFJLENBQUM7TUFDdEIsTUFBTVAsT0FBTyxHQUFHLE1BQU1KLFlBQVksQ0FBQ1EsTUFBTSxDQUFDSSxFQUFFLEVBQUVKLE1BQU0sQ0FBQ0ssSUFBSSxFQUFFTCxNQUFNLENBQUNNLEtBQUssQ0FBQztNQUN4RSxJQUFJVixPQUFPLEVBQUU7UUFDWFcsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUNBQXVDLENBQUM7TUFDdEQ7SUFDRjtFQUNGLENBQUMsQ0FBQztFQUVGLE9BQU87SUFDTEMsVUFBVSxFQUFFLEdBQUc7SUFDZkMsT0FBTyxFQUFFO01BQ1AsY0FBYyxFQUFFO0lBQ2xCLENBQUM7SUFDRFAsSUFBSSxFQUFFLGdCQUFlO01BQ25CSixJQUFJLEVBQUVIO0lBQ1IsQ0FBQztFQUNILENBQUM7QUFDSCxDQUFDIn0=