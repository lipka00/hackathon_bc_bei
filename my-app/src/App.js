import React, {Component, useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Header_MLA from './components/Header_MLA'
import HeaderEmpty from './components/Header_Empty'
import Connection from './Connection'
import Assets from './components/Assets'
import Participants from './components/Participants'
import Section from './components/Section'
import Login from './components/LoginForm'
import Upload from './components/Upload'

class App extends Component {

  state = {
    id_doc: "1",
    assets: [],
    participants: [],
    participants2: [],
    login: "",
    password: "",
    type: ""
  }

  componentWillMount() {
    this.getAssets()
    this.getParticipants()
    this.getParticipants2()
    //this.setLogin()
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
      'login': "login",
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
    Connection.search('queries/selectImageByDoctor?doc=resource%3Aorg.blockchain.health.Doctor%23' + this.state.id_doc) 
      .then(data => {
        //store the assets in the assets array
        this.setState({
          assets: data
        })
        // Retrieve the user object from the state
        let user = this.state.user
        // Add the number of assets to the object
        //user.numAssets = this.state.assets.length
        // Update the state
        this.setState({
          user
        })

        let assets = this.state.assets

        // Update the state
        this.setState({
          assets: assets
        })
        console.log(data)

      })
  }

  getParticipants = () => {
    // Search for the participants
    Connection.search('queries/getDoctor?login=login&password=password') 
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
        //console.log(data2)

      })
  }

  getParticipants2 = () => {
    // Search for the participants
    Connection.search('queries/selectMLA') 
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
        //console.log(data3 + "hallo")

      })
  }

 

  render() {
  return (
    <div>
      <Router>
      <div>
      {
        (() => {
            if (this.state.type == "")
                return <HeaderEmpty/>
            if (this.state.type == "doc")
                return <Header/>
            else if (this.state.type == "mla")
                return <Header_MLA/>
        })()
      }
      </div>
        <Route exact path={"/login"}>
          <Login getChildInputOnSubmit={this.setLogin} />
          <div>
          {this.state.login == "login" && this.state.password =="password"  ? 
          <div className="infobox">
            <p>Login Successful</p>
            <p>User: {this.state.login}</p>
            </div> 
          :
          <div className="infobox2">
            <p>Fill Out Login and Password</p>
            <p>{this.state.type}</p>
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
        <Route exact path={"/diagnose"} render={props => (
          <React.Fragment>
            <div>
            <p>Hallo</p>
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