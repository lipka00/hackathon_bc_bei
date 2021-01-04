import React, { Component } from 'react'
import PropTypes from 'prop-types';

class UserAssetsItems extends Component {

    render() {
        let assetStyle = {
            card: {
                display: 'inline-block',
                background: '#fff',
                width: '90%',
                height: 'auto',
                textAlign: 'left',
                padding: '20px',
                margin: '20px',
                marginTop: '-3px',
                border: '2px solid grey',
                borderRadius: '3px',
                color: '#302e29'
            }
        }
        return (
            <div>
                <h2>Uploaded Images</h2>
            <div style = { assetStyle.card }>
                <p>ImageID: {this.props.asset.id_img}</p>
                <p>Image: {this.props.asset.img}</p>
                <p>Status: {this.props.asset.status}</p>
                <p>Prediction: {this.props.asset.cancer ? "Cancer predicted": "No Cancer predicted"} </p>
            </div>
            </div>
        )
    }

}

//PropTypes
UserAssetsItems.propTypes = {
    asset: PropTypes.object.isRequired
}

export default UserAssetsItems
