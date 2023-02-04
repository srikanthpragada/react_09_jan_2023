import React, { Component } from 'react'

export default class DigitalClock extends Component {
  
  constructor() {
      super() 
      var cdt = new Date()
      this.clock =  `${cdt.getHours()}:${cdt.getMinutes()}:${cdt.getSeconds()}`
  }

  render() {
    return (
      <h1>{this.clock}</h1>
    )
  }
}
