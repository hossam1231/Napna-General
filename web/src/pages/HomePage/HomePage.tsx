import React from 'react'

import DirectionsIcon from '@mui/icons-material/Directions'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Chip, Modal } from '@mui/material'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const HomePage = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Grid
        container
        sx={{
          height: '85vh',
          width: '100%',
          borderWidth: '1px',
          borderColor: 'black',
        }}
      >
        <Grid
          item
          sx={{
            borderWidth: '1px',
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            flex: '1',
          }}
          lg={6}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            Where are you at though?
          </Typography>
          <Typography gutterBottom>
            Earn rewards, reduce the amount of CO2 you emit all by saving time
            waiting for things and helping you find the things that matter to
            you most locally.
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Box onClick={handleOpen} sx={{ mr: '1rem' }}>
              <Button>Get started</Button>
            </Box>
            <Box onClick={handleOpen}>
              <Paper
                component="form"
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: 400,
                }}
              >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="What are searching for?"
                  inputProps={{ 'aria-label': 'Search Napna' }}
                />
                <IconButton
                  type="submit"
                  sx={{ p: '10px' }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                  color="primary"
                  sx={{ p: '10px' }}
                  aria-label="directions"
                >
                  <DirectionsIcon />
                </IconButton>
              </Paper>

              <Box sx={{ display: 'flex' }}>
                <Chip label="Oregano" />
                <Chip label="Haircut" />
                <Chip label="Lamps" />
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item lg={6}>
          {/* image */}
        </Grid>
      </Grid>

      <Grid container>
        <Grid item lg={2}>
          {/* gutter */}
        </Grid>
        <Grid item lg={8}>
          <Box
            sx={{
              width: '100%',
              height: '20vh',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography>Get the app</Typography>
            </Box>
            <Box>
              <Box>{/* appple */}</Box>
              <Box>{/* play store */}</Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2}>
          {/* gutter */}
        </Grid>
      </Grid>

      <Grid container>
        <Grid item lg={12}>
          <Typography>
            Beautiful and powerful, right out of the boxBeautiful and powerful,
            right out of the box
          </Typography>
          {/* show image of scan of plant with type of room it would like and water frequency info with it and price ect */}
        </Grid>
      </Grid>

      <Grid container>
        <Grid item lg={12}>
          <Typography>
            A delightful experience for you and your users
          </Typography>
        </Grid>
        <Grid item lg={3}></Grid>
        <Grid item lg={3}></Grid>
        <Grid item lg={3}></Grid>
        <Grid item lg={3}></Grid>
      </Grid>

      <Grid
        container
        sx={{
          borderWidth: '1px',
          borderColor: 'black',
          height: '85vh',
          width: '100%',
        }}
      >
        <Grid
          item
          sx={{
            alignText: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          lg={8}
        >
          <Box>
            <Typography>Download App</Typography>
            <Typography>
              People around you are are getting the most out of their area using
              the Napna App.
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Box>{/* apple */}</Box>
              <Box>{/* google */}</Box>
            </Box>
          </Box>
        </Grid>

        <Grid item lg={4}>
          {/* phone */}
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default HomePage
