import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Connection from './Connection'
import Assets from './components/Assets'
import MailButton from './components/MailButton'
import Section from './components/Section'

class App extends Component {

  state = {
    name: "Doctor#1",
    assets: []
  }

  componentWillMount() {
    this.getAssets()
  }

  addAsset = (id_doc, id_img, img) => {
    //create Image Object
    const data = {
      '$class': "org.blockchain.health.create_img",
      'id_doc': id_doc,
      'id_img': id_img,
      'img': img, 
    }
    //send this data to the Hyperledger Network
    Connection.create('create_img', data)
    .then((err) => {
      if(err) {
        console.log(err)
      }
      //Get the new Image
      this.getAssets()
    })
  }

  getAssets = () => {
    // Search for the users assets
    Connection.search('queries/selectImageById?id_img=1') 
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
          <Assets assets={this.state.assets} addAsset={this.addAsset}/>
          </div>
        </React.Fragment>
      )}
      />
      <Route exact path={"/participants"} render={props => (
        <React.Fragment>
          <h2>Participants</h2>
        </React.Fragment>
      )}
      />
    </Router>
  );
}
}

export default App;
