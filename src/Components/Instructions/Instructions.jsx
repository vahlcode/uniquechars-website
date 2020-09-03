import React, { Component } from "react";
import "./Instructions.css";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

Prism.highlightAll();

export class Instructions extends Component {
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

        const ESCode = `import readCount from 'read_count';
        \nreadCount('Lorem ipsum, dolor sit amet consectetur adipisicing elit.'); // ⇨ '4 seconds'`
        

        const CMCode = `import readCount from 'read_count';
        \nreadCount('Lorem ipsum, dolor sit amet consectetur adipisicing elit.'); // ⇨ '4 seconds'`

        return(
            <div className={`instructions${draw ? " draw" : ""}`}>
                <h2>Quick Start</h2>
                <h3>Installation</h3>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {`npm i read_count`}
                    </code>
                </pre>
                <h3>Usage</h3>
                <h5>1. Use <i>read_count</i> with ES6 module syntax</h5>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {ESCode}
                    </code>
                </pre>                
                <h5>2. Use <i>read_count</i> with CommonJS syntax</h5>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {CMCode}
                    </code>
                </pre>                
                <h2>Author</h2>
                <a href="https://twitter.com/vahlcode">Valentine Elum</a>
                <h2>License</h2>
                <p>MIT License</p>
            </div>
        )
    }
}