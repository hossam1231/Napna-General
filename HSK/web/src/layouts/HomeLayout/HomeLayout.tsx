type HomeLayoutProps = {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <header>
        <p>header</p>
      </header>
      
      <>{children}</>
      <footer>
<p>footer</p>
      </footer>
    </>
  )
}

export default HomeLayout
