import {
  partners,
  partner,
  createPartner,
  updatePartner,
  deletePartner,
} from './partners'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('partners', () => {
  scenario('returns all partners', async (scenario) => {
    const result = await partners()

    expect(result.length).toEqual(Object.keys(scenario.partner).length)
  })

  scenario('returns a single partner', async (scenario) => {
    const result = await partner({ id: scenario.partner.one.id })

    expect(result).toEqual(scenario.partner.one)
  })

  scenario('creates a partner', async () => {
    const result = await createPartner({
      input: { merchantId: 'String' },
    })

    expect(result.merchantId).toEqual('String')
  })

  scenario('updates a partner', async (scenario) => {
    const original = await partner({ id: scenario.partner.one.id })
    const result = await updatePartner({
      id: original.id,
      input: { merchantId: 'String2' },
    })

    expect(result.merchantId).toEqual('String2')
  })

  scenario('deletes a partner', async (scenario) => {
    const original = await deletePartner({ id: scenario.partner.one.id })
    const result = await partner({ id: original.id })

    expect(result).toEqual(null)
  })
})
