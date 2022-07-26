import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PricingPage = () => {
  return (
    <>
      <MetaTags title="Pricing" description="Pricing page" />

      <div style={{ alignItems: 'center' }}>
        <div style={{ display: 'flex' }} className="max-w-xs">
          <div>
            <p>Plans</p>
          </div>
          <div>
            <p>Bespoke</p>
          </div>
        </div>
        <div>
          <p>Chose to get started</p>
        </div>
        <button className="group block max-w-xs bg-white mx-auto rounded-lg p-6 shadow-lg hover:bg-violet-600 focus:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 shadow-lg space-y-3">
          <div className="flex items-center space-x-3">
            {/* <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg> */}
            <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold  group-focus:text-white text-sm font-semibold  ">
              New project
            </h3>
          </div>
          <p className="text-slate-500 group-hover:text-white text-sm group-focus:text-white text-sm">
            Create a new project from a variety of starting templates.
          </p>
        </button>
        <p>Please enter the Wallet ID or Destination email</p>
      </div>
    </>
  )
}

export default PricingPage
