import React from 'react'
import { FaList } from "react-icons/fa6";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { BiTransferAlt } from "react-icons/bi";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';



const Navigation = () => {
    return (
        <>
           
            <div className='  flex justify-between items-center px-5 text-gray-500 w-screen  h-[10vh] bg-white'>
                {/* overview icon */}
                <Link to='/' className='flex flex-col items-center focus:text-red-500'>
                    <FaList className='text-2xl' />
                    <h1>Overview</h1>
                </Link>

                {/* Airtime Icon*/}
                <Link to='/airtime' className='flex flex-col items-center focus:text-red-500 '>
                    <TbDeviceMobileMessage className='text-3xl' />
                    <h1>Airtime</h1>
                </Link>

                {/* Transfer icon */}
                <Link  to='/transfer' className='flex flex-col items-center  focus:text-red-500'>
                    <BiTransferAlt className='text-3xl' />
                    <h1>Transfer</h1>
                </Link>

              

                {/* Bills icon */}
               
                <Link to='/bills' className='flex flex-col items-center focus:text-red-500 '>
                    < LiaMoneyBillWaveSolid className='text-3xl' />
                    <h1>Bills</h1>
                </Link>





            </div>
{/* 
            <div {...props}>
                {children}

            </div> */}
        </>
    )
}

export default Navigation