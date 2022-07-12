import { Box, Grid } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import { ProductSearchModal } from 'src/components/Search/Index'

// import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {/* <ArticlesCell /> */}
      <Grid container spacing={3}>
        <Grid item xs={1}>
          {/* gutter */}
        </Grid>
        <Grid item sm={5}>
          <p style={{ fontSize: '65px' }} className={'Manrope700'}>
            Move faster with intuitive React UI tools
          </p>
          <p style={{ color: '#4B5563' }}>
            MUI offers a comprehensive suite of UI tools to help you ship new
            features faster. Start with Material UI, our fully-loaded component
            library, or bring your own design system to our production-ready
            components.
          </p>
          <Box sx={{ marginTop: '20px', display: 'flex' }}>
            <ProductSearchModal />
          </Box>
        </Grid>
        <Grid item xs={12} sm={7}>
          {/* image */}
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
