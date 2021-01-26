import React, { Component } from 'react';
import fire from './component/firebase'

import Welcome from './component/Welcome';
import SignIn from './component/SignIn';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.user ? ( <Welcome /> ) : ( <SignIn /> ) }
      </div>
    );
  }
}

export default App;