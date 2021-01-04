import React, { Component } from 'react'
import PropTypes from 'prop-types';
import MLAInfoItems from './MLAInfoItems'

class MLAInfo extends Component {

    render() {

        return (
            <div>
                {this.props.participants2.map((participant2) => (
                    <MLAInfoItems key={participant2.id} participant2={participant2}/>
                ))}
            </div>

        )}
}

//PropTypes
MLAInfo.propTypes = {
    participants2: PropTypes.array.isRequired
}

export default MLAInfo

