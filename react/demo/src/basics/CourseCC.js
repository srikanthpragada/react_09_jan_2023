import React, { Component } from 'react'

export default class CourseCC extends Component {
    constructor(props) {
        super(props)
        // create instance variables 
        this.title = props.title
        this.price = props.price
        this.duration = props.duration 
    }
  render() {
    return (
        <>
            <h1>Course Information</h1>
            <h2>{this.title}</h2>
            <h3>{this.price + this.price * 0.18}</h3>
            <h3>{this.duration}</h3>
        </>
    )
  }
}
