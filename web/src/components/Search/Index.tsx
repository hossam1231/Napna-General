import * as React from 'react'

import { ExpandMore } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import { Divider } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,

  // bgcolor: 'background.paper',
  // borderRadius: '15px',
  // boxShadow: 24,
}

export function ProductSearchModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <a
        onClick={handleOpen}
        className="group block max-w-xs rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
      >
        <div className="flex items-center space-x-3">
          <SearchIcon />

          <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
            Try it out
          </h3>
        </div>
        <p className="text-slate-500 group-hover:text-white text-sm">
          Search a handful of merchants near you, find what your looking for
          locally.
        </p>
      </a>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
          }}
          className="backdrop-blur-sm bg-white/30"
        >
          <Fade in={open}>
            <Box
              className="group block max-w-xs rounded-lg bg-white ring-1 ring-slate-900/5 shadow-lg"
              sx={style}
            >
              <Box
                sx={{
                  padding: '20px',
                  width: '100%',
                  justifyContent: 'space-between',
                  display: 'flex',
                }}
              >
                <SearchIcon />
              </Box>
              <Divider />
              <Box
                sx={{
                  padding: '20px',
                  width: '100%',
                }}
              >
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Box>
          </Fade>
          <div
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '50%',
              transform: 'translate(-50%, 0)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                color: 'white',
                marginBottom: '40px',
              }}
              className={'Manrope300'}
            >
              Open in Napna
            </p>
            <ExpandMore
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translate(-50%, 0)',
                color: 'white',
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}

const Index = () => {
  return <div>Index</div>
}

export default Index
