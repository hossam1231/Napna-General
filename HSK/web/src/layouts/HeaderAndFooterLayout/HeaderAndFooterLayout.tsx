import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Link, routes } from '@redwoodjs/router'
import Grid from '@mui/material/Grid'
import { useAuth } from '@redwoodjs/auth'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

type Anchor = 'bottom'

export function TemporaryDrawer() {
  const [state, setState] = React.useState({
    bottom: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      {(['bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

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
            <Grid
              item
              sx={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <Box sx={{ mr: '20px' }}>
                <Link to={routes.pricing()}>Pricing</Link>
              </Box>
              <Box sx={{ mr: '5px' }}>
                <TemporaryDrawer />
              </Box>
              <Box sx={{ mr: '5px' }}>
                <>
                  {isAuthenticated ? (
                    <IconButton
                      onClick={logOut}
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <LogoutIcon />
                    </IconButton>
                  ) : (
                    <Link to={routes.login()}>
                      <Button
                        href="#"
                        variant="outlined"
                        sx={{ my: 1, mx: 1.5 }}
                      >
                        Login
                      </Button>
                    </Link>
                  )}
                </>
              </Box>
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
