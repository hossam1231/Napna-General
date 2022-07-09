import * as React from 'react'

import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const Close = styled(CloseIcon)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  borderRadius: '1px',
  borderWidth: '5px',
  borderColor: 'black',
  color: theme.palette.text.secondary,
}))

const Check = styled(CheckIcon)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  borderRadius: '1px',
  borderWidth: '5px',
  borderColor: 'black',
  color: theme.palette.text.secondary,
}))

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const PricingPage = () => {
  return (
    <>
      <MetaTags title="Pricing" description="Pricing page" />
      {/* <Pricing />
      <ShopsCell /> */}

      <Grid container spacing={2}>
        <Grid item sm={1} xs={1}>
          {/* gutter */}
        </Grid>
        <Grid item sm={10} xs={10}>
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Typography variant="subtitle2" gutterBottom component="div">
              Pricing
            </Typography>
            <Typography variant="h4" gutterBottom component="div">
              Start using Napna for free!
            </Typography>
            <Typography gutterBottom component="div">
              Switch to a commercial plan to access advanced features &
              professional support.
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={1} xs={1}>
          {/* gutter */}
        </Grid>

        <Grid item sm={1} xs={1}>
          {/* gutter */}
        </Grid>
        <Grid item sm={10} xs={10}>
          <Divider />
        </Grid>
        <Grid item sm={1} xs={1}>
          {/* gutter */}
        </Grid>

        <Grid item sm={1} xs={1}>
          {/* gutter */}
        </Grid>
        <Grid item sm={10} xs={10}>
          <Grid container>
            <Grid item sm={3}>
              <Box sx={{ textAlign: 'left', width: '100%' }}>
                <Typography variant="subtitle1">Plans</Typography>
              </Box>
            </Grid>
            <Grid item sm={3}>
              <Box sx={{ textAlign: 'left', width: '100%' }}>
                <Typography variant="subtitle1">Community</Typography>
                <Typography variant="subtitle2">
                  Get started with the industry standard UI library for building
                  React user interfaces, MIT-licensed.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      marginRight: '5px',
                    }}
                  >
                    £0
                  </Typography>
                  <Typography variant="subtitle2"> – free forever</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={3}>
              <Box sx={{ textAlign: 'left', width: '100%' }}>
                <Typography variant="subtitle1">Pro</Typography>
                <Typography variant="subtitle2">
                  Best for professional developers building enterprise or
                  data-rich applications.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      marginRight: '5px',
                    }}
                  >
                    £0
                  </Typography>
                  <Typography variant="subtitle2"> – free forever</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={3}>
              <Box sx={{ textAlign: 'left', width: '100%' }}>
                <Typography variant="subtitle1">Premium</Typography>
                <Typography variant="subtitle2">
                  The most advanced features for handling data-rich
                  applications, and the highest priority for support.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      marginRight: '5px',
                    }}
                  >
                    £0
                  </Typography>
                  <Typography variant="subtitle2"> – free forever</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={3}>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  textAlign: 'left',
                  width: '100%',
                  background: '#F4F6F9',
                }}
              >
                <Box
                  sx={{
                    marginRight: '5px',
                    background: 'black',
                    width: '12px',
                    height: '12px',
                  }}
                ></Box>
                <Typography>Napna </Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                background: '#F4F6F9',
              }}
              item
              sm={3}
            />
            <Grid
              sx={{
                background: '#F4F6F9',
              }}
              item
              sm={3}
            />
            <Grid
              sx={{
                background: '#F4F6F9',
              }}
              item
              sm={3}
            />
            <Grid item sm={3}>
              <Typography>unlimited searches</Typography>
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Photo find</Typography>
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Compare & save</Typography>
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Dietery overview</Typography>
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  textAlign: 'left',
                  width: '100%',
                  background: '#F4F6F9',
                }}
              >
                <Box
                  sx={{
                    marginRight: '5px',
                    background: 'black',
                    width: '12px',
                    height: '12px',
                  }}
                ></Box>
                <Typography>Napna Merchant </Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                background: '#F4F6F9',
              }}
              item
              sm={3}
            />
            <Grid
              sx={{
                background: '#F4F6F9',
              }}
              item
              sm={3}
            />
            <Grid
              sx={{
                background: '#F4F6F9',
              }}
              item
              sm={3}
            />
            <Grid item sm={3}>
              <Typography>Product matches</Typography>
            </Grid>
            <Grid item sm={3}>
              <p>£0.03 per</p>
            </Grid>
            <Grid item sm={3}>
              <Typography>250 included p/m</Typography>
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Teams</Typography>
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Storage</Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography>£1 per GB p/pm</Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography>500mb included p/m</Typography>
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Mailing List</Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography>£8 per 1000 recepients</Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography>1500 included</Typography>
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Promotions </Typography>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Reservations & bookings</Typography>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Supplementary information </Typography>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Scan & shop </Typography>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Pos intergration</Typography>
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  textAlign: 'left',
                  width: '100%',
                  background: '#F4F6F9',
                }}
              >
                <Box
                  sx={{
                    marginRight: '5px',
                    background: 'black',
                    width: '12px',
                    height: '12px',
                  }}
                ></Box>
                <Typography>Napna Enterprise</Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                background: '#F4F6F9',
              }}
              item
              sm={3}
            />
            <Grid
              sx={{
                background: '#F4F6F9',
              }}
              item
              sm={3}
            />
            <Grid
              sx={{
                background: '#F4F6F9',
              }}
              item
              sm={3}
            />
            <Grid item sm={3}>
              <Typography>Accept payments</Typography>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <Typography>0.5% + £0.17 </Typography>
            </Grid>{' '}
            <Grid item sm={3}>
              <Typography>0.5 + £0.15</Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography>Stock managment</Typography>
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>{' '}
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Webhooks</Typography>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>{' '}
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Custom app & domain name</Typography>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Employee managment</Typography>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>Point of sale terminal</Typography>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
            <Grid item sm={3}>
              <Typography>CRM</Typography>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <Check />
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item sm={1} xs={1}>
            {/* gutter */}
          </Grid>
          <Grid sx={{ borderWidth: '2px', borderColor: 'black' }} item sm={10}>
            <Box>
              <Typography>Early bird special!</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Typography>
                Buy now at a reduced price (~25% off), and get early access to
                MUI X Premium, with the added opportunity to influence its
                development. The early bird special is available for a limited
                time, so don't miss this opportunity!
              </Typography>
              <Box>
                <Button>Buy now</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={1} xs={1}>
            {/* gutter */}
          </Grid>
        </Grid>

        {/* <Testemonials /> */}

        <Grid container>
          <Grid item lg={1}>
            {/* gutter */}
          </Grid>
          <Grid item lg={10}>
            <Grid container>
              <Grid item xs={12}>
                <Typography>Key information about the paid plans</Typography>
              </Grid>
              <Grid item lg={6} xs={12}></Grid>
              <Grid item lg={6} xs={12}></Grid>
              <Grid item lg={6} xs={12}></Grid>
              <Grid item lg={6} xs={12}></Grid>
            </Grid>
          </Grid>
          <Grid item lg={1}>
            {/* gutter */}
          </Grid>
        </Grid>

        <Divider />
        <Grid container>
          <Grid item lg={1}>
            {/* gutter */}
          </Grid>
          <Grid item lg={10}>
            <Grid container>
              <Grid item xs={12}>
                <Typography>Frequently asked questions</Typography>
              </Grid>
              <Grid item lg={4} xs={12}></Grid>
              <Grid item lg={4} xs={12}></Grid>
              <Grid item lg={4} xs={12}></Grid>
            </Grid>
          </Grid>
          <Grid item lg={1}>
            {/* gutter */}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default PricingPage
