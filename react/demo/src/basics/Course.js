import React from 'react'

export default function Course(props) {
    return (
        <>
            <h1>Course Information</h1>
            <h2>{props.title}</h2>
            <h3>{props.price + props.price * 0.18}</h3>
            <h3>{props.duration}</h3>
        </>
    )
}
