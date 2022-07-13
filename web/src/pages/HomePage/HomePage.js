import { Box, Grid } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import { ProductSearchModal } from 'src/components/Search/Index'

// import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {/* <ArticlesCell /> */}
      <Grid sx={{ marginTop: '20px' }} container spacing={3}>
        <Grid item xs={1}>
          {/* gutter */}
        </Grid>

        <Grid item sm={5}>
          <p style={{ fontSize: '65px' }} className={'Manrope700'}>
            Move faster with intuitive React UI tools
          </p>
          <p style={{ color: '#4B5563' }}>
            MUI offers a comprehensive suite of UI tools to help you ship new
            features faster. Start with Material UI, our fully-loaded component
            library, or bring your own design system to our production-ready
            components.
          </p>
          <Box sx={{ marginTop: '20px', display: 'flex' }}>
            <ProductSearchModal />
          </Box>
        </Grid>
        <Grid item xs={12} sm={7}>
          {/* image */}
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: '20px' }} spacing={3}>
        <Grid item sm={1}>
          {/* gutter */}
        </Grid>

        <Grid item sm={10}>
          <p
            style={{ color: 'blue', fontSize: '15px' }}
            className={'Manrope700'}
          >
            Products
          </p>
          <p>Every component you need is ready for production</p>
          Build at an accelerated pace without sacrificing flexibility or
          control.
        </Grid>

        <Grid item sm={1}>
          {/* gutter */}
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: '20px' }} spacing={3}>
        <Grid item sm={1}>
          {/* gutter */}
        </Grid>

        <Grid item sm={10}>
          <p
            style={{ color: 'blue', fontSize: '15px' }}
            className={'Manrope700'}
          >
            Why build with MUI?
          </p>
          <p>
            A delightful experience for you and your users Timeless aesthetics
            Build beautiful UIs with ease. Start with Google's Material Design,
            or create your own sophisticated theme.
          </p>
          <Grid container sx={{ marginTop: '20px' }} spacing={3}>
            <Grid item sm={4}>
              <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl ">
                <div>
                  <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    ></svg>
                  </span>
                </div>
                <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                  Writes Upside-Down
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  The Zero Gravity Pen can be used to write in any orientation,
                  including upside-down. It even works in outer space.
                </p>
              </div>
            </Grid>
            <Grid item sm={4}>
              <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <div>
                  <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    ></svg>
                  </span>
                </div>
                <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                  Writes Upside-Down
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  The Zero Gravity Pen can be used to write in any orientation,
                  including upside-down. It even works in outer space.
                </p>
              </div>
            </Grid>{' '}
            <Grid item sm={4}>
              <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <div>
                  <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    ></svg>
                  </span>
                </div>
                <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                  Writes Upside-Down
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  The Zero Gravity Pen can be used to write in any orientation,
                  including upside-down. It even works in outer space.
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={1}>
          {/* gutter */}
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: '20px' }} spacing={3}>
        <Grid item sm={1}>
          {/* gutter */}
        </Grid>

        <Grid item sm={10}>
          <p
            style={{ color: 'blue', fontSize: '15px' }}
            className={'Manrope700'}
          >
            Production-ready components
          </p>
          <p>Beautiful and powerful, right out of the box</p>
        </Grid>

        <Grid item sm={1}>
          {/* gutter */}
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: '20px' }} spacing={3}>
        <Grid item sm={1}>
          {/* gutter */}
        </Grid>

        <Grid item sm={10}>
          <p
            style={{ color: 'blue', fontSize: '15px' }}
            className={'Manrope700'}
          >
            Start now
          </p>
          <p>Ship your next project faster</p>
          <p>
            Find out why MUI's tools are trusted by thousands of open source
            developers and teams around the world.
          </p>
        </Grid>

        <Grid item sm={1}>
          {/* gutter */}
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ alignItems: 'center', marginTop: '20px' }}
        spacing={3}
      >
        <Grid item sm={1}>
          {/* gutter */}
        </Grid>

        <Grid item sm={10}>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <p>
                "MUI offers a wide variety of high quality components that have
                allowed us to ship features faster. MUI has been used by more
                than a hundred engineers in our organization. What's more, MUI's
                well architected customization system has allowed us to
                differentiate ourselves in the marketplace." Picture of Joona
                Rahko Joona Rahko, Staff Software Engineer Unity logo "MUI looks
                great and lets us deliver fast, thanks to their solid API design
                and documentation - it's refreshing to use a component library
                where you get everything you need from their site rather than
                Stack Overflow. We think the upcoming version, with extra themes
                and customizability, will make MUI even more of a game changer.
                We're extremely grateful to the team for the time and effort
                spent maintaining the project." Picture of Jean-Laurent de
                Morlhon Jean-Laurent de Morlhon, VP of Engineering Docker logo
                "After much research on React component libraries, we decided to
                ditch our in-house library for MUI, using its powerful
                customization system to implement our Design System. This simple
                move did a rare thing in engineering: it lowered our maintenance
                costs while enhancing both developer and customer experience.
                All of this was done without sacrificing the organization's
                branding and visual identity." Picture of Gustavo de Paula
              </p>

              <div
                style={{ marginTop: '40px' }}
                className="flex items-center space-x-6"
              >
                <div className="shrink-0">
                  <img
                    className="h-16 w-16 object-cover rounded-full"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                    alt="profile"
                  />
                </div>
                <div className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <p>Gustavo de Paula, Specialist Software Engineer</p>
                </div>
              </div>
            </Grid>
            <Grid item sm={6}>
              <Grid container spacing={3}>
                <Grid item sm={6}>
                  <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 ">
                    <div>
                      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        ></svg>
                      </span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                      Writes Upside-Down
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                      The Zero Gravity Pen can be used to write in any
                      orientation, including upside-down. It even works in outer
                      space.
                    </p>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 ">
                    <div>
                      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        ></svg>
                      </span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                      Writes Upside-Down
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                      The Zero Gravity Pen can be used to write in any
                      orientation, including upside-down. It even works in outer
                      space.
                    </p>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 ">
                    <div>
                      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        ></svg>
                      </span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                      Writes Upside-Down
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                      The Zero Gravity Pen can be used to write in any
                      orientation, including upside-down. It even works in outer
                      space.
                    </p>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 ">
                    <div>
                      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        ></svg>
                      </span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                      Writes Upside-Down
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                      The Zero Gravity Pen can be used to write in any
                      orientation, including upside-down. It even works in outer
                      space.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={1}>
          {/* gutter */}
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
