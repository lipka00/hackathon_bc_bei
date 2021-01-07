import React, { Component } from 'react'
import PropTypes from 'prop-types';
import DocInfoItems from './DocInfoItems'

class DocInfo extends Component {

    render() {

        return (
            <div>
                {this.props.participants.map((participant) => (
                    <DocInfoItems key={participant.id} participant={participant}/>
                ))}
            </div>

        )}
}

//PropTypes
DocInfo.propTypes = {
    participants: PropTypes.array.isRequired
}

export default DocInfo 