import React from 'react'
import mtn from '../images/mtn.jpg';
import airtel from '../images/airtel.jpg';
import Ninemobile from '../images/9mobile.jpg';
import glo from '../images/glo.jpg';


const Airtime = () => {
  return (
    <div className='bg-white h-[80vh] overflow-scroll '>

      <form action="" className=''>



        <div className='mx-5 mt-5 relative'>

          {/* amount section */}
          <div className='text-lg'>
            <h1>Amount</h1>
            <input type="text" className=' bg-gray-100 w-full h-16 outline-none border-none px-5' />

          </div>


          {/* choose network section */}
          <div className='text-lg mt-5'>
            <h1>Choose Network</h1>

            {/* list of Networks */}
            <div className='text-sm grid grid-cols-4 mt-2'>

              {/* Airtel*/}
              <div className=' flex flex-col justify-center items-center w-20 h-20 rounded-lg shadow-lg '>

                <img src={mtn} alt="" className='bg-red-500 rounded-full h-8 w-8' />
                <h1>MTN</h1>
              </div>


              {/* Airtel*/}
              <div className=' flex flex-col justify-center items-center w-20 h-20 rounded-lg shadow-lg '>

                <img src={airtel} alt="" className='bg-red-500 rounded-full h-8 w-8' />
                <h1>Airtel</h1>
              </div>


              {/* Airtel*/}
              <div className=' flex flex-col justify-center items-center w-20 h-20 rounded-lg shadow-lg '>

                <img src={Ninemobile} alt="" className='bg-red-500 rounded-full h-8 w-8' />
                <h1>9mobile</h1>
              </div>


              {/* Airtel*/}
              <div className=' flex flex-col justify-center items-center w-20 h-20 rounded-lg shadow-lg '>

                <img src={glo} alt="" className='bg-red-500 rounded-full h-8 w-8' />
                <h1>Glo</h1>
              </div>



            </div>

            <div>

              {/* phone number section */}
              <div className=' mt-8  mb-20'>
                <div className='flex justify-between text-sm mb-2'>
                  <h1>Phone Number</h1>
                  <h1 className='font-bold'>Choose Contact</h1>
                </div>

                <input type="text" placeholder='08012345687' className=' bg-gray-100 w-full h-16 outline-none border-none px-5' />

              </div>




            </div>
          </div>


          <div className='w-full bg-green-500 h-20 flex jusity-end items-end '>
            <button className='w-full bg-purple-200 h-20 hover:bg-purple-800 text-white text-2xl font-bold'>
              Next
            </button>
          </div>
        </div>


      </form>
    </div>
  )
}

export default Airtime