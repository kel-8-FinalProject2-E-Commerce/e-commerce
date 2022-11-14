import React from "react";
import TableRekapPenjualan from "../../component/molecules/TableRekapPenjualan/TableRekapPenjualan";
import useTableRekapPenjualan from "./useTableRekapPenjualan";
function AdminRekapPenjualan() {
  const { data, headerRow, totalPendapatan } = useTableRekapPenjualan();
  return (
    <div className="mx-5 w-100">
      <h1 className="font-extrabold text-4xl my-5 ">Product</h1>
      <div className="flex justify-center">
        <TableRekapPenjualan headerRow={headerRow} data={data} />
      </div>

      <div className="flex flex-col justify-center items-center mx-[15%] mt-5 p-5 bg-navbarcol">
        <h1 className="text-2xl">Total Pendapatan </h1>
        <p className="text-xl font-bold">${totalPendapatan}</p>
      </div>
    </div>
  );
}

export default AdminRekapPenjualan;
