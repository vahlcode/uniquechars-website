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

        const stringEs = `import { UNIQUE_STRING } from 'uniquechars'\n\nconsole.log(UNIQUE_STRING())\n\n// ⇨ 'QB|941@D#XK&5YD7' for example`
        const stringEsPR = `import { UNIQUE_STRING } from 'uniquechars'\n\nconsole.log(UNIQUE_STRING(string, length))\n\n// ⇨ 'QB|941@D#XK&5YD7' for example`
        const stringCJ = `let { UNIQUE_STRING } = require('uniquechars')\n\nconsole.log(UNIQUE_STRING())\n\n// ⇨ 'QB|941@D#XK&5YD7' for example`
        const stringCJPR = `let { UNIQUE_STRING } = require('uniquechars')\n\nconsole.log(UNIQUE_STRING(string, length))\n\n// ⇨ 'QB|941@D#XK&5YD7' for example`
        const numberEs = `import { UNIQUE_NUMBER } from 'uniquechars'\n\nconsole.log(UNIQUE_NUMBER())\n\n// ⇨ 'QB|941@D#XK&5YD7' for example`
        const numberEsPR = `import { UNIQUE_NUMBER } from 'uniquechars'\n\nconsole.log(UNIQUE_NUMBER(number, length))\n\n// ⇨ 'QB|941@D#XK&5YD7' for example`
        const numberCJ = `let { UNIQUE_NUMBER } = require('uniquechars')\n\nconsole.log(UNIQUE_NUMBER())\n\n// ⇨ 'QB|941@D#XK&5YD7' for example`
        const numberCJPR = `let { UNIQUE_NUMBER } = require('uniquechars')\n\nconsole.log(UNIQUE_NUMBER(number, length))\n\n// ⇨ 'QB|941@D#XK&5YD7' for example`
        const passEs = `import { UNIQUE_PASS } from 'uniquechars'\n\nconsole.log(UNIQUE_PASS())\n\n// ⇨ 'QB|941@D#XK&5YD7' for example`
        const passEsPR = `import { UNIQUE_PASS } from 'uniquechars'\n\nconsole.log(UNIQUE_PASS(string, length))\n\n// ⇨ 'QB|941@D#XK&5YD7' for example`
        const passCJ = `let { UNIQUE_PASS } = require('uniquechars')\n\nconsole.log(UNIQUE_PASS())\n\n// ⇨ 'QB|941@D#XK&5YD7' for example`
        const passCJPR = `let { UNIQUE_PASS } = require('uniquechars')\n\nconsole.log(UNIQUE_PASS(string, length))\n\n// ⇨ 'QB|941@D#XK&5YD7' for example`

        const stringLog = `console.log(UNIQUE_STRING(string, length))\n\n// ⇨ 'QB|941@D#XK&5YD7' for example\n\nstring = "#@%&*!(){}[]=_+|/\/ABCDEFGHIJKLMOPQRSTUVWXYZ1234567890"\n\nlength = 16`
        const numberLog = `console.log(UNIQUE_NUMBER(number, length)) // ⇨ '1098276235427165' for example\n\nnumber = "1234567890"\n\nlength = 16`
        const passLog = `console.log(UNIQUE_PASS(string, length)) // ⇨ 'QB|941@D#XK&5YD7' for example\n\nstring = "#@%&*!(){}[]=_+|/\/ABCDEFGHIJKLMOPQRSTUVWXYZ1234567890"\n\nlength = 16`

        return(
            <div className={`instructions${draw ? " draw" : ""}`}>
                <h2>Installation</h2>
                <pre className="line-numbers language-shell">
                    <code className="language-shell">
                        {`npm i uniquechars`}
                    </code>
                </pre>
                <h2>Usage</h2>
                <h5>1. To get unique random strings.</h5>
                <h6><b><i>With ES6 module syntax.</i></b></h6>
                <p>To get unique random strings without parameters.</p>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {stringEs}
                    </code>
                </pre>
                <p>To get unique random strings with parameters.</p>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {stringEsPR}
                    </code>
                </pre>
                <h6><b><i>With CommonJS syntax.</i></b></h6>
                <p>To get unique random strings without parameters.</p>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {stringCJ}
                    </code>
                </pre>
                <p>To get unique random strings with parameters.</p>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {stringCJPR}
                    </code>
                </pre>
                <p><i>String must be a string data type and length must be a number data type.</i></p>
                
                <h5>2. To get unique random number.</h5>
                <h6><b><i>With ES6 module syntax.</i></b></h6>
                <p>To get unique random number without parameters.</p>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {numberEs}
                    </code>
                </pre>
                <p>To get unique random number with parameters.</p>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {numberEsPR}
                    </code>
                </pre>
                <h6><b><i>With CommonJS syntax</i></b></h6>
                <p>To get unique random number without parameters.</p>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {numberCJ}
                    </code>
                </pre>
                <p>To get unique random number with parameters.</p>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {numberCJPR}
                    </code>
                </pre>
                <p><i>Number must be a number data type and length must be a number data type.</i></p>
                
                <h5>3. To get unique random password</h5>
                <h6><b><i>With ES6 module syntax</i></b></h6>
                <p>To get unique random password without parameters.</p>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {passEs}
                    </code>
                </pre>
                <p>To get unique random password with parameters.</p>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {passEsPR}
                    </code>
                </pre>
                <h6><b><i>With CommonJS syntax</i></b></h6>
                <p>To get unique random password without parameters.</p>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {passCJ}
                    </code>
                </pre>
                <p>To get unique random password with parameters.</p>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {passCJPR}
                    </code>
                </pre>
                <p><i>String must be a string data type and length must be a number data type.</i></p>

                <h2>Default parameters</h2>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {stringLog}
                    </code>
                </pre>

                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {numberLog}
                    </code>
                </pre>

                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {passLog}
                    </code>
                </pre>

                <h2>Author</h2>
                <a href="https://twitter.com/vahlcode">Valentine Elum</a>
                <a href="https://github.com/vahlcode/uniquechars">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
                <h2>License</h2>
                <p>MIT License</p>
            </div>
        )
    }
}