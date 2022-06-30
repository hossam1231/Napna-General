import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CssBaseline from '@mui/material/CssBaseline'
import StarIcon from '@mui/icons-material/StarBorder'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import GlobalStyles from '@mui/material/GlobalStyles'
import Container from '@mui/material/Container'
import { Link, routes } from '@redwoodjs/router'
import Grid from '@mui/material/Grid'
import { useAuth } from '@redwoodjs/auth'

type HeaderAndFooterLayoutProps = {
  children?: React.ReactNode
}

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const HeaderAndFooterLayout = ({ children }: HeaderAndFooterLayoutProps) => {
  const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Resources',
      description: [
        'Resource',
        'Resource name',
        'Another resource',
        'Final resource',
      ],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ]
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Grid
            container
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Grid item>
              <Link to={routes.home()}>
                <Typography
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ marginLeft: '15px', flexGrow: 1 }}
                >
                  Napna
                </Typography>
              </Link>
            </Grid>
            <Grid item sx={{ alignItems: 'center', display: 'flex' }}>
              <Link to={routes.pricing()}>Pricing</Link>
              <>
                {isAuthenticated ? (
                  <button type="button" onClick={logOut}>
                    Logout
                  </button>
                ) : (
                  <Link to={routes.login()}>
                    <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                      Login
                    </Button>
                  </Link>
                )}
              </>
            </Grid>
          </Grid>
        </AppBar>
      </header>

      <>{children}</>
      <footer>
        {/* Footer */}
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            py: [3, 6],
          }}
        >
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Typography variant="subtitle1" color="text.secondary">
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Container>
        {/* End footer */}
      </footer>
    </>
  )
}

export default HeaderAndFooterLayout
