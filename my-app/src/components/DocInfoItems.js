import React, { Component } from 'react'
import PropTypes from 'prop-types';

class DocInfoItems extends Component {

    getName() {
        if(this.props.participant.name != null) {
            //console.log("exists")
            return <p>Name: {this.props.participant.name}</p>
        }
        else {
            //console.log("doesnt exist")
        }
    }

    getAddress() {
        if(this.props.participant.address != null) {
            //console.log("exists")
            return <p>Address: {this.props.participant.address}</p>
        }
        else {
            //console.log("doesnt exist")
        }
    }

    getBalance() {
        if(this.props.participant.balance != null) {
            //console.log("exists")
            return <p>Balance: {this.props.participant.balance}</p>
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
                <p>DocID: {this.props.participant.id_doc}</p>
                {this.getName()}
                {this.getAddress()}
                {this.getBalance()}
            </div>
            </div>
        )
    }
}

//PropTypes
DocInfoItems.propTypes = {
    participants: PropTypes.object.isRequired
}

export default DocInfoItems
