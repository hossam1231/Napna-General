import { render } from '@redwoodjs/testing/web'

import MarketLayout from './MarketLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MarketLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MarketLayout />)
    }).not.toThrow()
  })
})
