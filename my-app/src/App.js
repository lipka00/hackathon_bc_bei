import React, {Component, useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Header_MLA from './components/Header_MLA'
import HeaderEmpty from './components/Header_Empty'
import Connection from './Connection'
import Assets from './components/Assets'
import Participants from './components/Participants'
import ParticipantsMLA from './components/ParticipantsMLA'
import Section from './components/Section'
import Login from './components/LoginForm'
import Upload from './components/Upload'
import Images from './components/Images'
import Diagnose from './components/Diagnose'

class App extends Component {

  state = {
    id_doc: "1",
    id_mla: "1",
    assets: [],
    participants: [],
    participants2: [],
    images: [],
    images2: [],
    login: "",
    password: "",
    type: ""
  }

  componentWillMount() {
    this.getAssets()
    this.getParticipants()
    this.getParticipants2()
    this.getImages()
    this.getImagesDiagnosed()
  }

  setLogin = (login, password, type) => {
    this.setState({
      login: login,
      password: password,
      type: type
    });
  }

  addAsset = (img_base64) => {
    //create Image Object
    const data = {
      '$class': "org.blockchain.health.create_img",
      //'id_doc': id_doc,
      //'id_img': id_img,
      'img_base64': img_base64, 
      'login': "schmidt@gmx.de",
      'password': "password"
    }
    //send this data to the Hyperledger Network
    Connection.create('create_img', data)
    .then((err) => {
      if(err) {
        console.log(err)
      }
      //Get the new Image
      this.getAssets()
      console.log("BLOCKCHAIN_DATA: " + img_base64)
      //console.log("BLOCKCHAIN_DOC_ID: " + id_doc)
      if(img_base64 != 0  ) {
        alert("Success")
      }
    })
  }

  getAssets = () => {
    // Search for the users assets
    Connection.search
    ('queries/selectImageByDoctor?doc=resource%3Aorg.blockchain.health.Doctor%23' 
    + this.state.id_doc) 
      .then(data => {
        //store the assets in the assets array
        this.setState({
          assets: data
        })
        // Retrieve the user object from the state
        let user = this.state.user
        // Update the state
        this.setState({
          user
        })

        let assets = this.state.assets

        // Update the state
        this.setState({
          assets: assets
        })
        //console.log(data)

      })
  }

  getParticipants = () => {
    // Search for the participants
    Connection.search('queries/getDoctor?login=schmidt@gmx.de&password=password') 
      .then(data2 => {
        //store the assets in the participants array
        this.setState({
          participants: data2
        })
        // Retrieve the user object from the state
        let user = this.state.user
        // Add the number of assets to the object
        //user.numAssets = this.state.assets.length
        // Update the state
        this.setState({
          user
        })

        let participants = this.state.participants

        // Update the state
        this.setState({
          participants: participants
        })
        console.log(data2)

      })
  }

  getParticipants2 = () => {
    // Search for the participants
    Connection.search('queries/getMLA?login=schulze@gmail.com&password=password') 
      .then(data3 => {
        //store the assets in the participants array
        this.setState({
          participants2: data3
        })
        // Retrieve the user object from the state
        let user = this.state.user
        // Add the number of assets to the object
        //user.numAssets = this.state.assets.length
        // Update the state
        this.setState({
          user
        })

        let participants2 = this.state.participants2

        // Update the state
        this.setState({
          participants2: participants2
        })
        console.log(data3)
      })
  }

  getImages = () => {
    Connection.search('queries/selectImageByUndiagnosed') 
      .then(data4 => {
        //store the assets in the participants array
        this.setState({
          images: data4
        })
        // Retrieve the user object from the state
        let user = this.state.user
        // Add the number of assets to the object
        //user.numAssets = this.state.assets.length
        // Update the state
        this.setState({
          user
        })

        let images = this.state.images

        // Update the state
        this.setState({
          images: images
        })
        console.log("Bilder:" + images)
      })
  }

  getImagesDiagnosed = () => {
    Connection.search('queries/selectImageByMLA?mla=resource%3Aorg.blockchain.health.MLA%23' 
    + this.state.id_mla) 
      .then(data5 => {
        //store the assets in the participants array
        this.setState({
          images2: data5
        })
        // Retrieve the user object from the state
        let user = this.state.user
        // Add the number of assets to the object
        //user.numAssets = this.state.assets.length
        // Update the state
        this.setState({
          user
        })

        let images2 = this.state.images2

        // Update the state
        this.setState({
          images2: images2
        })
        console.log("Bilder2:" + images2)
      })
  }
 

 

  render() {
  return (
    <div>
      <Router>
      <div>
      {
        (() => {
            if (this.state.type == "" )
                return <HeaderEmpty/>
            if (this.state.type == "doc" && this.state.password =="password")
                return <Header/>
            else if (this.state.type == "mla" && this.state.password =="password")
                return <Header_MLA/>
        })()
      }
      </div>
        <Route exact path={"/login"}>
          <Login getChildInputOnSubmit={this.setLogin} />
          <div>
          {this.state.login == "schmidt@gmx.de" && this.state.password =="password" || this.state.login == "schulze@gmail.com" && this.state.password =="password" ? 
          <div className="infobox">
            <p>Login Successful</p>
            <p>User: {this.state.login}</p>
            </div> 
          :
          <div className="infobox2">
            <p>Fill Out Login and Password</p>
            </div>
          }
          </div>
        </Route>
        <Route exact path={"/"} render={props => (
          <React.Fragment>
            <Section></Section>
          </React.Fragment>
        )}
        />
        <Route exact path={"/assets"} render={props => (
          <React.Fragment>
            <div>
            <Assets addAsset={this.addAsset} assets={this.state.assets}/>
            </div>
          </React.Fragment>
        )}
        />
        <Route exact path={"/images"} render={props => (
          <React.Fragment>
            <div>
            <Images images={this.state.images} images2={this.state.images2}/>
            </div>
          </React.Fragment>
        )}
        />
        <Route exact path={"/diagnose"} render={props => (
          <React.Fragment>
            <div>
            <Diagnose/>
            </div>
          </React.Fragment>
        )}
        />
        <Route exact path={"/upload"} render={props => (
          <React.Fragment>
            <div>
            <Upload addAsset={this.addAsset}/>
            </div>
          </React.Fragment>
        )}
        />
        <Route exact path={"/participants"} render={props => (
          <React.Fragment>
            <Participants participants={this.state.participants} participants2={this.state.participants2}/>
          </React.Fragment>
        )}
        />
        <Route exact path={"/profileMLA"} render={props => (
          <React.Fragment>
            <ParticipantsMLA  participants2={this.state.participants2}/>
          </React.Fragment>
        )}
        />
      </Router>
    </div>
  );
}
}

export default App;


/*

<div>
      {this.state.type != 0 ? 
      <Router>
      <Header/>
      <Route exact path={"/"}>
        <Login getChildInputOnSubmit={this.setLogin} />
        <div>
        {this.state.login == "login" && this.state.password =="password"  ? 
        <div className="infobox">
          <p>Login Successful</p>
          <p>User: {this.state.login}</p>
          <p>Password: {this.state.password}</p>
          <p>Type: {this.state.type}</p>
          </div> 
        :
        <div className="infobox2">
          <p>Fill Out Login and Password</p>
          </div>
        }
      </div>
      </Route>
      <Route exact path={"/home"} render={props => (
        <React.Fragment>
          <Section></Section>
        </React.Fragment>
      )}
      />
      <Route exact path={"/assets"} render={props => (
        <React.Fragment>
          <div>
          <Assets addAsset={this.addAsset} assets={this.state.assets}/>
          </div>
        </React.Fragment>
      )}
      />
       <Route exact path={"/upload"} render={props => (
        <React.Fragment>
          <div>
          <Upload addAsset={this.addAsset}/>
          </div>
        </React.Fragment>
      )}
      />
      <Route exact path={"/participants"} render={props => (
        <React.Fragment>
          <Participants participants={this.state.participants} participants2={this.state.participants2}/>
        </React.Fragment>
      )}
      />
    </Router>
      : 
    <Router>
      <Header_MLA/>
      <Route exact path={"/login"}>
        <Login getChildInputOnSubmit={this.setLogin} />
      </Route>
      <Route exact path={"/"} render={props => (
        <React.Fragment>
          <Section></Section>
        </React.Fragment>
      )}
      />
       <Route exact path={"/diagnose"} render={props => (
        <React.Fragment>
          <div>
          
          </div>
        </React.Fragment>
      )}
      />
      <Route exact path={"/participants"} render={props => (
        <React.Fragment>
          <Participants participants={this.state.participants} participants2={this.state.participants2}/>
        </React.Fragment>
      )}
      />
    </Router>
  }
    </div>

    */