import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import CollectionCell from 'src/components/CollectionCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <CollectionCell />
      <main>Home</main>
    </>
  )
}

export default HomePage
