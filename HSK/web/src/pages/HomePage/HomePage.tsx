import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Box, Chip, Modal } from '@mui/material'
import { Testemonials } from 'src/components/PricingPage/Index'

const style = {
  position: 'absolute' as 'absolute',
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
        <Grid item sx={{ justifyContent: 'center', flex: '1' }} lg={6}>
          <Typography variant="h2" component="h2" gutterBottom>
            Where you at though?
          </Typography>
          <Typography gutterBottom>
            Earn rewards, reduce the amount of CO2 you emit all by saving time
            waiting for things and helping you find the things that matter to
            you most locally.
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Box onClick={handleOpen} sx={{ mr: '1rem' }}>
              <Typography>Get started</Typography>
            </Box>
            <Box onClick={handleOpen}>
              <Typography>What are searching for?</Typography>
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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

      <Testemonials />

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
