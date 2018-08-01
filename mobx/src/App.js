import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  @observable count = 0;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          Counter {this.props.store.count} <br />
          <button onClick={this.handleInc}> + </button>
          <button onClick={this.handleDec}> - </button>
        </div>
      </div>
    );
  }
}

export default App;
