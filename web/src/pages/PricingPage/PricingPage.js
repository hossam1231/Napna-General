import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ProductsCell from 'src/components/ProductsCell'

const PricingPage = () => {
  return (
    <>
      <MetaTags title="Pricing" description="Pricing page" />
      <ProductsCell />
    </>
  )
}

export default PricingPage
