import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      username: "",
      password: ""
    }
  }

  usernameInput(usernameValue){
    this.setState({
      username: usernameValue
    })
  }

  passwordInput(passwordValue){
    this.setState({
      password: passwordValue
    })
  }

  submit(){
    let config = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post('http://localhost:3005/login', config)
    .then((config)=> config)
    .catch((err)=> err);
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <p className="login">Username</p>
          <input onChange={(e)=> {this.usernameInput(e.target.value)}}></input>
        </div>
        <div>
          <p className="login">Password</p>
          <input onChange={(e)=> {this.passwordInput(e.target.value)}}></input>
        </div>
        <button onClick={()=> this.submit()}>Submit</button>
      </div>
    );
  }
}

export default App;
