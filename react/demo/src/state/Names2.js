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


function ListNames({names, deleteName, clearNames}) {
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
            <button onClick={clearNames}>Clear</button>
        </>
    )
}


export default function Names2() {
    const [names, setNames] = useState([])

    function deleteName(idxToDelete) {
        if (!window.confirm("Do you want to delete name?"))
            return;
        var newNames = names.filter((v, idx) => idx !== idxToDelete)
        setNames([...newNames])
    }

    function addName(name) {
        setNames( [...names, name])
    }

    function clearNames() {
        if (!window.confirm("Do you want to delete all names?"))
            return;
        setNames([])
    }

    return (
        <>
            <h1>Names 2</h1>
            <AddName names={names} addName={addName} />
            <p></p>
            {names.length > 0 &&  <ListNames names ={names}  
                                             deleteName={deleteName} 
                                             clearNames={clearNames}/>
            }
        </>

    )
}
