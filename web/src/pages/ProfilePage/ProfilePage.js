import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProfilePage = () => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />
      <p>
        customer portal yarn redwood generate
        pagehttps://billing.stripe.com/p/login/test_6oE6oR2nVgE4dNe144
      </p>
      <h1>ProfilePage</h1>
      <p>
        Find me in <code>./web/src/pages/ProfilePage/ProfilePage.js</code>
      </p>
      <p>
        My default route is named <code>profile</code>, link to me with `
        <Link to={routes.profile()}>Profile</Link>`
      </p>
    </>
  )
}

export default ProfilePage
