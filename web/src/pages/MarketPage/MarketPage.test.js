import { render } from '@redwoodjs/testing/web'

import MarketPage from './MarketPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MarketPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MarketPage />)
    }).not.toThrow()
  })
})
