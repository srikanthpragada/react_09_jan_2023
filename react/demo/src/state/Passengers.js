import React, { useState } from 'react'

function AddPassenger({ addNewPassenger }) {
    const [details, setDetails] = 
          useState({name : '', gender:'male', age:0})
    
    // Handle form submission 
    function addPassenger(e) {
        addNewPassenger(details)
        e.preventDefault()
    }

    function updateField(e) {
         var name = e.target.name 
         var value = e.target.value 
         // replace value of field that is updated
         setDetails( {...details, [name] : value}) 
    }

    return (
        <>
            <form onSubmit={addPassenger}>
                Name <br />
                <input name="name" onChange={updateField} type="text"
                  required value={details.name} />
                <p />
                Gender <br />
                <select name="gender" value={details.gender} 
                        onChange={updateField}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <p />
                Age <br />
                <input name="age" onChange={updateField} type="number" 
                     value={details.age} required />
                <p />
                <button>Add</button>
            </form>
        </>
    )
}

function ListPassengers({ passengers, deletePassenger }) {
    function deletePassengerByIndex(idx) {
        deletePassenger(idx)
    }
    return (
        <>
            <h2>Passengers List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr><th>Name</th><th>Gender</th><th>Age</th><th></th></tr>
                </thead>
                <tbody>
                    {
                        passengers.map((p, idx) =>
                            <tr key={idx}>
                                <td>{p.name}</td>
                                <td>{p.gender}</td>
                                <td>{p.age}</td>
                                <td><button onClick={() => deletePassengerByIndex(idx)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default function Passengers() {
    const [passengers, setPassengers] = useState([])

    function addNewPassenger(passenger) {
        setPassengers([...passengers, passenger])
        console.log(passengers)
    }
    function deletePassenger(idxToDelete) {
        var newPassengers = passengers.filter((v, idx) => idx !== idxToDelete)
        setPassengers([...newPassengers])
    }

    return (
        <>
            <h1>Passengers Form Version 2</h1>
            <AddPassenger addNewPassenger={addNewPassenger} />
            <p></p>
            {passengers.length > 0 &&
                <ListPassengers passengers={passengers} deletePassenger={deletePassenger} />}
        </>
    )
}
