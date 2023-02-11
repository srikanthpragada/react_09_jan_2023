import React, { useEffect, useState } from 'react'

export default function DigitalClock() {
    const [time, setTime] = useState("")
    const [timerId, setTimerId] = useState()

    useEffect(() => {
        // Executed when mounted 
        console.log("Mounted!!")
        var id = setInterval(changeTime, 1000)
        setTimerId(id)
 
        // called at the end for clean up  - unmount 
        return () => {
             console.log("Unmounted!!")
             clearInterval(timerId)
        };
    }, [])

    function changeTime() {
        setTime(new Date().toLocaleTimeString())
    }
    return (
        <h1>{time}</h1>
    )
} // function 
