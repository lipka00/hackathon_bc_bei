import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message, Form } from "semantic-ui-react";


class AddDiagnoseForm extends Component {

    constructor(props) {
        super(props);
        //Initial state
        this.state = {
            img_base64: "readonly",
            test: false,
            success: false
        };
    }

    componentDidMount(){
       
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
                borderRadius: '6px',
                borderStyle: 'solid',
                borderColor: 'grey',
                borderWidth: '1px'
            },
            submitStyle: {
                flex: '1',
                background: 'green',
                color: 'whiter',
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
            submitStyle2: {
                flex: '1',
                background: '#d94b27',
                color: 'white',
                borderColor: 'grey',
                borderRadius: '4px',
                borderWidth: '1px',
                padding: '9px',
                margin: '3px',
                marginTop: '16px',
                cursor: 'pointer',
                fontSize: '16px',
                marginLeft: 'auto',
                display: 'block',
                marginRight: 'auto',
                marginBottom: '0px'
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

        }

        return (
            <div>
            <form name="myform2" onSubmit={this.props.onSubmit} style={style.formStyle}>
                <div style={style.divWrap}>
                <div>
                    <input
                        id="readonly"
                        type={"text"}
                        name={"img_base64"}
                        style={style.formComponentsStyle}
                        value={this.state.img_base64}
                        placeholder={"readonly"}
                        onBlur={this.props.onChange}
                        readOnly
                        />
                </div>
   
                <div>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        value="Placeholder"
                        style={style.submitStyle}
                        onClick={(event) => {this.setSuccess(event)}}
                    />
                </div>
                <div>
                {this.state.formError ? 
                (
                    <Message
                    positive
                    header="Your Image Upload was successful"
                    content="Your Chosen Image is saved on the blockchain"
                    />
                ) 
                : <p></p> } 
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

