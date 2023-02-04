import React from 'react'

export default function Course2({title, price, duration}) {
    return (
        <>
            <h1>Course Information</h1>
            <h2 className="text-primary">{title}</h2>
            <h3 className="text-success">{price + price * 0.18}</h3>
            <h3>{duration}</h3>
        </>
    )
}
