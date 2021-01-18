import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import beiImage from '../images/bei.jpg'

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <div style={wrapper}>
        <h1 style={titleStyle}>AI Diagnostics</h1>
        <img style={imageStyle} src={ beiImage } />
        </div>
        <div style={linkDivStyle}>
        <div>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/diagnose">Diagnose</Link>
        <Link style={linkStyle} to="/participants">Profile</Link>
        </div> 
        <div>
        </div>
        </div>
      </header>
    )
  }
}

const linkDivStyle = {
  marginLeft: '3%'
}

const wrapper = {
  display: 'flex',
  margin: 'auto',
  justifyContent: 'center'
}

const imageStyle = {
  flexDirection: 'row',
  width: '30%',
  height: '6vh',
  marginTop: 'auto',
  marginBottom: 'auto',
  marginLeft: '18px',
  marginRight: '3%',
  borderRadius: '6px'
}

const headerStyle = {
  background: '#1a6291',
  color: '#fff',
  textAlign: 'left',
  padding: '10px',
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  marginLeft: '0px',
  fontSize: '1rem',
  paddingRight: '16px'
}

const titleStyle = {
  width:'70%',
  flexDirection: 'row',
  marginLeft: '3%',
}

export default Header;