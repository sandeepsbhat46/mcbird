import React from 'react';
import Data from './Data';
import fire from './firebase';

class Welcome extends React.Component {

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>You Are Logged In</h1>
        <Data />
        <button onClick = {this.logout}>Logout</button>
      </div>
    )
  }
}

export default Welcome;