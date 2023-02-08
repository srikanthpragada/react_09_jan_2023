import React, { useState } from 'react'


function AddName({ names, addName }) {
    const [message, setMessage] = useState("")

    function add() {
        setMessage("");
        var name = document.getElementById("txtName").value
        if (names.includes(name))  // name is already in the array
        {
            setMessage("Duplicate Name!!");
            return;
        }

        addName(name);  // call function provided by parent 
    }


    return (
        <>
            Name <input type="text" id="txtName" />
            <button onClick={add}>Add</button>
            <span className="text-danger">{message}</span>
        </>

    )
}


function ListNames({names, deleteName}) {
    return (
        <>
            <ul>
                {
                    names.map((n, idx) =>
                        <li key={idx}>
                            {n} &nbsp;
                            <button className="btn btn-link"
                                    onClick={() => deleteName(idx)}>Delete</button>
                        </li>
                    )
                }
            </ul>
        </>
    )
}


export default function Names2() {
    const [names, setNames] = useState([])

    function deleteName(idxToDelete) {
        var newNames = names.filter((v, idx) => idx !== idxToDelete)
        setNames([...newNames])
    }

    function addName(name) {
        setNames( [...names, name])
    }

    return (
        <>
            <h1>Names 2</h1>
            <AddName names={names} addName={addName} />
            <p></p>
            <ListNames names ={names}  deleteName={deleteName}/>
        </>

    )
}
