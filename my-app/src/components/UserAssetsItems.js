import React, { Component } from 'react'
import PropTypes from 'prop-types';

class UserAssetsItems extends Component {
/*
    imageTranslation = (img_base64) => {
        img_base64 = this.props.asset.img_base64
        console.log(img_base64)
        
        for (var i = img.length; i>0; i-=3){
          img.splice(i,0,255);
        }

        // create an offscreen canvas
        var canvas = document.createElement("canvas1")
        var ctx = canvas.getContext("2d")

        // size the canvas to your desired image
        //canvas.width = 480;
        //canvas.height = 523;
        canvas.width = 400;
        canvas.height = 300;

        // get the imageData and pixel array from the canvas
        var imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
        var data = imgData.data;

        // manipulate some pixel elements
        for (var i = 0; i < data.length; i += 4){
        data[i] = img[i];
        data[i+1] = img[i+1];
        data[i+2] = img[i]+2;
        data[i+3] = 255;
        }
        

        // put the modified pixels back on the canvas
        ctx.putImageData(imgData,0,0);
        
        // create a new img object
        var image = new Image();
        
        // set the img.src to the canvas data url
        img.src = canvas.toDataURL();
        console.log(img.src)
        // append the new img object to the page
        //document.body.appendChild(image);
        
        return img_base64
      }

      */

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
            },
            submitStyle2: {
                flex: '1',
                background: '#d94b27',
                color: 'white',
                borderColor: 'grey',
                borderRadius: '4px',
                borderWidth: '1px',
                padding: '9px',
                margin: '3px',
                marginTop: '0px',
                cursor: 'pointer',
                fontSize: '16px',
                marginLeft: '16px',
                display: 'block',
                marginRight: 'auto',
                height: '40px',
                marginBottom: '0px'
            },
            submitStyle3: {
                flex: '1',
                background: '#158c11',
                color: 'white',
                borderColor: 'grey',
                borderRadius: '4px',
                borderWidth: '1px',
                height: '40px',
                padding: '9px',
                cursor: 'pointer',
                fontSize: '16px',
                marginLeft: 'auto',
                display: 'block',
                marginRight: '16px!important',
                marginBottom: '0px'
            },
            divStyle: {
                display: 'flex',
                padding: '20px',
                justifyContent: 'space-between'
            },
            imgStyle: {
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        }


        //<p>Image: {this.props.asset.img}</p>
        return (
            <div>
            <div style = { assetStyle.card }>
                <p>ImageID: {this.props.asset.id_img}</p>
                <p>Status: {this.props.asset.status}</p>
                <p>Prediction: {this.props.asset.cancer ? "Cancer predicted": "No Cancer predicted"} </p>
                <img style={assetStyle.imgStyle} src={this.props.asset.img_base64} alt={this.props.asset.img_base64} width="200" height="150"></img>
                <div style={assetStyle.divStyle}>
                    <button style={assetStyle.submitStyle3} value="druck" onClick={this.getString}>Update</button>
                    <button style={assetStyle.submitStyle2} value="druck" onClick={this.getString}>Delete Image</button>
                </div>
            </div>
            </div>

        )
    }

}
//{this.imageTranslation()}
//"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAABCAYAAACsXeyTAAAAEElEQVQYV2P8z/D/P8MgBgDadgL/qlWIXgAAAABJRU5ErkJggg=="
//<img style={imageStyle} src={this.imageTranslation()} width="200" height="100"></img>
//PropTypes
UserAssetsItems.propTypes = {
    asset: PropTypes.object.isRequired
}

export default UserAssetsItems
