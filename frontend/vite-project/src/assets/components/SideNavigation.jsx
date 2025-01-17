import React, { useState } from 'react'
import { SlClose } from "react-icons/sl";

const SideNavigation = () => {


    const [modal, setModal] = useState(false);


    const toggleModal = () => {
        setModal(!modal)
    }



    return (
        <div>



            <div className='top-0 left-0  bg-gray-500/50  w-screen h-[100vh]'>
                <div className='  bg-yellow-500 w-[80vw] h-[100vh]'>

                    <div className='flex justify-between items-center px-5 bg-red-500  h-[10vh]'>
                        <h1>Account Name</h1>
                        <div>
                            <SlClose className='text-2xl' onClick={toggleModal} />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SideNavigation