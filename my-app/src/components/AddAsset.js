import React, { Component } from 'react';
import AddAssetForm from './AddAssetForm'
import PropTypes from 'prop-types';

class AddAsset extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    // The state stores the form variables
    this.state = {
      img_base64: '',
      login: "login",
      password: "pasword",
    };
  }
  

    // Handles the submit. Passes the form variables to the function addAsset in App.js
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addAsset( this.state.img_base64, this.state.login, this.state.password,);
        this.setState({  img_base64: '', login: "login", password: "password" });
    }

      // Handles when information is changed in the form storing it in the state
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
          <div style={overwrap}>
          <h2>Add New Image</h2>
            <div style={wrapperForm}>
                <AddAssetForm onSubmit={this.onSubmit} onChange={this.onChange}  img_base64={this.state.img_base64} />
            </div>
          </div>
        );
      }
    
    }

    //PropTypes
    AddAsset.propTypes = {
        addAsset: PropTypes.func.isRequired
    }

    const wrapperForm ={
        display: 'inline-block',
        background: '#fff',
        width: '90%',
        height: 'auto',
        textAlign: 'left',
        padding: '0px',
        margin: '20px',
        marginTop: '-3px',
        border: '2px solid grey',
        borderRadius: '3px',
        color: '#302e29'
    }
    
    const overwrap ={
        width: '100%',
    }
export default AddAsset