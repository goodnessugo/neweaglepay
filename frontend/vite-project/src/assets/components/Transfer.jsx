import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import nigeria from "../images/nigeria.png"
import { FaPaste } from "react-icons/fa";
import Balance from './Balance';
import { Link } from 'react-router-dom';


const Transfer = () => {
  return (
    <div className='bg-white h-[80vh] overflow-scroll '>


      {/* -------Page Title------ */}
      <div className='flex justify-center text-2xl font-bold text-purple-800 '>
        <h1>TRANSFER</h1>
      </div>
      {/* -------End of page title-------- */}

      <Link to='/'>
        <div className='text-2xl my-5 flex items-center font-bold gap-10' >


          <IoIosArrowBack />


          <div className='flex items-center'>
            <h1>New NGN Recipient</h1>
            <img src={nigeria} alt="" className='w-8 h-8' />

          </div>
        </div>

      </Link>

      {/* bank */}
      <div className='flex flex-col mx-5 mt-2'>

        <div className='flex justify-between items-start'>

          <label htmlFor="">Bank</label>


          {/* balance preview */}
          <div className='text-xl'>
            <Balance />
          </div>
        </div>

        {/* <input type="text" placeholder='Select Bank' className='p-3 text-xl outline-none border-none bg-gray-100' /> */}
        <select name="banks" id="banks" className='p-3 text-xl outline-none border-none bg-gray-100'>
          <option value="select" className=' '>Select Bank</option>
          <option value="zenith">Zenith</option>
          <option value="access">Access</option>
          <option value="uba">Uba</option>
          <option value="first">First</option>
        </select>
      </div>

      {/* Account Number */}
      <div className='flex flex-col mx-5 mt-5'>
        <label htmlFor="">Account Number</label>

        <div className='flex bg-gray-100 mb-32'>
          <input type="text" placeholder='Enter Account Number' className='p-3 text-xl outline-none border-none bg-gray-100' />

          <h1 className='flex items-center gap-2'>PASTE <FaPaste /></h1>

        </div>


        {/* the send button */}
        <div className='w-full bg-green-500 h-20 flex jusity-end items-end '>
          <button className='w-full bg-purple-200 h-20 hover:bg-purple-800 text-white text-2xl font-bold'>
            Send
          </button>
        </div>
      </div>




    </div>
  )
}

export default Transfer