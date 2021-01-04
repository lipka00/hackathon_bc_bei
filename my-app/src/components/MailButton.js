import React, {Component} from "react";
import { Link } from "react-router-dom";

class MailButton extends Component  {
    render() {
    return (
        <div style={buttonDiv}>
        <Link style={buttonStyle} to="faw">
        </Link>
        </div>
    );
}
}

const buttonStyle = {
    background: '#1a6291',
    color: '#fff',
    padding: '10px',
    height: '20%',
    width: '40%',
    borderRadius: '5px',
  }

  const buttonDiv = {
      margin: 'auto',
      textAlign: 'center'
  }

export default MailButton;