import SearchIcon from '@mui/icons-material/Search'
import { Box, Grid } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

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
            <a
              href="#"
              className="group block max-w-xs rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
            >
              <div className="flex items-center space-x-3">
                <SearchIcon />

                <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
                  Try it out
                </h3>
              </div>
              <p className="text-slate-500 group-hover:text-white text-sm">
                Search a handful of merchants near you, find what your looking
                for locally.
              </p>
            </a>
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
