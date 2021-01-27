import React, { Component } from 'react'
import Background from "../images/blockchain.jpg"
import PropTypes from 'prop-types';
import DocInfo from './DocInfo'
import MLAInfo from './MLAInfo'

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
          <h2>Profile</h2>
          <MLAInfo participants2 = { this.props.participants2 } />
      </div>
      </div>
      );
  }
}

export default Participants