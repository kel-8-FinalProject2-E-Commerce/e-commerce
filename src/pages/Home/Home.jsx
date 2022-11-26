import React from 'react'
import { Card } from '../../component/molecules'
import { UseHome } from './useHome'

const Home = () => {
    const {all, handleFilter, dataFilter} = UseHome()
    return (
    <div className='mx-6 '>
        <div className='flex my-5 items-center gap-x-10'>
            <h1 className='font-extrabold text-4xl  '>Product</h1>
           <select name="categori" id="product" className='outline-none border-2' onChange={handleFilter}> 
           {dataFilter.map((item, i) =>{
            return(
                <option key={i} value={item.name}>{item.name}</option>
            )
           })}
           </select>
        </div>
        <div className='flex gap-5 flex-wrap justify-center'>
           {all?.map((item, i )=>{
            return(
                <Card key={i} data={item.item} />
            )
           })}
        </div>
    </div>
  )
}

export default Home