import React, { useState } from 'react'

export default function Names() {
    const [names, setNames] = useState([])
    const [message, setMessage] = useState("")

    function addName() {
        setMessage("");
        var name = document.getElementById("txtName").value
        if (names.includes(name))  // name is already in the array
        {
            setMessage("Duplicate Name!!");
            return;
        }
        setNames([...names, name])
    }

    function deleteName(idxToDelete) {
        var newNames = names.filter(  (v,idx) => idx !== idxToDelete)
        setNames([...newNames])
    }
    
    return (
        <>
            <h1>Names</h1>
            Name <input type="text" id="txtName" />
            <button onClick={addName}>Add</button>
            <span className="text-danger">{message}</span>
            <p></p>
            <ul>
                {
                   names.map((n, idx) => 
                     <li key={idx}>
                        {n} &nbsp; 
                        <button onClick={ () => deleteName(idx)} className="btn btn-link">Delete</button>
                     </li>
                   )
                }
            </ul>
        </>

    )
}
