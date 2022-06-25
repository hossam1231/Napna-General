import { MetaTags } from '@redwoodjs/web'
import ShopCell from 'src/components/ShopCell'

interface Props {
  id: string
}

const ShopPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Shop" description="Shop page" />

      <ShopCell id={id} />
    </>
  )
}

export default ShopPage
