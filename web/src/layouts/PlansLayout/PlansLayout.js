import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const PlansLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.plans()} className="rw-link">
            Plans
          </Link>
        </h1>

        <Link to={routes.newPlan()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Plan
        </Link>
      </header>

      <main className="rw-main">{children}</main>
    </div>
  )
}

export default PlansLayout
