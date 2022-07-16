import React, { useState } from 'react'

import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import DirectionsIcon from '@mui/icons-material/Directions'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  Chip,
  Grid,
  Modal,
  Divider,
  IconButton,
  Paper,
  InputBase,
} from '@mui/material'

const dummyData = [
  { name: 'Green' },
  { name: 'fpok' },
  { name: 'sfijp' },
  { name: 'dcisjodc' },
  { name: 'ddeefsd' },
  { name: 'dddddsss' },
]

export const SearchModal = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [favourites, setFavourites] = useState()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [recents, setRecents] = useState()

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const style = {
    position: 'absolute' as const,
    top: '50%',
    width: '70vh',
    height: '65vh',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
  }

  return (
    <>
      <Box sx={{ margin: '10px', display: 'flex' }}>
        <Box
          className="getStartedButton"
          onClick={handleOpen}
          sx={{
            borderRadius: '10px',
            backgroundColor: '#097FFF',
            mr: '1rem',
            pl: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px',
          }}
        >
          <p style={{ color: 'white' }} className="Manrope600">
            Get started
          </p>
          <ChevronRightIcon style={{ color: 'white' }} />
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
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
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
            <Chip
              sx={{ marginRight: '5px', marginTop: '5px' }}
              label="Oregano"
            />
            <Chip
              sx={{ marginRight: '5px', marginTop: '5px' }}
              label="Haircut"
            />
            <Chip sx={{ marginRight: '5px', marginTop: '5px' }} label="Lamps" />
          </Box>
        </Box>
      </Box>

      {/* MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: 'flex' }}>
            <SearchIcon sx={{ color: '#097FFF' }} />
            <InputBase
              autoFocus
              sx={{ width: '100%', ml: 1, flex: 1 }}
              placeholder="What are searching for?"
              inputProps={{ 'aria-label': 'Search Napna' }}
            />

            {/* <Box sx={{ padding: '10px', backgroundColor: 'black' }}>
              <p>esc</p>
            </Box> */}
          </Box>
          <Divider />

          <Grid sx={{ marginTop: '10px' }} container>
            <Grid sx={{ marginTop: '10px' }} item lg={6}>
              <p
                style={{ fontSize: '12px', color: '#3E505F' }}
                className="Manrope700"
              >
                Getting started
              </p>

              <Box sx={{ marginTop: '5px' }}>
                {dummyData.map(function (item, i) {
                  return <li key={i}>{item.name}</li>
                })}
              </Box>
            </Grid>
            <Grid sx={{ marginTop: '10px' }} item lg={6}>
              <p
                style={{ fontSize: '12px', color: '#3E505F' }}
                className="Manrope700"
              >
                Getting started
              </p>

              <Box sx={{ marginTop: '5px' }}>
                {dummyData.map(function (item, i) {
                  return <li key={i}>{item.name}</li>
                })}
              </Box>
            </Grid>
          </Grid>

          <Grid sx={{ marginTop: '10px' }} container>
            <Grid sx={{ marginTop: '10px' }} item lg={6}>
              <p
                style={{ fontSize: '12px', color: '#3E505F' }}
                className="Manrope700"
              >
                Getting started
              </p>

              <Box sx={{ marginTop: '5px' }}>
                {dummyData.map(function (item, i) {
                  return <li key={i}>{item.name}</li>
                })}
              </Box>
            </Grid>

            <Grid sx={{ marginTop: '10px' }} item lg={6}>
              <p
                style={{ fontSize: '12px', color: '#3E505F' }}
                className="Manrope700"
              >
                Getting started
              </p>
              <Box sx={{ marginTop: '5px' }}>
                {dummyData.map(function (item, i) {
                  return <li key={i}>{item.name}</li>
                })}
              </Box>
            </Grid>
          </Grid>

          {recents && (
            <>
              <p
                style={{ fontSize: '12px', color: '#3E505F' }}
                className="Manrope700"
              >
                Recent
              </p>
            </>
          )}

          {favourites && (
            <>
              <p
                style={{ fontSize: '12px', color: '#3E505F' }}
                className="Manrope700"
              >
                Favourite
              </p>
            </>
          )}
        </Box>
      </Modal>
    </>
  )
}

export default SearchModal
