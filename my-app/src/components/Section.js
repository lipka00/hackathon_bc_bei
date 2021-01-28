import React, { Component } from 'react'
import Background from '../images/blockchain.jpg';
import ls from 'local-storage'

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
    height: '16%',
    background: '#1a6291',
    borderRadius: '5px',
    width: '35%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    padding: '10px',
    marginTop: 'auto',
    marginBottom: 'auto'
};

const textStyle = {
    textAlign: 'center',
    paddingTop: '6vh',
    paddingBottom: '5vh',
};

const buttons = {
  display: 'flex',
  paddingTop: '6vh',
  paddingBottom: '5vh',
};

class Section extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: ''
    };
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(json => this.setState({
      type: ls.get('type') || ["k"],
    }));
  }

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
          <div style={buttons}>
          <div style={ buttonStyle }>
            <div id="special">
            <a id="special-link" href="mailto:max.mustermann@example.com?body=Hallo AI Diagnostics,">Contact us</a>
            </div>
          </div>
          <div style={ buttonStyle }>
            <div id="special">
            {this.state.type == "doc" || this.state.type == "mla" ?
            <a id="special-link" href="/login">Log Out</a>
            :
            <a id="special-link" href="/login">Login</a>
            }
            </div>
          </div>
          </div>
      </section>
    );
  }
}

export default Section

/*<MailButton label="Join Our Network" mailto="06386lipka@googlemail.com"/>*/