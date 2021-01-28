import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ImagesItemsDiagnosed extends Component {


    render() {
        let assetStyle = {
            card: {
                display: 'inline-block',
                background: '#fff',
                width: '90%',
                height: 'auto',
                textAlign: 'left',
                padding: '10px',
                margin: '20px',
                marginTop: '-3px',
                border: '2px solid grey',
                borderRadius: '3px',
                color: '#302e29'
            },
            imgStyle: {
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
            },
            divStyle: {
                display: 'flex',
                padding: '20px',
                justifyContent: 'space-between'
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
                marginTop: '0px',
                cursor: 'pointer',
                fontSize: '16px',
                marginLeft: '16px',
                display: 'block',
                marginRight: 'auto',
                height: '40px',
                marginBottom: '0px'
            },
            submitStyle3: {
                flex: '1',
                background: '#158c11',
                color: 'white',
                borderColor: 'grey',
                borderRadius: '4px',
                borderWidth: '1px',
                height: '40px',
                padding: '9px',
                cursor: 'pointer',
                fontSize: '16px',
                marginLeft: 'auto',
                display: 'block',
                marginRight: '16px!important',
                marginBottom: '0px'
            },
        }


        //<p>Image: {this.props.asset.img}</p>
        return (
            <div>
            <div style = { assetStyle.card }>
                <p>ImageID: {this.props.images2.id_img}</p>
                <p>Status: {this.props.images2.status}</p>
                {this.props.images2.cancer ? <p>Cancer detected</p> : <p>No Cancer detected</p>}
                <img style={assetStyle.imgStyle} src={this.props.images2.img_base64} alt={this.props.images2.img_base64} width="200" height="150"></img>
                <div style={assetStyle.divStyle}>
                    <button style={assetStyle.submitStyle3} value="druck" onClick={this.getString}>Update</button>
                    <button style={assetStyle.submitStyle2} value="druck" onClick={this.getString}>Delete Image</button>
                </div>
            </div>
            </div>

        )
    }

}

ImagesItemsDiagnosed.propTypes = {
    images2: PropTypes.object.isRequired
}

export default ImagesItemsDiagnosed
