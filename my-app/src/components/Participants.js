import React, { Component } from 'react'
import Background from "../images/blockchain.jpg"

var divStyle = {
  width: "100%",
  height: "100vh",
  opacity: 1.0,
  zIndex: 0,
  color: '#fff',
  backgroundImage: "url(" + Background + ")"
};

class Participants extends Component {

  render() {

    return (
      <div style ={divStyle}>
      <div>
          <h2>Participants</h2>
      </div>
      </div>
      );
  }
}

export default Participants