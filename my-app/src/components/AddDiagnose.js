import React, { Component } from 'react';
import AddDiagnoseForm from './AddDiagnoseForm'
import PropTypes from 'prop-types';

class AddDiagnose extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    // The state stores the form variables
    this.state = {
      id_img: '',
      login: "schulze@gmail.com",
      password: "password",
      haveCancer: ''
    };
  }
  

    // Handles the submit. Passes the form variables to the function addAsset in App.js
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addDiagnose( this.state.id_img,this.state.haveCancer, this.state.login, this.state.password);
        console.log("Cancer: " + this.state.haveCancer);
        console.log("ID IMG: " + this.state.id_img);
        this.setState({  id_img: '',haveCancer: '', login: "schulze@gmail.com", password: "password" });
    }

      // Handles when information is changed in the form storing it in the state
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
          <div style={overwrap}>
          <h2>Image Diagnose</h2>
            <div style={wrapperForm}>
                <AddDiagnoseForm onSubmit={this.onSubmit} onChange={this.onChange} />
            </div>
          </div>
        );
      }
    
    }

    //PropTypes
    AddDiagnose.propTypes = {
        addDiagnose: PropTypes.func.isRequired
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
export default AddDiagnose