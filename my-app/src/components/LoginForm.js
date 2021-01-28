import React, { useState, Component } from "react";
import "./Login.css";
import { Persist} from 'react-persist';
import ls from 'local-storage'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login_child: "",
      password_child: "",
      type_child:"",
      logged_in: false
    };
  }

  componentDidMount() {
    window.addEventListener('load', this.handleChange3());
    //window.addEventListener('load', this.logOut());
    this.setState({logged_in:false, login_child: "", password_child:"", type_child:""});
    ls.set('type', this.state.type_child);
    ls.set('password', this.state.password);
  }

handleChange = event => {
   event.preventDefault();
   this.setState ({
    login_child: event.target.value,
   });
 }

 handleChange2 = event => {
  event.preventDefault();
  this.setState ({
   password_child: event.target.value
  });
}

handleChange3 = event => {
  //event.preventDefault();
  this.setState ({
   type_child: "doc"}, this.sendToParent);
  };


handleChange4 = event => {
  //event.preventDefault();
  this.setState ({
   type_child: "mla"}, this.sendToParent);
}

 sendToParent = () => {
  //here calling Parents changeValue
  //this.setState({logged_in:true});
  this.props.getChildInputOnSubmit(this.state.login_child, this.state.password_child, this.state.type_child);
};

logIn = () => {
  this.setState({logged_in:true});
}

logOut = () => {
  this.setState({logged_in:false, login_child: "", password_child:"", type_child:""});
  this.props.getChildInputOnSubmit(this.state.type_child);
}


  render() {
  return (
    <div className="Login">
      {this.state.logged_in == false ? 
      <form  onSubmit={this.sendToParent}>
      <div className="form-inner">
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <input 
          type="text" 
          id="login" 
          placeholder="E-Mail"
          onBlur={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor = "password">Password</label>
          <input 
          type="password" 
          id="password" 
          placeholder="Password" 
          onBlur={this.handleChange2}/>
        </div>
        <div className="form-group">
          <div className="checkbox">
          <div>
          <input type="checkbox" id="doc" name="doc" value="doc" onBlur={this.handleChange3}
          />
          <label htmlFor="scales">Doc</label>
          </div>
          <div>
          <input type="checkbox" id="mla" name="mla" onBlur={this.handleChange4}
          />
          <label htmlFor="scales">MLA</label>
          </div>
          </div>
        </div>
        <button id ="loginButton"  type='submit' onClick={this.logIn}>Login</button>
      </div>
        <Persist
        name="login-form"
        data={this.state}
        debounce={500}
        onMount={data=>this.setState(data)}
        />
    </form>
    :
    <form action='#' onSubmit={this.logOut}>
    <button id ="logoutButton"  type='submit' >Logout</button>
    </form>
    }
      
    </div>
  );

}
}
export default Login


/*
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return login.length > 0 && password.length >0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  // handle button click of login form
  const history = useHistory();
  const handleLogin = () => {
    history.pushState("/participants");
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label id="labelLogin">E-Mail</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <Form.Label id="labelLogin">Passwort</Form.Label>
          <Form.Control
            autoFocus
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group >
        {['checkbox'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check inline label="MLA" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="Doc" type={type} id={`inline-${type}-2`} />
          </div>
        ))}
        </Form.Group>
        <Button id = "loginButton" block size="lg" type="submit" onClick={handleLogin} disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
  
}

*/

/*
<div className="form-group">
  <div className="checkbox">
  <div>
  <input type="checkbox" id="doc" name="doc" value="doc" onChange={this.handleChange3}
  />
  <label htmlFfor="scales">Doc</label>
  </div>
  <div>
  <input type="checkbox" id="mla" name="mla" onChange={this.handleChange4}
  />
  <label htmlFor="scales">MLA</label>
  </div>
  </div>
</div>
          */