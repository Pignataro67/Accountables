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
      tasks: [],
      workSessions: [],
      currentSession: [],
      currentTasks: []
      }
    }

    componentDidMount(){

      fetch("http://localhost:3001/work_sessions")
      .then(res => res.json())
      .then(data => filterWorkSessions(data))
  
      const filterWorkSessions = (data) => {
        let sessions = data.filter( item => {
          return item.user_id === this.state.user.id
        })
  
        this.setState({
          ...this.state,
          workSessions: sessions
        }, ()=> {getCurrentSession()})
      }
  
      const getCurrentSession = () => {
        if (this.state.currentSession.length === 0) {
          const lastSession = this.state.workSessions[this.state.workSessions.length - 1]
          if (lastSession.start_time === ""){
            const sessions = this.state.workSessions.filter(session => session !== lastSession)  
          this.setState({
            ...this.state,
            currentSession: wsData
          })
        })
      }
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