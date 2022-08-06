import Skeleton from '@mui/material/Skeleton'
import styled from 'styled-components'

import { useAddToCart } from 'src/components/CartProvider'

const Product = ({ id, name, description, price, image, type, loading }) => {
  const addToCart = useAddToCart()

  return (
    <button
      style={{ marginBottom: '40px' }}
      onClick={() => addToCart({ id, name, description, price, image, type })}
      className="group block max-w-xs bg-white mx-auto rounded-lg p-6 shadow-lg hover:bg-violet-600 focus:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 shadow-lg space-y-3"
    >
      <div className="flex items-center space-x-3">
        <div style={{ marginRight: '5px' }} className="h-6 w-6 stroke-sky-500">
          <p className="text-slate-500 group-hover:text-white Manrope200">
            £{price}
          </p>
        </div>
        <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold  group-focus:text-white text-sm font-semibold  ">
          {name}
        </h3>
      </div>
      <p className="text-slate-500 group-hover:text-white text-sm group-focus:text-white text-sm">
        {description}
      </p>
    </button>
  )
}

export const ProductLoading = ({
  id,
  name,
  description,
  price,
  loading,
  image,
  type,
}) => {
  return (
    <div
      style={{ marginBottom: '40px' }}
      className="group block max-w-xs bg-white mx-auto rounded-lg p-6 shadow-lg shadow-lg space-y-3"
    >
      <div className="flex items-center space-x-3">
        <div style={{ marginRight: '5px' }} className="h-6 w-6 stroke-sky-500">
          <Skeleton width={'10%'} />
        </div>

        <Skeleton width={'30%'} />
      </div>
      <Skeleton />
      <Skeleton />
    </div>
  )
}

export default Product
