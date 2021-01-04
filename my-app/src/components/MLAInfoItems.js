import React, { Component } from 'react'
import PropTypes from 'prop-types';

class MLAInfoItems extends Component {

    getName() {
        if(this.props.participant2.name != null) {
            console.log("exists")
            return <p>Name: {this.props.participant2.name}</p>
        }
        else {
            console.log("doesnt exist")
        }
    }

    getAddress() {
        if(this.props.participant2.address != null) {
            //console.log("exists")
            return <p>Address: {this.props.participant2.address}</p>
        }
        else {
            //console.log("doesnt exist")
        }
    }

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
            }
        }
        return (
            <div>
            <div style = { assetStyle.card }>
                <p>MLAID: {this.props.participant2.id_mla}</p>
                {this.getName()}
                {this.getAddress()}
            </div>
            </div>
        )
    }
}

//PropTypes
MLAInfoItems.propTypes = {
    participants2: PropTypes.object.isRequired
}

export default MLAInfoItems
