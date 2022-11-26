import useTable from "./useTable";

const TabelRekappenjualan = () => {
  const {dataPenjualan, Total} = useTable()
  let {sum} = Total()
  
  return (
    <>
      <table className="w-full ">
        <thead className="bo-rounded-2xl text-left bg-black text-white h-14 rounded-xl ">
          <tr>
            <th className="w-8/12 pl-4">Product</th>
            <th className="w-1/12">Harga</th>
            <th className="w-1/12">Terjual</th>
            <th className="w-2/12">Pendapatan</th>
          </tr>
        </thead>
        {dataPenjualan?.map((item, i) => {
          return (
            <>
              <tbody className="align-top h-10  even:bg-green-100" key={item.i}>
                <tr className="text-left ">
                  <th className="w-8/12 pl-4 flex items-center gap-x-5">
                    <img src={item.item.image} alt="image" className="w-20"/>
                    <div>{item.item.title}</div>
                  </th>
                  <th className="w-1/12">{item.item.price} $</th>
                  <th className="w-1/12">{item.checkout}</th>
                  <th className="w-2/12">{item.item.price * item.checkout} $</th>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      <div className="flex justify-end bg-green-100 text-black font-bold text-xl px-64 py-3 ">
        TOTAL PENDAPATAN = <span className="mx-3 font-bold text-orange-900">{sum}</span> $ 
      </div>
    </>
  );
};

export default TabelRekappenjualan;
