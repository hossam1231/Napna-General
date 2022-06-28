import { Breadcrumb, Layout, Menu } from 'antd'
import React from 'react'

const { Header, Content, Footer } = Layout

type FooterLayoutProps = {
  children?: React.ReactNode
}

export const FooterComponent = () => {
  const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Resources',
      description: [
        'Resource',
        'Resource name',
        'Another resource',
        'Final resource',
      ],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ]
  return (
    <React.Fragment>
      {/* Footer */}
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
      {/* End footer */}
    </React.Fragment>
  )
}

const FooterLayout = ({ children }: FooterLayoutProps) => {
  return (
    <>
      <footer>
        <FooterComponent></FooterComponent>
      </footer>
      <main>{children}</main>
    </>
  )
}

export default FooterLayout
