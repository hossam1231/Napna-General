import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MerchantPage = () => {
  return (
    <>
      <MetaTags title="Merchant" description="Merchant page" />

      <h1>MerchantPage</h1>
      <p>
        Find me in <code>./web/src/pages/MerchantPage/MerchantPage.js</code>
      </p>
      <p>
        My default route is named <code>merchant</code>, link to me with `
        <Link to={routes.merchant()}>Merchant</Link>`
      </p>
    </>
  )
}

export default MerchantPage
