import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
// import Notes from "./Notes";
import Table from "./Table";
// import TableForm from "./TableForm";
import ReactToPrint from "react-to-print";
import { useState, useRef, useEffect } from "react";
import Notes from "./Notes";
import asset from "../images/Asset_compressed_v2.png";
import hospitallogo from "../images/hospital_logo_3.png";
// import InvoiceAdd from "./InvoiceAdd";

export default function InvoiceGeneratorRegistration({
  //Adding the variables required for the generation of the OP bill
  patientid,
  patientname,
  sex,
  age,
  phonenumber,
  totalmrp,
  additionalhospitalcharges,
  transactionid,
  gstvalue,
  payable,
  list,
  invoiceDate,
  invoiceNumber,
  //Adding the variables required for the generation of the OP bill
}) {
  const componentRef = useRef();
  console.log(age);
  // const [gobackInvoice,setGobackInvoice] = useState(false)
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <div className="invoice__preview bg-white p-10 rounded">
        <ReactToPrint
          trigger={() => (
            <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
              Print / Download
            </button>
          )}
          content={() => componentRef.current}
        />
        <div ref={componentRef} className="p-5 font-sans">
          <Header
            handlePrint={handlePrint}
            address={"Near Menaka Theatre, Raichur Road, Mahabubnagar (TS)"}
            hospitalphno={"94402 33361"}
            asset={asset}
            hospitallogo={hospitallogo}
          />
          <MainDetails />
          {/* 
          <Dates
            invoiceNumber={invoiceNumber}
            invoiceDate={invoiceDate}
            patientid={patientid}
          /> */}
          <ClientDetails
            invoiceNumber={invoiceNumber}
            invoiceDate={invoiceDate}
            patientid={patientid}
            patientname={patientname}
            sex={sex}
            age={age}
            phone={phonenumber}
          />

          <Table list={list} />
          <Notes
            totalmrp={totalmrp}
            additionalhospitalcharges={additionalhospitalcharges}
            transactionid={transactionid}
            gstvalue={gstvalue}
            payable={payable}
          />
        </div>
      </div>
    </>
  );
}
