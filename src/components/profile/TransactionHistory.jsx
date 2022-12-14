import React from 'react'

function TransactionHistory() {
  return (
    <div className="flex flex-row flex-wrap w-full bg-w1 rounded m-8 p-8 content-start">
      <span className="flex w-full font-type1 text-[20px] font-bold">
        Transaction History
      </span>
      <p className="flex w-full">
        View previous purchases and payments
      </p>
      <span className="h-[2px] bg-[black] w-full my-2" />

      <div className="flex-row flex-nowrap w-full space-y-2 p-2">
        <div className="flex w-full justify-start">
          No recent transaction history
        </div>
      </div>
    </div>
  )
}

export default TransactionHistory