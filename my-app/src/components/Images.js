import React, { Component } from 'react'
import ImagesMLA from './ImagesMLA'
import ImagesMLADiagnosed from './ImagesMLADiagnosed'
import PropTypes from 'prop-types';
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

class Images extends Component {

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
            <h2>My Diagnosed Images</h2>
            <ImagesMLADiagnosed images2 = { this.props.images2 } />
            <h2>Undiagnosed Images</h2>
            <ImagesMLA images = { this.props.images } />
        </div>
      </div>
      </div>
      );
  }
}

//PropTypes
//<ImagesMLADiagnosed images2 = { this.props.images2 } />
/*Assets.propTypes = {
  assets: PropTypes.array.isRequired
}*/

export default Images