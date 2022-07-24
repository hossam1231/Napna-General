import CartProvider from 'src/components/CartProvider'
import MainLayout from 'src/layouts/MainLayout'

import PricingPage from './PricingPage'

export const generated = () => {
  return <PricingPage />
}

export default {
  title: 'Pages/PricingPage',
  decorators: [
    (Story) => (
      <CartProvider>
        <MainLayout>
          <Story />
        </MainLayout>
      </CartProvider>
    ),
  ],
}
