import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "../../config/store/reducer/ProductSlice/ProductSlice"

export const UseHome =() =>{
    const product = useSelector((state) => state.products.products)
    const [filter, setFilter] = useState(null)
    const dispatch = useDispatch()
    const all = filter === null || filter === 'all' ? product : product.filter(item => item.item.category === filter)
    const dataFilter = [
        {
            name : 'all'
        },
        {
            name : 'electronics',
        },
        {
            name : 'jewelery',
        },
        {
            name: "men's clothing"
        },
        {
            name : "women's clothing"
        }
    ]
    const handleFilter = (e) => {
        setFilter(e.target.value)
    }

    console.log(all, "filter");

    useEffect(()=>{
        dispatch(fetchProduct())
    }, [dispatch])
    return {all, handleFilter, dataFilter}
}
