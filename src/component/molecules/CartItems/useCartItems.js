import {  useState } from "react";
import { useDispatch } from "react-redux";

import { updateCountCart } from "../../../config/store/reducer/ProductSlice/ProductSlice";
const useCartItems = (data) => {
  const dispatch = useDispatch()
  const {cart, item} = data

  const [Quantity, setQuantity] = useState(cart);
  const [alert, setAlert] = useState("")
  const increment = ()=>{
    if(Quantity > item.rating.count) {
      setAlert("out of stock")
    } else{
      setQuantity(Quantity + 1)
      dispatch(updateCountCart({id : item.id, cart : Quantity +1}))
    }
  }

  const onChangecart = (e) =>{
    if(e.target.value > item.rating.count){
      setAlert("out of stock")
    } else{
      setQuantity(e.target.value)
      dispatch(updateCountCart({id : item.id, cart : e.target.value}))
    }
  }

  const Decrement =()=>{
    setQuantity(Quantity - 1)
    dispatch(updateCountCart({id : item.id, cart : Quantity -1}))
  }
  return {Quantity, alert, increment, Decrement}
};

export default useCartItems;
