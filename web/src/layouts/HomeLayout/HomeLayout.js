import FaceIcon from '@mui/icons-material/Face'
import LanguageIcon from '@mui/icons-material/Language'
import StoreIcon from '@mui/icons-material/Store'
import { Box, Grid, Divider } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'

import AuthenticationTools from 'src/components/Auth/AuthenticationTools'
import { footerData } from 'src/data/HomeLayout'

const HomeLayout = ({ children }) => {
  return (
    <>
      <header
        style={{ height: '15vh' }}
        className="relative  justify-between items-center bg-white dark:bg-slate-800"
      >
        <div
          style={{
            alignItems: 'center',
            width: '100%',
            height: '5vh',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'black',
          }}
        >
          <Grid container sx={{ width: '100%' }}>
            <Grid item xs={1}>
              {/* gutter */}
            </Grid>
            <Grid
              sx={{ justifyContent: 'space-between', display: 'flex' }}
              item
              xs={10}
            >
              <Box sx={{ display: 'flex' }}>
                <p style={{ color: 'white' }} className={'Manrope300'}>
                  Estimate the revenue impact to your customer-facing business
                  using our ROI Calculator
                </p>
                <Box sx={{ ml: '20px' }}>
                  <p style={{ color: 'white' }} className={'Manrope600'}>
                    Learn more →
                  </p>
                </Box>
              </Box>

              <Box sx={{ display: 'flex' }}>
                <AuthenticationTools type={'icon'} />

                <Box sx={{ display: 'flex', ml: '20px' }}>
                  <p style={{ color: 'white' }} className={'Manrope600'}>
                    English
                  </p>
                  <LanguageIcon sx={{ color: 'white', ml: '10px' }} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={1}>
              {/* gutter */}
            </Grid>
          </Grid>
        </div>
        <Grid container sx={{ alignItems: 'center', width: '100%' }}>
          <Grid item xs={1}>
            {/* gutter */}
          </Grid>

          <Grid
            sx={{
              mt: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            item
            xs={10}
          >
            <div>
              <h1 className="dark:text-white">Napna</h1>
            </div>
            <div style={{ alignItems: 'center', display: 'flex' }}>
              <div>
                <ul className="flex dark:text-white items-center font-light">
                  <li>
                    <Link
                      className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                      to={routes.about()}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                      to={routes.contact()}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                      to={routes.pricing()}
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                style={{
                  alignItems: 'center',
                  mx: '10px',
                  display: 'flex',
                }}
              >
                <AuthenticationTools type={'modal'} />

                <Link to={routes.contact()}>
                  <button
                    style={{ borderRadius: '20px' }}
                    className="py-2 px-4 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 duration-100 "
                  >
                    <p style={{ color: 'white' }} className="Manrope600">
                      Contact sales
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={1}>
            {/* gutter */}
          </Grid>
        </Grid>
      </header>
      <Divider />
      <main className="dark:bg-slate-600" style={{ width: '100%' }}>
        {children}
      </main>
      <footer className="dark:bg-slate-600">
        <Grid container sx={{ alignItems: 'center', width: '100%' }}>
          <Grid item xs={1}>
            {/* gutter */}
          </Grid>

          <Grid item xs={10}>
            <Divider sx={{ my: '20px' }} />
            <Grid container>
              <Grid item xs={1}>
                {/* gutter */}
              </Grid>
              <Grid item xs={5}>
                <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                  <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 " fill="none" viewBox="0 0 24 24">
                      <StoreIcon />
                    </svg>
                    <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
                      Merchant portal
                    </h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">
                    Head to the merchant portal to manage your business.
                  </p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <Grid container>
                  {footerData.map(function (item, i) {
                    return (
                      <Grid key={i} item xs={3}>
                        <p className="Manrope800 dark:text-white">
                          {item.title}
                        </p>
                        <ul>
                          {item.data.map(function (item, i) {
                            return (
                              <li key={i}>
                                <p className="Manrope200 dark:text-slate-400">
                                  {item}
                                </p>
                              </li>
                            )
                          })}
                        </ul>
                      </Grid>
                    )
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={1}>
            {/* gutter */}
          </Grid>
        </Grid>
        <Divider sx={{ my: '20px' }} />
        <div className="flex justify-between items-center p-4 text-sm text-gray-600">
          <p>© 2013 - 2022 Semptia® Ltd. All Rights Reserved.</p>
          <Box sx={{ alignItems: 'center', display: 'flex', mr: '10px' }}>
            <p>Status • Legal • Privacy • Terms</p>
            <Box sx={{ alignItems: 'center', display: 'flex', ml: '20px' }}>
              <p className={'Manrope600'}>English</p>
              <LanguageIcon sx={{ ml: '10px' }} />
            </Box>
          </Box>
        </div>
      </footer>
    </>
  )
}

export default HomeLayout
