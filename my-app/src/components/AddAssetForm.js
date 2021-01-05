
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddAssetForm extends Component {

    state = {
        img_string: ""
      }

    componentWillMount() {
        this.loadImage()
      }

    loadImage() {
        var input, file, fr, img;

        if (typeof window.FileReader !== 'function') {
            console.log("The file API isn't supported on this browser yet.");
            return;
        }

        input = document.getElementById('imgfile');
        if (!input) {
            console.log("Um, couldn't find the imgfile element.");
        }
        else if (!input.files) {
            console.log("This browser doesn't seem to support the `files` property of file inputs.");
        }
        else if (!input.files[0]) {
            console.log("Please select a file before clicking 'Load'");
        }
        else {
            file = input.files[0];
            fr = new FileReader();
            fr.onload = createImage;
            fr.readAsDataURL(file);
        }

        function createImage() {
            img = new Image();
            img.onload = imageLoaded;
            img.src = fr.result;
            console.log(img.src)
        }

        //user errors
        /*function write(msg) {
            var p = document.createElement('p');
            p.innerHTML = msg;
            document.body.appendChild(p);
            }*/

        function imageLoaded() {
            var canvas = document.getElementById("canvas")
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img,0,0);
            //alert(canvas.toDataURL("image/png"));
        		var data = canvas.toDataURL("image/png");
            //console.log(data);

            //safe this in blockchain
            var imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
            var data = imgData.data;
            //console.log(data)
            var img_string = data.toString();
            console.log(img_string)
            return img_string
        }       

    }

    render() {
        // Styling
        const style = {
            formComponentsStyle: {
                fontFamily: 'Arial, Helvetica, sans-serif',
                textAlign: 'left',
                marginTop: '10px',
                padding: '10px',
                width: '95%',
            },
            submitStyle: {
                flex: '1',
                background: 'green',
                color: 'whiter',
                borderRadius: '4px',
                padding: '9px',
                margin: '3px',
                marginTop: '16px',
                cursor: 'pointer',
                fontSize: '16px',
                marginLeft: 'auto',
                display: 'block',
                marginRight: 'auto'
            },
            formStyle: {
                display: 'block',
                background: '#fff',
                padding: '10px',
                margin: '10px'
            },


        }

        return (
            <form onSubmit={this.props.onSubmit} style={style.formStyle}>
                <div style={style.divWrap}>
                <div>
                    <input
                        type={"text"}
                        name={"id_doc"}
                        style={style.formComponentsStyle}
                        placeholder={"Enter Doc ID"}
                        value={this.props.assetType}
                        onChange={this.props.onChange}>
                    </input>
                </div>
                <div>
                    <input
                        type={"text"}
                        name={"id_img"}
                        style={style.formComponentsStyle}
                        placeholder={"Enter Image ID"}
                        value={this.props.value}
                        onChange={this.props.onChange}/>
                </div>
                <div>
                    <input
                        type={"file"}
                        name={"img"}
                        style={style.formComponentsStyle}
                        id='imgfile'
                        onChange={this.props.onChange}/>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        value="Upload"
                        style={style.submitStyle}
                        onclick={this.loadImage()}
                    />
                </div>
                <canvas id="canvas"></canvas>
                </div>
            </form>
        );
    }

}

//PropTypes
AddAssetForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    assetType: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    durationInMonths: PropTypes.string.isRequired
}

export default AddAssetForm