import React from "react"
import Dice from "./Dice.js"
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Dice />
      </div>
    )
  }
}

export default App;
