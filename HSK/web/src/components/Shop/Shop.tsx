import { Link, routes } from '@redwoodjs/router'

import type { Product } from 'types/graphql'

interface Props {
  shop: Product
}

const Shop = ({ shop }: Props) => {
  return (
    <shop>
      <header>
        <h2>
          <Link to={routes.shop({ id: shop.id })}>{shop.title}</Link>
        </h2>
      </header>
      <div>{shop.title}</div>
      <div>Posted at: {shop.createdAt}</div>
    </shop>
  )
}

export default Shop
