import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosWifi } from "react-icons/io";
import { HiTv } from "react-icons/hi2";
import { HiLightBulb } from "react-icons/hi";
import { GiVolleyballBall } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";





const Bills = () => {
  return (
    <div className='bg-white h-[80vh] overflow-scroll '>


      {/* -------Page Title------ */}
      <div className='flex justify-center text-2xl font-bold text-purple-800 '>
        <h1>BILLS</h1>
      </div>
      {/* -------End of page title-------- */}



      <div className='grid grid-cols-4 gap-3 p-5 text-sm'>

        {/* Airtime */}
        <div className='h-20 w-20 flex flex-col items-center justify-center  bg-white rounded-md drop-shadow-lg'>
          <FaPhoneAlt className='text-3xl text-yellow-500' />
          Airtime
        </div>

        {/* Internet */}
        <div className='h-20 w-20 flex flex-col items-center justify-center  bg-white rounded-md drop-shadow-lg'>
          <IoIosWifi className='text-4xl text-red-500' />
          Internet
        </div>

        {/* TV */}
        <div className='h-20 w-20 flex flex-col items-center justify-center  bg-white rounded-md drop-shadow-lg'>
          <HiTv className='text-3xl text-green-500' />
          TV
        </div>

        {/* Electricity */}
        <div className='h-20 w-20 flex flex-col items-center justify-center  bg-white rounded-md drop-shadow-lg'>
          <HiLightBulb className='text-4xl text-red-500' />
          Electricity
        </div>

        {/* Betting */}
        <div className='h-20 w-20 flex flex-col items-center justify-center  bg-white rounded-md drop-shadow-lg'>
          < GiVolleyballBall className='text-3xl text-blue-500' />
          Betting
        </div>


        {/* Education */}
        <div className='h-20 w-20 flex flex-col items-center justify-center  bg-white rounded-md drop-shadow-lg'>
          <IoMdSchool className='text-3xl text-yellow-500' />
          Education
        </div>


      </div>


    </div>
  )
}

export default Bills