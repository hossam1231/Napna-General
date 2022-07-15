import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MarketPage = () => {
  return (
    <>
      <MetaTags title="Market" description="Market page" />

      <h1>MarketPage</h1>
      <p>
        Find me in <code>./web/src/pages/MarketPage/MarketPage.js</code>
      </p>
      <p>
        My default route is named <code>market</code>, link to me with `
        <Link to={routes.market()}>Market</Link>`
      </p>
    </>
  )
}

export default MarketPage
