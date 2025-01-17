import React, { useEffect, useState } from 'react'

// api key from weathe api.com
const URL = 'http://api.weatherapi.com/v1/current.json?key=674a400c8fd54ba4aa1115309251701&q=London&aqi=no';

const TestPage = () => {

    // calling useState
    const [temp, setTemp] = useState(0)

useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(URL)
        result.json().then(json => {
            console.log(json);
            setTemp(json.current.temp_f);
        })
    }
})



    return (
        <div>
            <h1>TestPage</h1>
            {/* let make the temperature dynamic by adding {.......} */}
            London Temp Now: {temp} F

        </div>
    )
}

export default TestPage