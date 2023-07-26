import { useState, useRef, useEffect } from "react";
// import ClientDetails from "./components/ClientDetails";
// import Dates from "./components/Dates";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MainDetails from "./components/MainDetails";
// import Notes from "./components/Notes";
// import Table from "./components/Table";
// import TableForm from "./components/TableForm";
// import ReactToPrint from "react-to-print";
// import { DonateButton } from "./buttons";
import InvoiceGenerator from "./components/InvoiceGenerator";
import InvoiceGeneratorIP from "./components_2/InvoiceGeneratorIP";
import InvoiceGeneratorRegistration from "./components_3_registration/InvoiceGeneratorRegistration";
import InvoiceAdd from "./components/InvoiceAdd";
import apioutput from "./apioutput.json";
import IPapioutput from "./IPapioutput.json";
import { convertbillbreakuptoArray } from "./utils/convertjsontoArray";
// import { generatePath } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [iplist, setipList] = useState([]);
  const [total, setTotal] = useState(0);
  const [width] = useState(641);
  const [generateReport, setGenerateReport] = useState(false);
  const [resetForm, setResetForm] = useState(false);
  const [gobackInvoice, setGobackInvoice] = useState(false);
  // const [invoices, setInvoices] = useState([]);

  const componentRef = useRef();

  const generateReportfromAPI = () => {
    setGenerateReport(true);
    let breakuplist = convertbillbreakuptoArray(apioutput.breakup);
    setList(breakuplist);
  };
  const generateReportfromIPAPI = () => {
    setGenerateReport(true);
    let breakuplist = convertbillbreakuptoArray(IPapioutput.breakup);
    setipList(breakuplist);
  };

  const handlePrint = () => {
    window.print();
  };
  // let styles = {
  //   marginRight: '200px',
  //   width: '250px',
  //   height: '50px',
  //   // backgroundColor: 'yellow',
  // };
  const initialState = {
    name: "",
    address: "",
    email: "",
    phone: "",
    bankName: "",
    website: "",
    clientName: "",
    invoiceNumber: "",
    invoiceDate: "",
    dueDate: "",
    notes: "",
    description: "",
    quantity: "",
    price: "",
    amount: "",
    // list=[],
    // total=0,
    generateReport: "",
    resetForm: "",
  };

  useEffect(() => {
    if (window.innerWidth < width) {
      alert("Place your phone in landscape mode for the best experience");
    }
  }, [width]);

  return (
    <>
      <main
        className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start"
        style={{
          maxWidth: "1920px",
          margin: "auto",
        }}
      >
        <section>
          {
            <button
              // onClick={() => setGenerateReport(!generateReport)}
              onClick={() => {
                generateReportfromAPI();
                generateReportfromIPAPI();
              }}
              className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Generate/Edit Report
            </button>
          }
          {!generateReport && (
            <button
              onClick={() => {
                setResetForm(!resetForm);
                setName("");
                setAddress("");
                setEmail("");
                setPhone("");
                setBankName("");
                setBankAccount("");
                setWebsite("");
                setClientName("");
                setClientAddress("");
                setInvoiceNumber("");
                setInvoiceDate("");
                setDueDate("");
                setNotes("");
                setDescription("");
                setQuantity("");
                setPrice("");
                setAmount("");
                setList([]);
                setTotal(0);
              }}
              className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              // style={styles}
            >
              Reset?/New Invoice
            </button>
          )}
          {/* {gobackInvoice ? "" :  !generateReport && <InvoiceAdd */}
          {!generateReport && (
            <InvoiceAdd
              name={name}
              address={address}
              clientName={clientName}
              clientAddress={clientAddress}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
              description={description}
              quantity={quantity}
              price={price}
              amount={amount}
              list={list}
              setList={setList}
              total={total}
              notes={notes}
              website={website}
              phone={phone}
              bankAccount={bankAccount}
              bankName={bankName}
              email={email}
              setTotal={setTotal}
              invoiceNumber={invoiceNumber}
              setName={setName}
              setAddress={setAddress}
              setEmail={setEmail}
              setWebsite={setWebsite}
              setPhone={setPhone}
              setBankName={setBankName}
              setBankAccount={setBankAccount}
              setClientName={setClientName}
              setClientAddress={setClientAddress}
              setInvoiceNumber={setInvoiceNumber}
              setInvoiceDate={setInvoiceDate}
              setDueDate={setDueDate}
              setDescription={setDescription}
              setQuantity={setQuantity}
              setPrice={setPrice}
              setAmount={setAmount}
              setNotes={setNotes}
            />
          )}

          {/* { resetForm && 
          <InvoiceAdd
          name={name}
          address={address}
          clientName={clientName}
          clientAddress={clientAddress}
          invoiceDate={invoiceDate}
          dueDate={dueDate}
          description={description}
          quantity={quantity}
          price={price}
          amount={amount}
          list={list}
          setList={setList}
          total={total}
          notes={notes}
          website={website}
          phone={phone}
          bankAccount={bankAccount}
          bankName={bankName}
          email={email}
          setTotal={setTotal}
          invoiceNumber={invoiceNumber} 
          setName={setName}
          setAddress={setAddress}
          setEmail={setEmail}
          setWebsite={setWebsite}
          setPhone={setPhone}
          setBankName={setBankName}
          setBankAccount={setBankAccount}
          setClientName={setClientName}
          setClientAddress={setClientAddress}
          setInvoiceNumber={setInvoiceNumber}
          setInvoiceDate={setInvoiceDate}
          setDueDate={setDueDate}
          setDescription={setDescription}
          setQuantity={setQuantity}
          setPrice={setPrice}
          setAmount={setAmount}
          setNotes={setNotes}
          
          />
          }  */}
          {/* <div className="bg-white p-5 rounded shadow">
             name, address, email, phone, bank name, bank account number, website client name, client address, invoice number, invoice date, due date, notes 
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Your full name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Enter your address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="website">Enter your website</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter your website"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter your bank name</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your bank name"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bankAccount">
                    Enter your bank account number
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter your bank account number"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client's name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">
                    Enter your client's address
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your client's address"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              This is our table form 
              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

               <button
              onClick={() => setShowInvoice(true)}
              className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Preview Invoice
            </button> 
            </div>
          </div> */}
          <article className="mt-5">{/* <DonateButton /> */}</article>
          <article className="mt-5">
            {/* {generateReport &&
          <button
            onClick={() => setGobackInvoice(!gobackInvoice)}
            className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            go Back
          </button>
          } */}

            {generateReport && (
              <InvoiceGenerator
                patientid={apioutput.patientid}
                patientname={apioutput.opdetails.Patientname}
                sex={apioutput.opdetails.Sex}
                doctorname={apioutput.opdetails.ConsultingDoctor}
                age={"".concat(apioutput.opdetails.Age, " yrs")}
                phonenumber={apioutput.opdetails.Phonenumber}
                totalmrp={apioutput.mrp.toFixed(2)}
                additionalhospitalcharges={apioutput.additionalhospitalcharges.toFixed(
                  2
                )}
                transactionid={apioutput.transactionid.toUpperCase()}
                gstvalue={apioutput.gstvalue.toFixed(2)}
                payable={apioutput.payable.toFixed(2)}
                list={list}
                invoiceNumber={apioutput.billno}
                invoiceDate={new Date().toJSON().slice(0, 10)}
              />
            )}
            {generateReport && (
              <InvoiceGeneratorRegistration
                patientid={apioutput.patientid}
                patientname={apioutput.opdetails.Patientname}
                sex={apioutput.opdetails.Sex}
                age={"".concat(apioutput.opdetails.Age, " yrs")}
                phonenumber={apioutput.opdetails.Phonenumber}
                totalmrp={apioutput.mrp.toFixed(2)}
                additionalhospitalcharges={apioutput.additionalhospitalcharges.toFixed(
                  2
                )}
                transactionid={apioutput.transactionid.toUpperCase()}
                gstvalue={apioutput.gstvalue.toFixed(2)}
                payable={apioutput.payable.toFixed(2)}
                list={list}
                invoiceNumber={apioutput.billno}
                invoiceDate={new Date().toJSON().slice(0, 10)}
              />
            )}
            {generateReport && (
              <InvoiceGeneratorIP
                patientid={IPapioutput.admissiondetails.patientid}
                patientname={IPapioutput.admissiondetails.patientname}
                IPR={IPapioutput.admissiondetails.IPRNo}
                sex={IPapioutput.admissiondetails.sex}
                doctorname={IPapioutput.admissiondetails.consultingdoctor}
                age={`${Math.round(
                  (new Date() -
                    new Date(IPapioutput.admissiondetails.patientdob)) /
                    (1000 * 365 * 24 * 3600)
                )} yrs`}
                relativephone={IPapioutput.admissiondetails.relativephonenumber}
                relativename={IPapioutput.admissiondetails.relativename}
                relativerelation={IPapioutput.admissiondetails.relativerelation.toUpperCase()}
                totalmrp={IPapioutput.mrp.toFixed(2)}
                additionalhospitalcharges={IPapioutput.additionalhospitalcharges.toFixed(
                  2
                )}
                transactionid={IPapioutput.transactionid.toUpperCase()}
                gstvalue={IPapioutput.gstvalue.toFixed(2)}
                payable={IPapioutput.payable.toFixed(2)}
                list={iplist}
                invoiceNumber={IPapioutput.billno}
                invoiceDate={new Date().toJSON().slice(0, 10)}
              />
            )}
          </article>
        </section>
        {/* <button
            onClick={() => InvoiceGenerator(
              name={name},
              address={address},
              clientName={clientName},
              clientAddress={clientAddress},
              invoiceDate={invoiceDate},
              dueDate={dueDate},
              description={description},
              quantity={quantity},
              price={price},
              amount={amount},
              list={list},
              setList={setList},
              total={total},
              notes={notes},
              website={website},
              phone={phone},
              bankAccount={bankAccount},
              bankName={bankName},
              email={email},
              setTotal={setTotal},
              invoiceNumber={invoiceNumber},
            )}
            className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Generate Report
          </button> */}
        {/* <button
            onClick={() => setGenerateReport(!generateReport)}
            className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Generate Report
          </button> */}
        {/* Invoice Preview */}
        {/* <div className="invoice__preview bg-white p-5 rounded">
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

            <MainDetails name={name} address={address} />

            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />

            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />

            <Table
              description={description}
              quantity={quantity}
              price={price}
              amount={amount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />

            <Notes notes={notes} />

            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
              phone={phone}
              bankAccount={bankAccount}
              bankName={bankName}
            />
          </div>
          <button
            onClick={() => setShowInvoice(false)}
            className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Edit Information
          </button>
        </div> */}
      </main>
    </>
  );
}

export default App;
