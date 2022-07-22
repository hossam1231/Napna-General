import {
  subscriptionPackages,
  subscriptionPackage,
  createSubscriptionPackage,
  updateSubscriptionPackage,
  deleteSubscriptionPackage,
} from './subscriptionPackages'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('subscriptionPackages', () => {
  scenario('returns all subscriptionPackages', async (scenario) => {
    const result = await subscriptionPackages()

    expect(result.length).toEqual(
      Object.keys(scenario.subscriptionPackage).length
    )
  })

  scenario('returns a single subscriptionPackage', async (scenario) => {
    const result = await subscriptionPackage({
      id: scenario.subscriptionPackage.one.id,
    })

    expect(result).toEqual(scenario.subscriptionPackage.one)
  })

  scenario('creates a subscriptionPackage', async () => {
    const result = await createSubscriptionPackage({
      input: { name: 'String', description: 'String', price: 5515902 },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.price).toEqual(5515902)
  })

  scenario('updates a subscriptionPackage', async (scenario) => {
    const original = await subscriptionPackage({
      id: scenario.subscriptionPackage.one.id,
    })

    const result = await updateSubscriptionPackage({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a subscriptionPackage', async (scenario) => {
    const original = await deleteSubscriptionPackage({
      id: scenario.subscriptionPackage.one.id,
    })

    const result = await subscriptionPackage({ id: original.id })

    expect(result).toEqual(null)
  })
})
