import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOuput';

class App extends Component {
  state = {
    username: 'superdom'
  };

  usernameChangeHandler = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserOutput userName={this.state.username} />

        <UserOutput userName={this.state.username} />

        <UserOutput userName={this.state.username} />

        <UserOutput userName="Ezra" />
        <UserInput
          changed={this.usernameChangeHandler}
          currentName={this.state.username}
        />
      </div>
    );
  }
}

export default App;
