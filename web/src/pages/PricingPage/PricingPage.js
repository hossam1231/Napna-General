import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PricesCell from 'src/components/PricesCell'

const PricingPage = () => {
  return (
    <>
      <MetaTags title="Pricing" description="Pricing page" />

      <PricesCell />
    </>
  )
}

export default PricingPage
