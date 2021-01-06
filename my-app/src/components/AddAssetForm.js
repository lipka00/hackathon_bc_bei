import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddAssetForm extends Component {

    constructor(props) {
        super(props);
        this.getString = this.getString.bind(this);
        //Initial state
        this.state = {
            img_base64: ""
        };
    }

    componentDidMount(){
        this.loadImage();
      }

    //Function which get the image and safe it to state
    loadImage = () => {
        var input, file, fr, img;

        const createImage = () => {
            img = new Image();
            img.onload = imageLoaded;
            img.src = fr.result;
            console.log("SRC   : " + img.src)
        }

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

        const imageLoaded = () => {
            var canvas = document.getElementById("canvas")
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img,0,0);

            //alert(canvas.toDataURL("image/png"));
        	var data = canvas.toDataURL();
            //console.log(data);
            var img_base64 = data;
            console.log("DATEN : " + img_base64);
        

            //safe this in blockchain
            //var imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
            //var data = imgData.data;
            //console.log("BASE: " + data)
            //var img_string = data.toString();
            //console.log(img_string)
        }       
        return this.createImage
    }

    getString = () => {
        var canvas = document.getElementById("canvas")
        var data = canvas.toDataURL()
        console.log("MEINE DATEN: " + data)
        this.setState({
            img_base64: data
        });
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
                borderRadius: '6px',
                borderStyle: 'solid',
                borderColor: 'grey',
                borderWidth: '1px'
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
                marginRight: 'auto',
                marginBottom: '24px'
            },
            formStyle: {
                display: 'block',
                background: '#fff',
                padding: '10px',
                margin: '10px'
            },

            readonlyStyle: {
                backgroundColor: 'grey'
            },

            filePicker: {
                marginTop: '16px',
                marginBottom: '16px',
            }

        }

        return (
            <div>
            <form action='#' onsubmit="return false;">
            <div>
                <input
                    type={"file"}
                    name={"img_base64"}
                    style={style.filePicker}
                    id='imgfile'
                    onChange={this.props.onChange}/>
                <input type='button' id='btnLoad' value='Load' onclick={this.loadImage()} />
                <canvas id="canvas"></canvas>
            </div>
            </form>
            <form onSubmit={this.props.onSubmit} style={style.formStyle}>
                <div style={style.divWrap}>
                <div>
                    <input
                        type={"text"}
                        name={"id_doc"}
                        style={style.formComponentsStyle}
                        placeholder={"Enter Doc ID"}
                        value={this.props.iddoc}
                        onChange={this.props.onChange}>
                    </input>
                </div>
                <div>
                    <input
                        type={"text"}
                        name={"id_img"}
                        style={style.formComponentsStyle}
                        placeholder={"Enter Image ID"}
                        value={this.props.idimg}
                        onChange={this.props.onChange}/>
                </div>
                <div>
                    <input
                        id="readonly"
                        type={"text"}
                        name={"img_base64"}
                        style={style.formComponentsStyle}
                        value={this.state.img_base64}
                        placeholder={"readonly"}
                        onChange={this.props.onChange}/>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        value="Upload"
                        style={style.submitStyle}
                        onClick={(event) => {this.getString(event); this.loadImage(event)}}
                    />
                </div>
                </div>
            </form>
            </div>
        );
    }

}
//onChange= {this.props.onChange}/>
//<img width="300" height="200" src={this.getString()}/>
//onClick={this.loadImage()}

//PropTypes
AddAssetForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    iddoc: PropTypes.string.isRequired,
    idimg: PropTypes.string.isRequired,
    durationInMonths: PropTypes.string.isRequired
}

export default AddAssetForm

/*
<form onSubmit={this.props.onSubmit} style={style.formStyle}>
                <div style={style.divWrap}>
                <div>
                    <input
                        type={"text"}
                        name={"id_doc"}
                        style={style.formComponentsStyle}
                        placeholder={"Enter Doc ID"}
                        value={this.props.iddoc}
                        onChange={this.props.onChange}>
                    </input>
                </div>
                <div>
                    <input
                        type={"text"}
                        name={"id_img"}
                        style={style.formComponentsStyle}
                        placeholder={"Enter Image ID"}
                        value={this.props.idimg}
                        onChange={this.props.onChange}/>
                </div>
                <div>
                    <input
                        id="readonly"
                        type={"text"}
                        name={"img_base64"}
                        style={style.formComponentsStyle}
                        value={this.state.img_base64}
                        placeholder={"readonly"}
                        onChange={this.props.onChange}/>
                </div>
                <div>
                    <input
                        type={"file"}
                        name={"img_base64"}
                        style={style.filePicker}
                        id='imgfile'
                        onChange={this.loadImage()}/>
                    <canvas id="canvas"></canvas>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        value="Upload"
                        style={style.submitStyle}
                        onClick={(event) => {this.getString(event); this.loadImage(event)}}
                    />
                </div>
                </div>
            </form>
            */