import React, { Component } from "react";

import "./Intro.css";

export class Intro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            draw: props.draw
        }
    }

    componentWillReceiveProps({draw}) {
        this.setState({draw})
    }

    render() {
        const {draw} = this.state
        return(
            <div className={`intro${draw ? " draw" : ""}`}>
                <h5>UNIQUE CHARS</h5>
                <h1>
                   Generate random strings and numbers from from strings or group of numbers.
                </h1>
                <button id="read">
                    <span>Get Started</span>
                </button>
            </div>
        )
    }
}