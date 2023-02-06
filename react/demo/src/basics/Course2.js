import React from 'react'
import PropTypes from 'prop-types';

export default function Course2({title, price, duration}) {
    return (
        <>
            <h1>Course Information</h1>
            <h2 className="text-primary">{title}</h2>
            <h3 className="text-success">{price + price * 0.18}</h3>
            <h3>{duration}</h3>
        </>
    )
} // component 

// validate properties     
Course2.propTypes = {
    title : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    duration : PropTypes.number.isRequired
};