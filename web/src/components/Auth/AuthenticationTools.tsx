import * as React from 'react'

import FaceIcon from '@mui/icons-material/Face'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import GoogleIcon from '@mui/icons-material/Google'
import { Grid, TextField } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  width: '500px',
  height: '500px',
  transform: 'translate(-50%, -50%)',
}

const inputStyle = {
  textField: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 800,
  },
  input: {
    color: 'black',
  },
}

export default function AuthenticationTools({ type }: { type: string }) {
  const [open, setOpen] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { loading, isAuthenticated, logIn, logOut } = useAuth()

  React.useEffect(() => {
    console.log(email)
  }, [email])

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
    if (type == 'modal') {
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
            className="py-2 px-4 bg-black text-white transition duration-100 rounded"
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
                  <button
                    onClick={async () => {
                      if (isAuthenticated) {
                        await logOut()
                        handleClose()
                        navigate('/')
                      }
                    }}
                  >
                    Sign out
                  </button>
                  <p>or alternativly</p>
                  <p>log out of all devices</p>
                </Box>
              </Fade>
            </div>
          </Modal>
        </div>
      )
    } else if (type == 'button') {
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
    } else if (type == 'icon') {
      return <FaceIcon sx={{ color: 'white' }} onClick={gotoProfile} />
    }
  } else {
    return (
      <div>
        {type == 'modal' && (
          <button
            onClick={handleOpen}
            style={{
              marginLeft: '30px',
              marginRight: '10px',
              borderRadius: '20px',
              borderColor: 'black',
              borderWidth: '1px',
            }}
            className="py-2 px-4  bg-black text-white transition duration-100 rounded"
          >
            <p className="Manrope600">Sign in</p>
          </button>
        )}
        {type == 'button' && (
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
        )}

        {type == 'icon' && (
          <FaceIcon sx={{ color: 'white' }} onClick={handleOpen} />
        )}

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
                className="rounded-lg p-10 bg-white ring-1 ring-slate-900/5 shadow-lg"
                sx={style}
              >
                <Grid spacing={3} container style={{ width: '100%' }}>
                  <Grid item xs={12}>
                    <p className="Manrope500" style={{ fontSize: '15px' }}>
                      Welcome back
                    </p>
                    <p className="Manrope800" style={{ fontSize: '25px' }}>
                      Sign In
                    </p>
                  </Grid>

                  <Grid item xs={12}>
                    <input
                      placeholder="email"
                      type="email"
                      onChange={(text) => setEmail(text.target.value)}
                      className="Manrope800"
                      style={{
                        width: '100%',
                        borderWidth: '2px',
                        borderColor: 'black',
                        color: 'black',
                        borderRadius: '12.5px',
                        padding: '5px',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      type="password"
                      placeholder="password"
                      onChange={(text) => setPassword(text.target.value)}
                      className="Manrope800"
                      style={{
                        width: '100%',
                        borderWidth: '2px',
                        borderColor: 'black',
                        color: 'black',
                        borderRadius: '12.5px',
                        padding: '5px',
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <button
                      style={{
                        width: '100%',
                        backgroundColor: '#007AFF',
                        color: 'white',
                        height: '40px',
                        borderRadius: '12.5px',
                      }}
                      onClick={async () => {
                        console.log(`
                          email: ${email},
                          password: ${password},
                        `)
                        await logIn({
                          email: email,
                          password: password,
                        })
                      }}
                    >
                      <p className="Manrope800" style={{ color: 'white' }}>
                        Continue
                      </p>
                    </button>
                  </Grid>

                  <Grid item xs={12}>
                    <p
                      className="Manrope700"
                      style={{ fontSize: '12.5px', textAlign: 'center' }}
                    >
                      or continue with
                    </p>
                  </Grid>

                  <Grid item xs={6}>
                    <div
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '12.5px',
                        display: 'flex',
                        height: '40px',
                        backgroundColor: 'black',
                      }}
                      onClick={async () => {
                        await logIn()
                        handleClose()
                      }}
                    >
                      <GoogleIcon sx={{ color: 'white' }} />
                    </div>
                  </Grid>

                  <Grid item xs={6}>
                    <div
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '12.5px',
                        display: 'flex',
                        height: '40px',
                        backgroundColor: 'black',
                      }}
                      onClick={async () => {
                        await logIn()
                        handleClose()
                      }}
                    >
                      <FacebookRoundedIcon sx={{ color: 'white' }} />
                    </div>
                  </Grid>

                  <Grid item xs={12}>
                    <p
                      className="Manrope700"
                      style={{ fontSize: '12.5px', textAlign: 'center' }}
                    >
                      don’t have an account?
                    </p>
                  </Grid>
                </Grid>
              </Box>
            </Fade>
          </div>
        </Modal>
      </div>
    )
  }
}
