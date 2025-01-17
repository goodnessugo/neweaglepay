import React, { useState } from 'react'

const Balance = () => {


    const [blur, setBlur] = useState(false)

    // the click function the controls the blur
    const handleClick = () => {
        setBlur(!blur)
    }


    return (
        <div className=' h-12'>

            {/* here we are applyig the click function  to the text  */}
            <h1 onClick={handleClick} className={`${(blur === true) ? 'blur-[5px]' : 'blur-none'}`}>
                25,000
            </h1>

        </div>
    )
}

export default Balance