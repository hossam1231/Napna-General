import Grid from '@mui/material/Grid'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PricingPage = () => {
  return (
    <>
      <MetaTags title="Pricing" description="Pricing page" />
      <Grid
        sx={{ height: '100vh' }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <div className="group block max-w-xl mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 ">
            <div className="flex items-center space-x-3">
              <svg
                className="h-6 w-6 stroke-sky-500 "
                fill="none"
                viewBox="0 0 24 24"
              ></svg>
              <h3 className="text-slate-900  text-sm font-semibold">
                New project
              </h3>
            </div>
            <p className="text-slate-500  text-sm">
              Create a new project from a variety of starting templates.
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default PricingPage
