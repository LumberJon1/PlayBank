"use client";
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  // State management for transact button
  const [formHidden, setFormHidden] = useState(true);


  // Handler for onClick event for transact button
  function handleTransactClick() {
    console.log("Clicked and setting state from "+formHidden);
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
            <div className='w-full'>
              <button
                className='bg-slate-400 w-1/2 p-1'
                onClick={console.log("Clicked purchase button.")}
              >
                Purchase
              </button>
              <button
                className='bg-amber-400 w-1/2 p-1'
                onClick={console.log("Clicked deposit button.")}
              >
                Deposit
              </button>
            </div>
            Form
          </div>
        }
        {/* Transaction History Section */}
      </div>
    </main>
  )
}
