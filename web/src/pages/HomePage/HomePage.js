import AddCardIcon from '@mui/icons-material/AddCard'
import FaceIcon from '@mui/icons-material/Face'
import GradeIcon from '@mui/icons-material/Grade'
import InsightsIcon from '@mui/icons-material/Insights'
import InventoryIcon from '@mui/icons-material/Inventory'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'
import StorefrontIcon from '@mui/icons-material/Storefront'
import { Box, Grid } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import { ProductSearchModal } from 'src/components/Search/Index'

// import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  const landingPageMockup = './landingPageMockup.png'

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {/* <ArticlesCell /> */}
      <Grid className="dark:bg-slate-800" container spacing={3}>
        <Grid item xs={1}>
          {/* gutter */}
        </Grid>

        <Grid item sm={5}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <p
                style={{ fontSize: '65px', marginBottom: '20px' }}
                className={'Manrope700 dark:text-white'}
              >
                Move faster with intuitive React UI tools
              </p>
            </Grid>

            <Grid item xs={12}>
              <p
                className="text-slate-500 dark:text-slate-400"
                style={{ marginBottom: '20px' }}
              >
                MUI offers a comprehensive suite of UI tools to help you ship
                new features faster. Start with Material UI, our fully-loaded
                component library, or bring your own design system to our
                production-ready components.
              </p>
            </Grid>
            <Grid item xs={12}>
              <ProductSearchModal />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* image */}
          <div className="fill">
            <img src={require('./landingPageMockup.png')} />
          </div>
        </Grid>
        <Grid item xs={12}>
          {/* gutter */}
        </Grid>
      </Grid>

      {/* <Grid container sx={{ marginTop: '20px' }} spacing={3}>
        <Grid item sm={12}>
// testemonials
        </Grid>
        <Grid
          sx={{
            jusitfyContent: 'center',
            alignItems: 'center',
            alignText: 'center',
          }}
          item
          sm={12}
        >
          <p>
            The world's best product teams trust MUI to deliver an unrivaled
            experience for both developers and users.
          </p>
        </Grid>
      </Grid> */}

      <Grid container sx={{ marginTop: '20px' }} spacing={3}>
        <Grid item sm={1}>
          {/* gutter */}
        </Grid>

        <Grid item sm={10}>
          <p
            style={{ fontSize: '15px' }}
            className={'Manrope700 dark:text-white'}
          >
            Products
          </p>
          <p className="dark:text-slate-400">
            Every component you need is ready for production, build at an
            accelerated pace without sacrificing flexibility or control.
          </p>
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
            style={{ fontSize: '15px' }}
            className={'Manrope700 dark:text-white'}
          >
            Why build with Napna?
          </p>
          <p className="dark:text-slate-400">
            A delightful experience for you and your customers. Increase
            footfall, build lasting customer relations with ease. Start with
            Napna and create your own, sophisticated sales campagins.
          </p>
          <Grid container sx={{ marginTop: '20px' }} spacing={3}>
            <Grid item sm={4}>
              <div className="bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl ">
                <div>
                  <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <GradeIcon sx={{ color: 'white' }} />
                    </svg>
                  </span>
                </div>
                <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                  Loyalty schemes and rewards
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  Give back to customers for using your services. Create loyalty
                  schemes, rewards and cashback for your customers .
                </p>
              </div>
            </Grid>
            <Grid item sm={4}>
              <div className="bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <div>
                  <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <StorefrontIcon sx={{ color: 'white' }} />
                    </svg>
                  </span>
                </div>
                <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                  Virtual storefront
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  Allow your customers to buy, search products and book
                  reservations, without having to visit. Solidify your brand and
                  its online presence.
                </p>
              </div>
            </Grid>
            <Grid item sm={4}>
              <div className="bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <div>
                  <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <InsightsIcon sx={{ color: 'white' }} />
                    </svg>
                  </span>
                </div>
                <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                  Identify trends
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  Be the first on local trends and discover new products. Get a
                  realtime view of your customers and their behavior.
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
            style={{ fontSize: '15px' }}
            className={'Manrope700 dark:text-white'}
          >
            Production-ready components
          </p>
          <p className="dark:text-slate-400">
            Beautiful and powerful, right out of the box
          </p>
        </Grid>

        <Grid item sm={1}>
          {/* gutter */}
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: '20px' }} spacing={3}>
        <Grid item lg={1} />
        <Grid item xs={10}>
          <span
            href="#"
            className="block p-6 max-w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-[#122547] dark:border-[#1E4894] dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#CAE8FF]">
              Get started now
            </h5>
            <p className="font-normal text-gray-700 dark:text-[#A7D3F8]">
              Become a partner today and join the list of growing merchants
              bringing more to their business with Napna.
            </p>
          </span>
        </Grid>
        <Grid item lg={1} />
      </Grid>

      <Grid container sx={{ marginTop: '20px' }} spacing={3}>
        <Grid item sm={1}>
          {/* gutter */}
        </Grid>

        <Grid item sm={10}>
          <p
            style={{ fontSize: '15px' }}
            className={'Manrope700 dark:text-white'}
          >
            Ship your next project faster
          </p>
          <p className="dark:text-slate-400">
            Find out why MUI's tools are trusted by thousands of open source
            developers and teams around the world.
          </p>
        </Grid>

        <Grid item sm={1}>
          {/* gutter */}
        </Grid>

        <Grid item sm={12} />
      </Grid>

      <Grid
        container
        sx={{ backgroundColor: 'black', marginTop: '20px' }}
        spacing={3}
      >
        <Grid item sm={1}>
          {/* gutter */}
        </Grid>

        <Grid item sm={6}>
          {/* <p
            style={{  fontSize: '15px' }}
            className={'Manrope700'}
          >
            Download App
          </p> */}
          <p>
            People around you are finding amazing savings and earning rewards
            while they shop using the Napna App.
          </p>

          <Box sx={{ display: 'flex' }}>
            <img
              src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png"
              alt="app-store"
            />
          </Box>
        </Grid>

        <Grid item sm={4}>
          <img
            src="https://treact.owaiskhan.me/static/media/app-mockup.3cdce84c.png"
            alt="app-store"
          />
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
              <p className="dark:text-slate-400">
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
                  <p className="dark:text-slate-400">
                    Gustavo de Paula, Specialist Software Engineer
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item sm={6}>
              <Grid container spacing={3}>
                <Grid item sm={6}>
                  <div className="bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 ">
                    <div>
                      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <MarkEmailReadIcon sx={{ color: 'white' }} />
                        </svg>
                      </span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                      Mailiing lists
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                      Manage and send newsletters. Track and improve promotions
                      you offer to your customers.
                    </p>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className="bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 ">
                    <div>
                      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <AddCardIcon sx={{ color: 'white' }} />
                        </svg>
                      </span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                      Payments & orders
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                      Accept online payments. Manage your payment methods.
                      Collect and process orders from your customers.
                    </p>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className="bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 ">
                    <div>
                      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <InventoryIcon sx={{ color: 'white' }} />
                        </svg>
                      </span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                      Stock managment
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                      The Zero Gravity Pen can be used to write in any
                      orientation, including upside-down. It even works in outer
                      space.
                    </p>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className="bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 ">
                    <div>
                      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <FaceIcon sx={{ color: 'white' }} />
                        </svg>
                      </span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                      Employee managment
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
