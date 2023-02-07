import React, { useState } from 'react'

export default function Names() {
    const [names, setNames] = useState([])

    function addName() {
        var name = document.getElementById("txtName").value
        setNames([...names, name])
    }

    return (
        <>
            <h1>Names</h1>
            Name <input type="text" id="txtName" />
            <button onClick={addName}>Add</button>
            <p></p>
            <ul>
                {
                    names.map((n, idx) => <li key={idx}>{n}</li>)
                }
            </ul>
        </>

    )
}
