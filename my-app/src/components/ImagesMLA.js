import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ImagesItems from './ImagesItems'

class ImagesMLA extends Component {

    render() {

        return (
            <div>
                {this.props.images.map((images) => (
                    <ImagesItems key={images.id} images={images}/>
                ))}
            </div>

        )}
}


//PropTypes
ImagesMLA.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImagesMLA