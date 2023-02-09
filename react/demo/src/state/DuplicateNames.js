import React, { useState } from 'react'


function AddName({ names, addName }) {

    function add() {
        var name = document.getElementById("txtName").value
        var duplicate = false 
        if (names.find( (obj) => obj.name === name))  // name is already in the array
        {
            duplicate = true;
        }
        addName(name, duplicate);  // call function provided by parent 
    }

    return (
        <>
            Name <input type="text" id="txtName" />
            <button onClick={add}>Add</button>
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
                            {n.duplicate ? 
                                <span className="text-danger">{n.name}</span>
                                :
                                <span>{n.name}</span>
                            }
                        </li>
                    )
                }
            </ul>
        </>
    )
}


export default function DuplicateNames() {
    const [names, setNames] = useState([])
 
    function addName(name, duplicate) {
        setNames( [...names, {name : name, duplicate : duplicate}])
    }

    
    return (
        <>
            <h1>Duplicate Names</h1>
            <AddName names={names} addName={addName} />
            <p></p>
            <ListNames names ={names}    />
        </>

    )
}
