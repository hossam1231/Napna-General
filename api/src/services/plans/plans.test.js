import { plans, plan, createPlan, updatePlan, deletePlan } from './plans'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('plans', () => {
  scenario('returns all plans', async (scenario) => {
    const result = await plans()

    expect(result.length).toEqual(Object.keys(scenario.plan).length)
  })

  scenario('returns a single plan', async (scenario) => {
    const result = await plan({ id: scenario.plan.one.id })

    expect(result).toEqual(scenario.plan.one)
  })

  scenario('creates a plan', async () => {
    const result = await createPlan({
      input: { name: 'String', description: 'String', price: 7488772 },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.price).toEqual(7488772)
  })

  scenario('updates a plan', async (scenario) => {
    const original = await plan({ id: scenario.plan.one.id })
    const result = await updatePlan({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a plan', async (scenario) => {
    const original = await deletePlan({ id: scenario.plan.one.id })
    const result = await plan({ id: original.id })

    expect(result).toEqual(null)
  })
})
