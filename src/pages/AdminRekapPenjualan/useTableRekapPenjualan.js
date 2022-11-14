import React from "react";

function useTableRekapPenjualan() {
  const data = [
    {
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      category: "men's clothing",
      price: 109.95,
      quantity: 10,
    },
    {
      title: "Mens Casual Premium Slim Fit T-Shirts",
      category: "men's clothing",
      price: 22.3,
      quantity: 10,
    },
    {
      title: "Mens Cotton Jacket",
      category: "men's clothing",
      price: 55.99,
      quantity: 10,
    },
  ];
  let totalPendapatan = 0;
  for (let i = 0; i < data.length; i++) {
    totalPendapatan += data[i].price * data[i].quantity;
  }
  const headerRow = ["Product", "Harga", "Terjual", "Pendapatan"];
  return {
    data,
    headerRow,
    totalPendapatan,
  };
}

export default useTableRekapPenjualan;
