import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message, Form } from "semantic-ui-react";
import './AddDiagnoseForm.css'


class AddDiagnoseForm extends Component {

    constructor(props) {
        super(props);
        //Initial state
        this.state = {
            id_img: "",
            test: false,
            haveCancer: ''
        };
        this._handleRadio1 = this._handleRadio1.bind(this);
        this._handleRadio2 = this._handleRadio2.bind(this);
    }

    componentDidMount(){
       
      }

      _handleRadio1(event) {
        const haveCancer2 = event.currentTarget.value == 'true' ? true: false;
        //console.log('handleCancer', haveCancer2);
        this.setState({ haveCancer:haveCancer2 });
      }
      
      _handleRadio2(event) {
        const haveCancer2 = event.currentTarget.value == 'false' ? false: true;
        //console.log('handleCancer', haveCancer2);
        this.setState({ haveCancer:haveCancer2 });
      }
    
      setSuccess = () => {
        this.setState({success:true});
    }


    render() {
        // Styling
        const style = {
            formComponentsStyle: {
                fontFamily: 'Arial, Helvetica, sans-serif',
                textAlign: 'left',
                marginTop: '10px',
                padding: '10px',
                width: '95%',
                height: '6vh',
                borderRadius: '6px',
                borderStyle: 'solid',
                borderColor: 'grey',
                borderWidth: '1px'
            },
            submitStyle: {
                flex: '1',
                background: 'green',
                color: 'white',
                borderRadius: '4px',
                padding: '9px',
                margin: '3px',
                marginTop: '16px',
                borderWidth: '1px',
                cursor: 'pointer',
                fontSize: '16px',
                marginLeft: 'auto',
                display: 'block',
                marginRight: 'auto',
                marginBottom: '24px'
            },
            cancerText: {
                marginLeft: "0",
                marginTop: '1vh',
                fontSize: '1.35rem'
            },
            formStyle: {
                display: 'block',
                background: '#fff',
                padding: '10px',
                marginLeft: '4%'
            },

            readonlyStyle: {
                backgroundColor: 'grey'
            },
            check: {
                display: 'flex',
                marginLeft: '2%',
                marginTop: '-3%',
                marginBottom: '5vh',
                fontSize: '1.1rem'
             }
        }

        return (
            <div>
            <form name="myform2" onSubmit={this.props.onSubmit} style={style.formStyle}>
                <div style={style.divWrap}>
                <div>
                    <input
                        type="text"
                        name={"id_img"}
                        style={style.formComponentsStyle}
                        placeholder={"Enter Image ID"}
                        value={this.props.id_img}
                        onChange={this.props.onChange}
                    />
                </div>
                <p style={style.cancerText}>Cancer predicted?</p>
                <div className="radio">
                    <label>
                        <input 
                        id="radio1"
                        type="radio" 
                        name="haveCancer" 
                        value="true"
                        checked={this.state.haveCancer === true}
                        onChange={(event) => {this._handleRadio1(event);this.props.onChange(event)}} />
                        Yes
                    </label>
                </div>
                <div className="radio">
                    <label>
                    <input 
                        id="radio2"
                        type="radio" 
                        name="haveCancer" 
                        value={"false"}
                        checked={this.state.haveCancer === false}
                        onChange={(event) => {this._handleRadio2(event);this.props.onChange(event)}} />
                    No
                    </label>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Submit"
                        value="Upload to Blockchain"
                        style={style.submitStyle}
                        onClick={(event) => {this.setSuccess(event)}}
                    />
                </div>
                <div>
                <div>
                { this.state.success == true ? 
                <div className="infobox">
                    <p>Diagnose Successful</p>
                    <p>Diagnose for Image {this.props.id_img} submitted to blockchain</p>
                </div> 
                :
                <div className="infobox2">
                    <p>Give Your Diagnose</p>
                </div>
                }
                </div>
                </div>
                </div>
            </form>
            </div>
        );
    }

}

//PropTypes
AddDiagnoseForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default AddDiagnoseForm

