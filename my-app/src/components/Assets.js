import React, { Component } from 'react'
import UserAssets from './UserAssets'
import PropTypes from 'prop-types';
import AddAsset from "./AddAsset"
import Background from "../images/blockchain.jpg"

var divStyle = {
  width: "100%",
  height: "100%",
  opacity: 1.0,
  zIndex: 0,
  color: '#fff',
  backgroundImage: "url(" + Background + ")",
  backgroundRepeat: 'repeat',
};

class Assets extends Component {

  render() {
    let style = {
      UserAssetsStyle: {
        position: 'relative',
        top: '10px',
        width: '100%',
        height: '1',
        borderRight: '1px solid black',
      },
      AddAssetStyle: {
        position: 'relative',
        top: '2px',
        width: '100%',
        height: '34%',
        marginLeft: '0px',
      }
    }

    return (
      <div style ={divStyle}>
      <div>
        <div style = { style.UserAssetsStyle }>
          <h2>Uploaded Images</h2>
          <UserAssets assets = { this.props.assets } />
        </div>
        <div style={style.AddAssetStyle}>
          <AddAsset addAsset={this.props.addAsset} />
        </div>
      </div>
      </div>
      );
  }
}

//PropTypes
Assets.propTypes = {
  assets: PropTypes.array.isRequired
}

export default Assets