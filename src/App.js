import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form'


class App extends Component {
  render() {
    return (
      <div>
        <h3>Report a problem with your delivery</h3>
        <Form />
      </div>
    );
  }
}

export default App;
