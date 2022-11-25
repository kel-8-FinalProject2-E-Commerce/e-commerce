import React from 'react'
import { useSelector } from 'react-redux'
import Tableadmin from '../../component/molecules/Table/Tableadmin'

const HomeAdmin = () => {
  const data = useSelector((state)=> state.cart)
  return (
    <div className='px-5 w-full'>
        <h1 className='font-extrabold text-6xl my-4'>Product</h1>
        <Tableadmin />
    </div>
  )
}

export default HomeAdmin