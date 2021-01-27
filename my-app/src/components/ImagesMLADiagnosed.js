import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ImagesItemsDiagnosed from './ImagesItemsDiagnosed'

class ImagesMLADiagnosed extends Component {

    render() {

        return (
            <div>
                {this.props.images2.map((images2) => (
                    <ImagesItemsDiagnosed key={images2.id} images2={images2}/>
                ))}
            </div>

        )}
}


//PropTypes
ImagesMLADiagnosed.propTypes = {
    images2: PropTypes.array.isRequired
}

export default ImagesMLADiagnosed