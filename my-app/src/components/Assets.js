import React, { Component } from 'react'
import UserAssets from './UserAssets'
import PropTypes from 'prop-types';
import AddAsset from "./AddAsset"

class Assets extends Component {

  render() {
    let style = {
      UserAssetsStyle: {
        position: 'relative',
        top: '10px',
        width: '100%',
        borderRight: '1px solid black',
      },
      AddAssetStyle: {
        position: 'relative',
        top: '2px',
        width: '100%',
        height: '34%',
        marginLeft: '0px'
      }
    }

    return (
      <div>
        <div style = { style.UserAssetsStyle }>
          <UserAssets assets = { this.props.assets } />
        </div>
        <div style={style.AddAssetStyle}>
          <AddAsset addAsset={this.props.addAsset} />
        </div>
      </div>);

  }
}

//PropTypes
Assets.propTypes = {
  assets: PropTypes.array.isRequired
}

export default Assets