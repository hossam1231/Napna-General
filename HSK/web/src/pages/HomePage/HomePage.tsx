import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Pricing } from 'src/components/HomePage/Index'
import ShopsCell from 'src/components/ShopsCell'
import { Breadcrumb, Layout, Menu } from 'antd'
import React from 'react'

const { Header, Content, Footer } = Layout

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {/* <Pricing />
      <ShopsCell /> */}
      <p>main</p>
    </>
  )
}

export default HomePage
