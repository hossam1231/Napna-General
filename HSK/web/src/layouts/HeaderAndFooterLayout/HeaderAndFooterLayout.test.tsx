import { render } from '@redwoodjs/testing/web'

import HeaderAndFooterLayout from './HeaderAndFooterLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HeaderAndFooterLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderAndFooterLayout />)
    }).not.toThrow()
  })
})
