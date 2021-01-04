import React, { Component } from 'react'
import Background from '../images/blockchain.jpg';
import MailButton from './MailButton'

var sectionStyle = {
  width: "100%",
  height: "100vh",
  opacity: 1.0,
  zIndex: 0,
  color: '#fff',
  backgroundImage: "url(" + Background + ")"
};

const buttonStyle = {
    marginTop: '32px',
    color: '#fff',
    height: '12%',
    background: '#1a6291',
    borderRadius: '5px',
    width: '35%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    padding: '10px',
};

const textStyle = {
    textAlign: 'center',
    paddingTop: '6vh',
    paddingBottom: '5vh',
};

class Section extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
          <div>
            <ul style= { textStyle }>
                <li>a simple, blockchain-based platform</li>
                <li></li>
                <li></li>
                <li>with a decentral and autonomous organisation</li>
                <li></li>
                <li></li>
                <li>for specific healthdata and cancer prevention</li>
                <li></li>
                <li></li>
                <li>supports multiple Machine-Learning-Platforms</li>
            </ul>
          </div>
          <div style={ buttonStyle }>
            <div id="special">
            <a id="special-link" href="mailto:max.mustermann@example.com?body=Hallo AI Diagnostics,">Join Our Network</a>
            </div>
          </div>
      </section>
    );
  }
}

export default Section

/*<MailButton label="Join Our Network" mailto="06386lipka@googlemail.com"/>*/