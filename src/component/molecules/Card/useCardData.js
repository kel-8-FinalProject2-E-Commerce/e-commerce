import axios from "axios"
import { useState } from "react"

const useCardData = (value, item) => {
  const [datacrement, setIncrement] = useState(parseInt(value))
  const counterIncrement =()=>{
    setIncrement(parseInt(datacrement + 1))
  }
  const counterDeccrement =()=>{
    setIncrement((parseInt(datacrement - 1)))
  }

  const udapteDataproduct = (e)=>{
    
    axios({
      method: "put",
      url: `https://fakestoreapi.com/products/${item.id}`,
      data:{
        title: item.title,
        price: item.price,
        description: item.description,
        image: item.image,
        category: item.category,
        rating: {
          rate : item.rating.rate,
          count : datacrement
        }
      }
    })
    .then(res => console.log(res.data, "ini kerender bro"))
    .catch(err => console.log(err))
  
  }
  return {datacrement, counterIncrement, counterDeccrement, udapteDataproduct, setIncrement}
}

export default useCardData