import LanguageIcon from '@mui/icons-material/Language'
import { Box, Grid, Divider } from '@mui/material'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

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
                  <LanguageIcon sx={{ ml: '10px' }} />
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
              mt: '25px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexGrow: '1',
            }}
            item
            xs={10}
          >
            <div>
              <h1>Napna</h1>
            </div>
            <div style={{ display: 'flex' }}>
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

              <div style={{ display: 'flex' }}>
                <div>
                  <p>Sign up</p>
                </div>
                <div>
                  <p>Sign up</p>
                </div>
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
      <footer style={{ height: '80vh' }}>
        <Grid container sx={{ alignItems: 'center', width: '100%' }}>
          <Grid item xs={1}>
            <div className="flex justify-between items-center p-4 text-sm text-gray-600">
              <p>helllo</p> <p>hdaod</p>
            </div>
          </Grid>

          <Grid item xs={10}>
            <Divider />
            <div className="flex justify-between items-center p-4 text-sm text-gray-600">
              <p>helllo</p> <p>hdaod</p>
            </div>
          </Grid>

          <Grid item xs={1}>
            <div className="flex justify-between items-center p-4 text-sm text-gray-600">
              <p>helllo</p> <p>hdaod</p>
            </div>
          </Grid>
        </Grid>
        <Divider />

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
