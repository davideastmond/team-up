import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor()
  {
    super();
    this.state =
    {
      data: null
    }
    this.server = "http://localhost:8080"
  }


  makeTestCall = async (e) =>
  {
    e.preventDefault();
    const value = e.target[0].value;
    const response = await axios.post(`${this.server}/test`, { value });
    this.setState({ data: response.data.express })
  }

  render() {
    return (
      <div className="App">
        <div>
          <form onSubmit={ this.makeTestCall }>
            <input type="text" name="value" />
            <input type="submit" />
          </form>
        </div>
        <div>
          { this.state.data }
        </div>
      </div>
    );
  }
}

export default App;
