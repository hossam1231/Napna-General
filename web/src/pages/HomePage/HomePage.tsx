import React from 'react'

import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import SearchModal from 'src/components/src/SearchModal'

const HomePage = () => {
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
          <SearchModal />
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
    </>
  )
}

export default HomePage
