import React, { useState } from "react";
import { Button, Input } from "../../atoms";
import useCartItems from "./useCartItems";

const CartItems = ({ data }) => {
  const {item, cart} = data
  const {Decrement, Quantity, alert, increment } = useCartItems(data);
  return (
    <div>
      <div className="flex w-full mt-3 font-bold capitalize items-center bg-slate-100">
        <div className="w-8/12 flex items-center gap-7">
          <div className="h-48 flex justify-center items-center">
            <img src={item.image} alt="imageproduct" className="w-32" />
          </div>
          <div>
            <p>{data.title}</p>
          </div>
        </div>
        <div className="w-1/12">{item.price} $ </div>
        <div className="w-2/12 pr-10 flex items-center gap-x-2">
          <Button
            name={"-"}
            onClick={Decrement}
            className="bg-white "
          />
          <Input className={""} value={cart} type="number" />
          <Button name={"+"} onClick={increment} />
        </div>
        <div className="w-1/12">{item.price * data.cart} $</div>
      </div>
    </div>
  );
};

export default CartItems;
