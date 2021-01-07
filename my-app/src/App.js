import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Connection from './Connection'
import Assets from './components/Assets'
import Participants from './components/Participants'
import Section from './components/Section'

class App extends Component {

  state = {
    id_doc: "1",
    assets: [],
    participants: [],
    participants2: [],
  }

  componentWillMount() {
    this.getAssets()
    this.getParticipants()
    this.getParticipants2()
    //this.addAsset()
  }


  addAsset = (id_doc, id_img, img_base64) => {
    //create Image Object
    const data = {
      '$class': "org.blockchain.health.create_img",
      'id_doc': id_doc,
      'id_img': id_img,
      'img_base64': img_base64, 
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
      console.log("BLOCKCHAIN_IMG_ID: " + id_img)
      console.log("BLOCKCHAIN_DOC_ID: " + id_doc)
      if(img_base64 != 0 && id_img != 0 && id_doc != 0) {
        alert("Success")
      }

    })
  }

  getAssets = () => {
    // Search for the users assets
    Connection.search('queries/selectAssetByDoctor?doc=resource%3Aorg.blockchain.health.Doctor%23' + this.state.id_doc) 
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
    Connection.search('queries/selectDoctor') 
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
    <Router>
      <Header/>
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
      <Route exact path={"/participants"} render={props => (
        <React.Fragment>
          <Participants participants={this.state.participants} participants2={this.state.participants2}/>
        </React.Fragment>
      )}
      />
    </Router>
  );
}
}

export default App;
