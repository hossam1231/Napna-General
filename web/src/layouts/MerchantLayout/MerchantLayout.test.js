import { render } from '@redwoodjs/testing/web'

import MerchantLayout from './MerchantLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MerchantLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MerchantLayout />)
    }).not.toThrow()
  })
})
