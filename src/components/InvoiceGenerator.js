import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
// import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
// import Notes from "./Notes";
import Table from "./Table";
// import TableForm from "./TableForm";
import ReactToPrint from "react-to-print";
import { useState, useRef, useEffect } from "react";
// import InvoiceAdd from "./InvoiceAdd";

export default function InvoiceGenerator({
  //Adding the variables required for the generation of the OP bill
  patientid,
  patientname,
  sex,
  doctorname,
  dob,
  phonenumber,
  totalmrp,
  additionalhospitalcharges,
  discount,
  gstvalue,
  payable,
  list,
  invoiceDate,
  invoiceNumber,
  //Adding the variables required for the generation of the OP bill
}) {
  const componentRef = useRef();
  // const [gobackInvoice,setGobackInvoice] = useState(false)
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <div className="invoice__preview bg-white p-5 rounded">
        <ReactToPrint
          trigger={() => (
            <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
              Print / Download
            </button>
          )}
          content={() => componentRef.current}
        />
        <div ref={componentRef} className="p-5">
          <Header handlePrint={handlePrint} />
          <MainDetails />

          <Dates
            invoiceNumber={invoiceNumber}
            invoiceDate={invoiceDate}
            patientid={patientid}
          />
          <ClientDetails
            patientname={patientname}
            sex={sex}
            dob={dob}
            doctorname={doctorname}
            phone={phonenumber}
          />

          <Table
            list={list}
            totalmrp={totalmrp}
            additionalhospitalcharges={additionalhospitalcharges}
            discount={discount}
            gstvalue={gstvalue}
            payable={payable}
          />
        </div>
      </div>
    </>
  );
}
