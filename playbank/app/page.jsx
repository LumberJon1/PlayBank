"use client";
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  // State management for transact button
  const [formHidden, setFormHidden] = useState(false);

  // State management for form inputs within transact modal
  const [amountValue, setAmountValue] = useState(0)

  // State management for the deposit or purchase toggle
  const [transactionType, setTransactionType] = useState("Purchase")


  // Handlers for the deposit and purchase buttons
  function handleDepositClick() {
    setTransactionType("Deposit");
    console.log("Set transaction type to Deposit");
  }
  
  function handlePurchaseClick() {
    setTransactionType("Purchase");
    console.log("Set transaction type to Purchase");
  }

  // Handler for the input value of the form changing with client input
  function handleFormChange(event) {
    setAmountValue(event.target.value);
    console.log("changed value to "+event.target.value)
  }

  // Handler for the transaction form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Submitted "+amountValue);
    setFormHidden(true);
  }

  // Handler for onClick event for transact button
  function handleTransactClick() {
    console.log("Clicked and setting state from "+formHidden);
    setAmountValue(0);
    setFormHidden (!formHidden);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div id="infobar" className='w-full flex items-center justify-center py-3 md:py-4 md:text-2xl border-b-4 border-gray-500'>
        <div className='w-1/4 md:w-1/3 text-center text-sm md:text-2xl'>
          {(new Date()).toLocaleDateString("en-US")}
        </div>
        <div className='w-1/2 md:w-1/3 text-center'>
          Balance: $
        </div>
        <div className='w-1/4 md:w-1/3 text-center'>
          <button
            id="transactButton"
            className='border border-emerald-500 rounded-lg bg-emerald-400 p-1 md:p-3 shadow-lg'
            onClick={handleTransactClick}
          >
            Transact
          </button>
        </div>
        {/* Hidden Modal Transaction Form Section */}
        {!formHidden && 
          <div 
            className='fixed top-1/3 rounded-lg shadow-lg z-10 bg-slate-200 flex flex-col items-center justify-center p-3 w-3/4 h-1/3'
          >
            <div className='w-full h-1/4'>
              <button
                className='bg-slate-700 w-1/2 text-zinc-100 p-1'
                onClick={handlePurchaseClick}
              >
                Purchase
              </button>
              <button
                className='bg-fuchsia-700 text-zinc-100 w-1/2 p-1'
                onClick={handleDepositClick}
              >
                Deposit
              </button>
            </div>
            <form action=""
              className='flex flex-col items-center justify-around w-full h-3/4'
            >
              <label htmlFor="amount">
                Transaction Amount
              </label>
              <div
                className='flex w-1/2 items-center justify-center'
              >
                $
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  onChange={handleFormChange}
                  value={amountValue}  
                />
              </div>
              <button
                type="submit"
                className='border-emerald-500 bg-emerald-400 rounded-lg'
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        }
        {/* Transaction History Section */}
      </div>
    </main>
  )
}
