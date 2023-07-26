import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="infobar" className='w-full flex items-center justify-center py-4 text-2xl border-b-4 border-gray-500'>
        <div className='w-1/3 text-center'>
          {(new Date()).toLocaleDateString("en-US")}
        </div>
        <div className='w-1/3 text-center'>
          Balance: $
        </div>
        <div className='w-1/3 text-center'>
          <button
            id="transactButton"
            className='border border-emerald-500 rounded-lg bg-emerald-400 p-3 shadow-lg'
            onClick={console.log("Clicked transact button")}
          >
            Transact
          </button>
        </div>
        {/* Hidden Modal Transaction Form Section */}
        {/* Transaction History Section */}
      </div>
    </main>
  )
}
