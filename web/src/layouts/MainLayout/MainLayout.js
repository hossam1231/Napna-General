import { Grid } from '@mui/material'

import AuthButton from 'src/components/AuthButton'
import Cart from 'src/components/Cart'
import ProductsCell from 'src/components/ProductsCell'

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex PricingBackground z-0 ">
        <div className="grow flex backdrop-blur-xl bg-white/30 z-10 ">
          <div

            style={{
              padding: '40px',
              backgroundColor: '#F8FAFC',
              height: '100vh',
              alignItems: 'center',
              borderBottomRightRadius: '40px',
              borderTopRightRadius:'40px',
            }}
            className="z-20 shadow-xl flex flex-col"
          >
            {/* <AuthButton /> <Cart /> */}
            <h2
              style={{
                marginTop: '40x',
                fontSize: '2.5rem',
                marginBottom: '40px',
              }}
              // text-center
              className="text-slate-900 text-lg font-semibold"
            >
              Plans
            </h2>
            <div className="grow">
            <ProductsCell/>
            </div>

                <button
                  style={{ position:'relative', bottom:10, marginTop: '40px', marginBottom: '20px' }}
                  className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 Manrope600 rounded-full"
                >
                  Register merchant
                </button>

          </div>

          <div className="grow">{children}</div>
        </div>
      </div>
    </>
  )
}

export default MainLayout
