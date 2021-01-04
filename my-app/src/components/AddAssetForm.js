
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddAssetForm extends Component {

    render() {
        // Styling
        const style = {
            formComponentsStyle: {
                fontFamily: 'Arial, Helvetica, sans-serif',
                textAlign: 'left',
                marginTop: '10px',
                padding: '10px',
                width: '90%',
            },
            submitStyle: {
                flex: '1',
                background: 'green',
                color: 'whiter',
                borderRadius: '4px',
                padding: '5px',
                margin: '5px',
                marginTop: '16px',
                cursor: 'pointer',
                fontSize: '16px',
                marginLeft: '80%'
            },
            formStyle: {
                display: 'block',
                background: '#fff',
                padding: '10px',
                margin: '10px'
            }
        }

        return (
            <form onSubmit={this.props.onSubmit} style={style.formStyle}>
                <div>
                    <input
                        type={"text"}
                        name={"id_doc"}
                        style={style.formComponentsStyle}
                        placeholder={"Enter Doc ID"}
                        value={this.props.assetType}
                        onChange={this.props.onChange}>
                    </input>
                </div>
                <div>
                    <input
                        type={"text"}
                        name={"id_img"}
                        style={style.formComponentsStyle}
                        placeholder={"Enter Image ID"}
                        value={this.props.value}
                        onChange={this.props.onChange}/>
                </div>
                <div>
                    <input
                        type={"text"}
                        name={"img"}
                        style={style.formComponentsStyle}
                        placeholder={"Enter Image Array"}
                        value={this.props.durationInMonths}
                        onChange={this.props.onChange} />
                </div>
                <div>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={style.submitStyle}
                    />
                </div>
            </form>
        );
    }

}

//PropTypes
AddAssetForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    assetType: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    durationInMonths: PropTypes.string.isRequired
}

export default AddAssetForm