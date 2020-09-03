import React, {Component} from 'react';
import './App.css';

import { Intro } from "./Components/Intro/Intro";
import { Instructions } from "./Components/Instructions/Instructions";

class App extends Component {
  constructor() {
    super()
    this.state = {
      draw: false
    }
  }

  componentDidMount() {
    const GET_STARTED = document.querySelector("#read")
    const INSTRUCTIONS = document.querySelector(".instructions")

    GET_STARTED.addEventListener("click", () => {
      this.setState({draw: true}, () => {
        INSTRUCTIONS.scrollIntoView(false)
      })
    })
  }

  render() {
    const {draw} = this.state
    return (
      <div className={`App${draw ? " draw" : ""}`}>
        <Intro draw={draw}/>
        <Instructions draw={draw}/>
      </div>
    )
  }
}

export default App;
