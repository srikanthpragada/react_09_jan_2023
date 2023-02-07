import React, { Component } from 'react'

export default class EventsDemo extends Component {
    constructor() {
        super()
        this.name = "React";
        this.show = this.show.bind(this);
    }

    show() {
        window.alert(this.name);
    }

    render() {
        return (
            <>
                <button onClick={this.show}>Show</button>
            </>
        )
    }
}
