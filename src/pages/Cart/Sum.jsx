import React, { useEffect, useState } from "react";

const Sum = ({ data }) => {
  
  return (
    <div className="flex justify-between font-bold text-xl px-32 py-16 ">
      <div>Jumlah</div>
      {data ? data : <h1>0</h1>} $
    </div>
  );
};

export default Sum;
