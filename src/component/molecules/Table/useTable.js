import { useSelector } from "react-redux";


const useTable = () => {
  const data = useSelector((state)=> state.products.products)
  const dataPenjualan = data.filter(item => item.checkout > 0)

  const Total = () =>{
    let sum = 0;
    dataPenjualan.map((item, i)=>{
      sum += item.checkout * item.item.price
    })
    return {sum}
  }

  return {dataPenjualan, Total}
}

export default useTable