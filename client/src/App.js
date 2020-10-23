import React, { Component } from 'react';
import './App.css';
import UserHomepage from './Components/userHomepage';
import Timer from './Components/timer';

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        name: "",
        id: 1
      },
      tasks: [
        {
          title:"Do some weird stuff",
          status: "open",
          workSessions: ""
        }
      ],
      workSessions: []
      }
    }

render() {
  return (
      <div className="App">
        <UserHomepage />
      </div>
    );
  }
}

export default App;