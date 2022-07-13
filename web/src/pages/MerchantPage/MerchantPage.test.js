import { render } from '@redwoodjs/testing/web'

import MerchantPage from './MerchantPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MerchantPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MerchantPage />)
    }).not.toThrow()
  })
})
