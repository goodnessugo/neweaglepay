import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import { TbCurrencyNaira } from "react-icons/tb";
import { BsToggle2Off } from "react-icons/bs";
import { HiArrowCircleUp } from "react-icons/hi";
import { FaCirclePlus } from "react-icons/fa6";
import { HiPlusCircle } from "react-icons/hi2";
import Bills from './Bills';
import Transaction from './Transaction';
import CustomerTransaction from './CustomerTransaction';
import { Link } from 'react-router-dom';
import BillsCollection from './BillsCollection';
import Balance from './Balance';
import Axios from 'axios'

const Overview = () => {

    // linking to backend from frontend
    const [data, setData] = useState("");

    const getData = async () => {
        const response = await Axios.get("http//localhost:5000/getData");
        setData(response.data);
    }

    useEffect(() => {
        getData()
    }, []);



    // --------end of linking to Backend from frontend










    // this previews the Balance off/on

    const [balance, setBalance] = useState(false);

    const handleBalance = () => {
        setBalance(!balance)
    }



    return (
        <div className='bg-white h-[80vh] overflow-scroll '>

            {/* <div>{data}</div> */}

            {/* -----------------Total balance section ---------------------- */}
            <div className='  mx-5  h-28 '>

                <div className='flex justify-between items-end  text-white p-5 my-5 bg-gradient-to-r from-purple-800 to-[#9400d3] rounded-lg drop-shadow-xl'>

                    <div className=''>
                        <h1>TOTAL BALANCE</h1>

                        <div className={` flex text-3xl mt-3 ${(balance === true) ? 'blur-[5px]' : 'blur-none'}`}>
                            <TbCurrencyNaira />

                            <Balance />
                        </div>
                    </div>





                    <div className='flex items-center ' >
                        <h1 className='text-sm me-2' onClick={handleBalance}>Show balance</h1>
                        <BsToggle2Off className='text-2xl' />
                    </div>
                </div>

                {/* -------------- end of Total balance----------------------- */}


                {/* --------------transfer and add money section-------------  */}
                <div className=' flex justify-between items-center cursor-pointer text-white'>

                    <Link to='/transfer'>
                        <div className='flex justify-between items-center bg-purple-800 px-8 py-5'>
                            < HiArrowCircleUp className='me-1 text-2xl' />
                            <h1>Transfer</h1>
                        </div>
                    </Link>


                    <Link to='/addmoney'>
                        <div className='flex justify-between items-center bg-purple-800 px-6 py-5'>
                            <  HiPlusCircle className='me-1 text-2xl' />
                            <h1>Add money</h1>
                        </div>
                    </Link>



                </div>


                {/* --------------Transaction section--------------------- */}

                <div className=' flex  justify-between items-center  bg-purple-300 p-3 mt-4'>
                    <h1>Bills </h1>

                    <Link to='/bills'>
                        <button className=' font-bold p-2'>
                            View All
                        </button>
                    </Link>

                </div>
                {/* Bills section  */}
                <div className='  h-24 overflow-hidden'>
                    <BillsCollection />
                </div>

                {/* Transaction section */}

                <div className=' flex  justify-between items-center  bg-purple-300 p-3 mt-2'>
                    <h1>Transaction</h1>

                    <Link to='/transaction'>
                        <button className=' font-bold p-2'>
                            View All
                        </button>
                    </Link>

                </div>
                <div className=' h-64 overflow-hidden text-sm'>
                    <CustomerTransaction />
                </div>
            </div>



        </div>
    )
}

export default Overview