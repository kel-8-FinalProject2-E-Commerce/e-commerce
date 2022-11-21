import React from 'react'
import useCartItems from './useCartItems';

const CartItems = ({data, idbarang}) => {
  const {productId, quantity } = data
  const {dataProduct, Total} = useCartItems(productId)
  const {title, price, rating, image, id, description, category} = dataProduct
  const {sumALL} = Total(quantity, price)

  
  return (
    <div>
          <div className="flex w-full mt-3 font-bold capitalize items-center bg-slate-100">
            <div className="w-9/12 flex items-center gap-7">
              <div className='h-48 flex justify-center items-center'>
                <img src={image} alt="imageproduct" className='w-32'/>
              </div>
              <div>
                <p>{title}</p>
              </div>
            </div>
            <div className="w-1/12">{price}</div>
            <div className="w-1/12">{quantity}</div>
            <div className="w-1/12">{sumALL} $</div>
          </div>
    </div>
  )
}

export default CartItems