import userEvent from '@testing-library/user-event'

import { screen, render } from '@redwoodjs/testing/web'

import CartProvider from 'src/components/CartProvider'
import MainLayout from 'src/layouts/MainLayout'

import PricingPage from './PricingPage'

describe('PricingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PricingPage />)
    }).not.toThrow()
  })

  it('clicking products adds them to the cart', async () => {
    const { user } = setup(
      <CartProvider>
        <MainLayout>
          <PricingPage />
        </MainLayout>
      </CartProvider>
    )

    const productEl = await screen.findByText('Folding')
    await user.click(productEl)

    const cartButton = screen.getByLabelText('Open cart')
    expect(cartButton.dataset.quantity).toBe('1')
  })
})

// See https://testing-library.com/docs/user-event/intro#writing-tests-with-userevent
function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}
