import React from "react";

function TableRekapPenjualan(props) {
  return (
    <table className="table-fixed ">
      <thead className="border-b">
        <tr>
          <th className="text-center">#</th>
          {props.headerRow &&
            props.headerRow.map((item, key) => {
              return (
                <th key={key} className="text-left pl-3">
                  {item}
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody>
        {props.data &&
          props.data.map((item, id) => {
            return (
              <tr
                key={id}
                className={`border-b ${(id + 1) % 2 == 0 && "bg-gray-100"}`}
              >
                <td
                  className={` p-4 w-[10px] mobile:w-[20px] md:w-[10px]  text-left`}
                >
                  {id + 1}
                </td>
                <td
                  className={` p-4 w-[550px] mobile:w-[100px] md:w-[500px] lg:w-[550px]  text-left flex flex-col`}
                >
                  <span className="font-medium">{item.title}</span>
                  <span className="font-thin text-gray-600">
                    {item.category}
                  </span>
                </td>
                <td className={` p-4 w-[150px] text-left`}>{item.price}</td>
                <td className={` p-4 w-[150px] text-left`}>{item.quantity}</td>
                <td className={` p-4 w-[150px] text-left`}>
                  ${item.quantity * item.price}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TableRekapPenjualan;
