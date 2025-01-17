import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import eagle from "../images/eagle.png"
import SideNavigation from './SideNavigation';
import { SlClose } from "react-icons/sl";




const Heading = () => {


    // this controls the side navigation system
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }


    return (
        <div className=' bg-purple-800 h-[10vh] w-screen '>

            {/* this controls the modal */}
            {modal && (
                <div className='z-50 overlay top-0 left-0  bg-gray-500/75  w-screen h-[100vh] fixed ' onClick={toggleModal}>
                    <div className='modal bg-white w-[80vw] h-[100vh]'>

                        <div className='flex justify-between items-center px-5 bg-purple-800 text-white   h-[12vh]'>
                            <h1>Account Name</h1>
                            <div>
                                <SlClose className='text-2xl' onClick={toggleModal} />
                            </div>
                        </div>

                    </div>

                </div>

            )}


            <div className='flex justify-between items-center px-5'>



                {/* the bar icon */}
                <div>
                    <FaBars className='text-white text-3xl' onClick={toggleModal} />
                </div>



                {/* logo icon */}
                <div>
                    <img src={eagle} alt="" className='h-16 w-16' />
                </div>

            </div>


        </div>
    )
}

export default Heading