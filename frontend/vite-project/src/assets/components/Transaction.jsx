import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";
import zenith from '../images/zenith.jpg'
import uba from '../images/uba.jpg'
import paypal from '../images/paypal.jpg'
import CustomerTransaction from './CustomerTransaction';

const Transaction = () => {
  return (
    <div className='bg-white h-[80vh] overflow-scroll'>

      {/* -------Page Title------ */}
      <div className='flex justify-center text-2xl font-bold text-purple-800 '>
        <h1>TRANSACTIONS</h1>
      </div>
      {/* -------End of page title-------- */}



      <div className='flex justify-between  items-center mx-5  '>

        {/* -----search bar and input------- */}
        <div className='mt-5 border px-5 py-1'>
          <form action="" className='flex items-center'>
            <FaSearch className='text-gray-300' />
            <input type="text" className=' p-3 outline-none' />
          </form>

        </div>


        {/* statement of account date */}
        <div>
          <IoCalendarSharp className='text-4xl text-purple-800' />
        </div>
      </div>



      {/* Transaction day and dates */}

      <div className=''>
        <div className='my-5 px-5 bg-purple-300 py-2 '>
          <h1>08 Dec 2024</h1>
        </div>


        {/* ------------------Begining of A customer transaction------------------ */}
      <CustomerTransaction />



      </div>


    </div>
  )
}

export default Transaction