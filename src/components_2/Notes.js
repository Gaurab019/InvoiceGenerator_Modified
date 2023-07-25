export default function Notes({
  notes,
  transactionid,
  totalmrp,
  billername,
  payable,
}) {
  return (
    <>
      <section className="">
        <div className="flex justify-between border-b-[1px] border-black ">
          <div className="mr-20 ">
            <h2 className="flex pt-5 items-end justify-end text-gray-800 text-base font-bold [word-spacing:5px]">
              Billed By : {billername}
            </h2>
          </div>
          <div className="mr-20 pb-5 pt-5 grid grid-cols-2 content-center text-center gap-5 border-l-[1px] border-black pl-2 items-end">
            <h2 className="flex items-end justify-end text-gray-800 text-base font-bold [word-spacing:5px] ">
              Gross Value :
            </h2>
            <p>{totalmrp}</p>
            {/* <h2 className="flex items-end justify-end text-gray-800 text-base font-bold  [word-spacing:5px]">
            Hospital Charges : {additionalhospitalcharges}
          </h2> */}
            {/* <h2 className="flex items-end justify-end text-gray-800 text-base font-bold  [word-spacing:5px]">
            Discount : {discount}
          </h2> */}
            {/* <h2 className="flex items-end justify-end text-gray-800 text-base font-bold">
            Gst : {gstvalue}
          </h2> */}
            <h2 className="flex items-end justify-end text-gray-800 text-base font-bold  [word-spacing:5px]">
              Bill Total :
            </h2>
            <p>{payable}</p>
          </div>
        </div>
        <div>
          <h2 className="mb-5 pt-5  flex items-start justify-start text-gray-800 text-base font-bold [word-spacing:5px]">
            Payment Mode : {transactionid}
          </h2>
        </div>
      </section>
    </>
  );
}
