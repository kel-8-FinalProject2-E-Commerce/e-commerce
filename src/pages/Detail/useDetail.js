import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduct } from "../../config/store/reducer/DetailProductSlice/DetailProductSlice";
import { useNavigate } from "react-router-dom";
import { addtoChart } from "../../config/store/reducer/ProductSlice/ProductSlice";
function useDetail(props) {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const dataproduct  = useSelector((state) => state.products.products[props.id -1]);
  const token = localStorage.getItem("token");

  console.log(dataproduct, "id");
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity <= 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };
  useEffect(() => {
    dispatch(fetchDetailProduct(props.id));
  }, []);

  const Addcart = () => {
    console.log("product >>> ", dataproduct);
    if (token === null) {
      naviagte("/login");
    } else {
      console.log("masuk");
      dispatch(addtoChart({id : props.id , cart : quantity}))
    }
  };
  
  return { dataproduct, quantity, handleDecrement, handleIncrement, Addcart };
}

export default useDetail;

//  const Addcart = () =>{
// if(token === null){
//   naviagte('/login')
// } else{
//   axios.post('https://fakestoreapi.com/carts', {
//     userId: localStorage.getItem("id"),
//             date : new Date(),
//             products : [
//               {
//                 productId : product.id,
//                 quantity : quantity
//               }
//             ]
//         })
//         .then((response)=>{
//           const josin = JSON.parse(localStorage.getItem('local'))
//           josin.map((item, i )=>{
//             // console.log(response.data.products[0].productId , item.productId, "cek in")
//             if(response.data.products[0].productId !== item.productId){
//               const data = JSON.parse(localStorage.getItem('local'))
//               const pushLocal = [...data, response.data.products[0]]
//               localStorage.setItem('local', JSON.stringify(pushLocal))
//             } else{
//               const data = JSON.parse(localStorage.getItem('local'))
//               let replace = response.data.products[0].quantity
//               data[data.length - 1] = {
//                 productId : response.data.productId,
//                 quantity : data.quantity + response.data.quantity
//               }
//               const pushLocal = [...data]
//               localStorage.setItem('local', JSON.stringify(pushLocal))
//             }
//           })
//           const pushLocal = [...josin, response.data.products[0]]
//           localStorage.setItem('local', JSON.stringify(pushLocal))
//         })
//         .catch(err => console.log(err))
// }
//  }
//  const josin = JSON.parse(localStorage.getItem('local'))