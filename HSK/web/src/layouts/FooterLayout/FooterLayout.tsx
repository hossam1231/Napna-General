import * as React from 'react'

type FooterLayoutProps = {
  children?: React.ReactNode
}

const FooterLayout = ({ children }: FooterLayoutProps) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
    </>
  )
}

export default FooterLayout
