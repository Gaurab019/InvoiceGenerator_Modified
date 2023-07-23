import React from "react";

export default function Table({
  list,
  totalmrp,
  additionalhospitalcharges,
  discount,
  gstvalue,
  payable,
}) {
  return (
    <>
      <table width="100%" className="mb-5  border-t-2 border-b-2 border-black">
        <thead className="border-b-2 border-black">
          <tr className=" p-1">
            <td className="font-bold">Sl No</td>
            <td className="font-bold">Service Name</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">TotalMrp</td>
            <td className="font-bold">Discount</td>
            <td className="font-bold">Payable</td>
          </tr>
        </thead>
        {list.map(({ serviceName, Qty, TotalMrp, Discount, Payable }, id) => (
          <React.Fragment key={id + 1}>
            <tbody>
              <tr className="h-10">
                <td>{id + 1}</td>
                <td>{serviceName}</td>
                <td>{Qty}</td>
                <td>{TotalMrp}</td>
                <td>{Discount}</td>
                <td>{Payable}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      {/* <hr width="100%" className="border-[px] border-black"></hr> */}

      <div className="mr-20">
        <h2 className="flex items-end justify-end text-gray-800 text-base font-bold [word-spacing:5px]">
          Total MRP : {totalmrp}
        </h2>
        <h2 className="flex items-end justify-end text-gray-800 text-base font-bold  [word-spacing:5px]">
          Hospital Charges : {additionalhospitalcharges}
        </h2>
        <h2 className="flex items-end justify-end text-gray-800 text-base font-bold  [word-spacing:5px]">
          Discount : {discount}
        </h2>
        {/* <h2 className="flex items-end justify-end text-gray-800 text-base font-bold">
          Gst : {gstvalue}
        </h2> */}
        <h2 className="flex items-end justify-end text-gray-800 text-base font-bold  [word-spacing:5px]">
          Payable: {payable}
        </h2>
      </div>
    </>
  );
}
