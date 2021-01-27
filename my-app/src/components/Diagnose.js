import React, { Component } from 'react'
import Background from "../images/blockchain.jpg"
import AddDiagnose from "./AddDiagnose"

var divStyle = {
  width: "100%",
  height: "100%",
  opacity: 1.0,
  zIndex: 0,
  color: '#fff',
  backgroundImage: "url(" + Background + ")",
  backgroundRepeat: 'repeat',
};

class Diagnose extends Component {

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
      <div style={style.AddAssetStyle}>
          <AddDiagnose addDiagnose={this.props.addDiagnose} />
        </div>
      </div>
      </div>
      );
  }
}

//PropTypes
/*Assets.propTypes = {
  assets: PropTypes.array.isRequired
}*/

export default Diagnose