import LanguageIcon from '@mui/icons-material/Language'
import { Box, Grid, Divider } from '@mui/material'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

import { footerData } from 'src/data/HomeLayout'

const HomeLayout = ({ children }) => {
  return (
    <>
      <header
        style={{ height: '15vh' }}
        className="relative  justify-between items-center bg-white"
      >
        <div
          style={{
            alignItems: 'center',
            width: '100%',
            height: '5vh',
            backgroundColor: 'black',
          }}
        >
          <Grid container sx={{ alignItems: 'center', width: '100%' }}>
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
                <p style={{ color: 'white' }} className={'Manrope200'}>
                  Login
                </p>
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
              <h1>Napna</h1>
            </div>
            <div style={{ alignItems: 'center', display: 'flex' }}>
              <div>
                <ul className="flex items-center font-light">
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
                </ul>
              </div>

              <div
                style={{
                  alignItems: 'center',
                  mx: '10px',
                  display: 'flex',
                }}
              >
                <button
                  style={{
                    marginLeft: '30px',
                    marginRight: '10px',
                    borderRadius: '20px',
                    borderColor: 'black',
                    borderWidth: '1px',
                  }}
                  className="py-2 px-4 hover:bg-black text-white transition duration-100 rounded"
                >
                  <p style={{ color: 'black' }} className="Manrope600">
                    Sign up
                  </p>
                </button>
                <button
                  style={{ borderRadius: '20px' }}
                  className="py-2 px-4 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 duration-100 "
                >
                  <p style={{ color: 'white' }} className="Manrope600">
                    Contact sales
                  </p>
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xs={1}>
            {/* gutter */}
          </Grid>
        </Grid>
      </header>
      <Divider />
      <main className="max-w-4xl mx-auto p-12 bg-white shadow rounded-b">
        {children}
      </main>
      <footer>
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
                <p> Keep up to date </p>
                <p>Join our newsletter for regular updates. No spam ever.</p>
              </Grid>
              <Grid item xs={6}>
                <Grid container>
                  {footerData.map(function (item, i) {
                    return (
                      <Grid key={i} item xs={3}>
                        <p className="Manrope800">{item.title}</p>
                        <ul>
                          {item.data.map(function (item, i) {
                            return (
                              <li key={i}>
                                <p className="Manrope200">{item}</p>
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
          <p>© 2013 - 2022 Semptia® Inc. All Rights Reserved.</p>
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

{
  /* <Link
className="text-blue-400 hover:text-blue-100 transition duration-100"
to={routes.home()}
> */
}

{
  /* <Link
className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
to={routes.contact()}
> */
}

{
  /* <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-blue-400 hover:text-blue-100 transition duration-100"
            to={routes.home()}
          >
            Redwood Blog
          </Link>
        </h1>
        <nav style={{ position: 'absolute', left: '50vh', right: '50vh' }}>
          <ul className="relative flex items-center font-light">
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
              {isAuthenticated ? (
                <div>
                  <button type="button" onClick={logOut} className="py-2 px-4">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()} className="py-2 px-4">
                  Login
                </Link>
              )}
            </li>
          </ul>
          {isAuthenticated && (
            <div className="absolute bottom-1 right-0 mr-12 text-xs text-blue-300">
              {currentUser.email}
            </div>
          )}
        </nav>

        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.about()}
              >
                About
              </Link>
            </li>
          </ul>
        </nav> */
}
{
  /* <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-blue-400 hover:text-blue-100 transition duration-100"
            to={routes.home()}
          >
            Redwood Blog
          </Link>
        </h1>
        <nav style={{ position: 'absolute', left: '50vh', right: '50vh' }}>
          <ul className="relative flex items-center font-light">
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
              {isAuthenticated ? (
                <div>
                  <button type="button" onClick={logOut} className="py-2 px-4">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()} className="py-2 px-4">
                  Login
                </Link>
              )}
            </li>
          </ul>
          {isAuthenticated && (
            <div className="absolute bottom-1 right-0 mr-12 text-xs text-blue-300">
              {currentUser.email}
            </div>
          )}
        </nav>

        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.about()}
              >
                About
              </Link>
            </li>
          </ul>
        </nav> */
}
