import {
  merchants,
  merchant,
  createMerchant,
  updateMerchant,
  deleteMerchant,
} from './merchants'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('merchants', () => {
  scenario('returns all merchants', async (scenario) => {
    const result = await merchants()

    expect(result.length).toEqual(Object.keys(scenario.merchant).length)
  })

  scenario('returns a single merchant', async (scenario) => {
    const result = await merchant({ id: scenario.merchant.one.id })

    expect(result).toEqual(scenario.merchant.one)
  })

  scenario('creates a merchant', async () => {
    const result = await createMerchant({
      input: {
        partnerId: 'String',
        name: 'String',
        address: 'String5328243',
        postalCode: 'String',
      },
    })

    expect(result.partnerId).toEqual('String')
    expect(result.name).toEqual('String')
    expect(result.address).toEqual('String5328243')
    expect(result.postalCode).toEqual('String')
  })

  scenario('updates a merchant', async (scenario) => {
    const original = await merchant({ id: scenario.merchant.one.id })
    const result = await updateMerchant({
      id: original.id,
      input: { partnerId: 'String2' },
    })

    expect(result.partnerId).toEqual('String2')
  })

  scenario('deletes a merchant', async (scenario) => {
    const original = await deleteMerchant({ id: scenario.merchant.one.id })
    const result = await merchant({ id: original.id })

    expect(result).toEqual(null)
  })
})
