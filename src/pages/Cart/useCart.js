import { useDispatch, useSelector } from "react-redux";
import {addToCheckout} from "../../config/store/reducer/cartSlice/cartSlice";
import Swal from "sweetalert2";
import { chekcoutPorduct } from "../../config/store/reducer/ProductSlice/ProductSlice";
function useCart() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products)
  const dataChart = product.filter(item => item.cart > 0)

  const Total =() =>{
    let sum = 0;
    dataChart.map((item, i)=>{
      sum += item.cart * item.item.price
    })
    return {sum}
  }

  const handleCheckout = () =>{
    dispatch(chekcoutPorduct(dataChart))
    
  }
  
  return { dataChart, Total, handleCheckout };
}

export { useCart };
