import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";
import TableForm from "./TableForm";
import ReactToPrint from "react-to-print";
import { useState, useRef, useEffect } from "react";

export default function InvoiceAdd({name,
  address,
  clientName,
  clientAddress,
  invoiceDate,
  dueDate,
  description,
  quantity,
  price,
  amount,
  list,
  setList,
  total,
  notes,
  website,
  phone,
  bankAccount,
  bankName,
  email,
  invoiceNumber,
  setTotal,
  setName,
  setAddress,
  setEmail,
  setWebsite,
  setPhone,
  setBankName,
  setBankAccount,
  setClientName,
  setClientAddress,
  setInvoiceNumber,
  setInvoiceDate,
  setDueDate,
  setDescription,
  setQuantity,
  setPrice,
  setAmount,
  setNotes,}) {
  const componentRef = useRef();
  const [gobackInvoice,setGobackInvoice] = useState(false)
  const handlePrint = () => {
    window.print();
  };
    return (
      <>
                <div className="bg-white p-5 rounded shadow">
        {/* name, address, email, phone, bank name, bank account number, website client name, client address, invoice number, invoice date, due date, notes */}
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

        {/* This is our table form */}
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
   
       
    </div>
    </div>
      </>
    );
  }
  

  




