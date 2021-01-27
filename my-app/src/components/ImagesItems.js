import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ImagesItems extends Component {


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
            }
        }


        //<p>Image: {this.props.asset.img}</p>
        return (
            <div>
            <div style = { assetStyle.card }>
                <p>ImageID: {this.props.images.id_img}</p>
                <p>Status: {this.props.images.status}</p>
                <img style={assetStyle.imgStyle} src={this.props.images.img_base64} alt={this.props.images.img_base64} width="200" height="150"></img>
            </div>
            </div>

        )
    }

}

ImagesItems.propTypes = {
    images: PropTypes.object.isRequired
}

export default ImagesItems
