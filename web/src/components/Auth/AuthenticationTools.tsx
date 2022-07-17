import * as React from 'react'

import { ExpandMore } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import { Divider, InputBase } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useAuth } from '@redwoodjs/auth'
import FaceIcon from '@mui/icons-material/Face'
import { navigate, routes } from '@redwoodjs/router'

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

export default function AuthenticationTools({type}: {type: string}) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { loading, isAuthenticated, logIn, logOut } = useAuth()

const gotoProfile = () => {
  navigate(routes.profile())
  if (!isAuthenticated) {
    handleOpen()
  }
}

  if (loading) {
    return null
  }


if (isAuthenticated) {
    if (type == "modal") {
    return (
        <div>
                    <button
                    onClick={handleOpen}
                      style={{
                        marginLeft: '30px',
                        marginRight: '10px',
                        borderRadius: '20px',
                        borderColor: 'black',
                        borderWidth: '1px',
                      }}
                      className="py-2 px-4 text-black hover:bg-black hover:text-white transition duration-100 rounded"
                    >

                      <p className="Manrope600">Sign out</p>
                    </button>


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
              <button  onClick={async () => {
        if (isAuthenticated) {
          await logOut()
          handleClose()
          navigate('/')
        }
      }} >Sign out</button>
              <p>or alternativly</p>
              <p>log out of all devices</p>
              </Box>
          </Fade>
        </div>
      </Modal>
    </div>
)
} else if (type == "button") {
return (
  <button
  onClick={async () => {
    if (isAuthenticated) {
      await logOut()
      navigate('/')
    }
  }}
  style={{
    marginLeft: '30px',
    marginRight: '10px',
    borderRadius: '20px',
    borderColor: 'black',
    borderWidth: '1px',
  }}
  className="py-2 px-4 bg-black text-white hover:bg-white hover:text-black transition duration-100 rounded"
>
  <p className="Manrope600">Log out</p>
</button>
)

} else if (type == "icon") {
return (
<FaceIcon  sx={{color:'white'}} onClick={gotoProfile} />)}






} else {
    return (
        <div>
          {type == "modal" &&
                    <button
                    onClick={handleOpen}
                      style={{
                        marginLeft: '30px',
                        marginRight: '10px',
                        borderRadius: '20px',
                        borderColor: 'black',
                        borderWidth: '1px',
                      }}
                      className="py-2 px-4 text-black hover:bg-black hover:text-white transition duration-100 rounded"
                    >

                      <p className="Manrope600">Sign in</p>
                    </button>
  }
  { type == "button" &&
 <button
 onClick={async () => {

     await logOut()

     navigate('/')

 }}
 style={{
   marginLeft: '30px',
   marginRight: '10px',
   borderRadius: '20px',
   borderColor: 'black',
   borderWidth: '1px',
 }}
 className="py-2 px-4 bg-black text-white hover:bg-white hover:text-black transition duration-100 rounded"
>
 <p className="Manrope600">Log in</p>
</button>

  }

  { type == "icon" && <FaceIcon sx={{color:'white'}} onClick={handleOpen}/>}

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
              <button onClick={async () => {
               await logIn()
               handleClose()
}} >Sign in with google</button>

              </Box>
          </Fade>
        </div>
      </Modal>
    </div>
)
}
}



