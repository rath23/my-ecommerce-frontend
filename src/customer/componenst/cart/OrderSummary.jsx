import React from 'react'
import AddressCard from '../addressCard/AddressCard'
import CartItem from './CartItem'


function OrderSummary() {
  return (
    <div>
      <div className='p-5 shadow-lg border rounded-s-md'>
        <AddressCard/>
      </div>
      <div className='p-5 py-10 lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='lg:col-span-2'>
       {[1,1,1,1].map((i,indx) => (<CartItem key={indx} />))} <CartItem/>
        </div>
        <div className='lg:col-span-1 px-5 sticky top-0 lg:mt-0'>
            <div className='border mt-3'>
                <p className='uppercase font-bold opacity-60 py-2 px-2  '>Price Details</p>
                <hr/>
                <div className='flex justify-between pt-3 px-2'>
                    <span> Price </span>
                    <span className='text-green-600'>$345</span>
                </div>
                <div className='flex justify-between pt-3 px-2'>
                    <span> Discount </span>
                    <span className='text-green-600'>$345</span>
                </div>
                <div className='flex justify-between pt-3 px-2'>
                    <span> Delivery Charge </span>
                    <span className='text-green-600'>Free</span>
                </div>
                <div className='flex justify-between pt-3 px-2'>
                    <span> Total Amount </span>
                    <span className='text-green-600 bold'>$345</span>
                </div>
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Checkout
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default OrderSummary