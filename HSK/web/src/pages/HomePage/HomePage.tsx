import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Pricing } from 'src/components/HomePage/Index'
import ShopsCell from 'src/components/ShopsCell'


const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Pricing />
      <ShopsCell />
    </>
  )
}

export default HomePage
