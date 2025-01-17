import React from 'react'
import { IoIosCopy } from "react-icons/io";

const AddMoney = () => {
    return (
        <div className='bg-white h-[80vh] overflow-scroll mx-5 '>
            <div className='pt-2'>
                <h1>Use the datails below to Send money to your Eagle Bank Account</h1>
            </div>

            <div>
                {/* bank */}
                <div className='mt-5'>
                    <label htmlFor="">Bank</label>
                    <div className='bg-gray-300 h-16 flex  px-5 text-xl items-center'>
                        <h1>Eagle Bank</h1>
                    </div>
                </div>


                {/* Account Number */}
                <div className='mt-5'>
                    <label htmlFor="">Account Number</label>
                    <div className='bg-gray-300 h-16 flex justify-between  px-5 text-xl items-center'>
                        <h1>2008534299</h1>

                        <div className='flex font-bold  items-center '>
                            <h1>Copy </h1>
                            <IoIosCopy />
                        </div>
                    </div>
                </div>



                {/* Account Name */}

                <div className='mt-5'>
                    <label htmlFor="">Account Name</label>
                    <div className='bg-gray-300 h-16 flex  px-5 text-xl items-center'>
                        <h1>Goodness George Ugochukwu</h1>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default AddMoney