import React, { useState } from 'react'

function AddPassenger({ addNewPassenger }) {
    const [pname, setPname] = useState("")
    const [gender, setGender] = useState("male")
    const [age, setAge] = useState("")

    // Handle form submission 
    function addPassenger(e) {
        console.log(pname, gender, age)
        addNewPassenger({ name: pname, gender: gender, age: age })
        e.preventDefault()
    }

    function updatePname(e) {
        setPname(e.target.value)
    }

    function updateAge(e) {
        setAge(e.target.value)
    }

    function updateGender(e) {
        setGender(e.target.value)
    }

    return (
        <>
            <form onSubmit={addPassenger}>
                Name <br />
                <input onChange={updatePname} type="text" required value={pname} />
                <p />
                Gender <br />
                <select value={gender} onChange={updateGender}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <p />
                Age <br />
                <input onChange={updateAge} type="number" value={age} required />
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
            <h1>Passengers Form</h1>
            <AddPassenger addNewPassenger={addNewPassenger} />
            <p></p>
            {passengers.length > 0 &&
                <ListPassengers passengers={passengers} deletePassenger={deletePassenger} />}
        </>
    )
}
