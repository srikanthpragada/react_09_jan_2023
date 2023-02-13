import React, { useEffect, useState, useRef } from 'react'
import $ from 'jquery'

export default function TimeInTimezone() {
    const [now, setNow] = useState('')
    const [timezones, setTimezones] = useState([])
    const ddlTimezones = useRef()

    useEffect(getTimezones, []);


    function getTimezones() {
        $.getJSON('http://worldtimeapi.org/api/timezone',
            (result) => setTimezones(result));
    }

    function getTime() {
        // take timezone from select 
        var timezone = ddlTimezones.current.value;
        console.log(timezone)
        // get time for the selected timezone 
        var url = "http://worldtimeapi.org/api/timezone/" + timezone;
        $.getJSON(url, (result) => setNow(result.datetime));
    }

    return (
        <>
            <h2>Time in Timezone</h2>
            Select Timezone :
            <select ref={ddlTimezones}>
                {
                    timezones.map((tz, idx) =>
                        <option key={idx} value={tz}>{tz}</option>)
                }
            </select>
            <p></p>
            <button onClick={getTime}>Get Time</button>
            <h1>{now}</h1>

        </>
    )
}
