import React, { Component } from 'react';
import ReactCountdownClock from "react-countdown-clock";

  class Timer extends Component {

    constructor() {
      super()
      this.state = {
      pausation: true,
      class: "stop-button",
      firstClick: false,
      isAStopButton: false
      }
    }

    startTime = () => {
      console.log("TimeStamp")
      this.setState({
        pausation: false,
        isAStopButton: true
      })
      this.props.beginTimer()
  
      // create checkboxes
      // create notebox
    };

    wrapUpSession = () => {
      this.setState({
        pausation: true,
        class: "stop-button hidden"
      })
    };

    startTime = () => {
      this.setState({
        pausation: false,
        stopped: true
      }) 

    this.props.beginTimer()
    };

    render() {
      const minutes = 1;

      return (
        <div className="timer">
        <ReactCountdownClock
        seconds={60 * minutes}
          color="#232323"
          alpha={0.5}
          size={150}
          onComplete={()=> this.wrapUpSession()}
          paused = {this.state.pausation}
          weight={20}
        />
        
              <div className="timer-btn">
              {!this.state.pausation ? (
              <button className="start-button" onClick={() => this.startTime()} >Start</button>) :

              (<button onClick={()=> this.wrapUpSession()} 
              className={this.state.class}>StoP</button>)
            }
            </div>
          </div>
      );
    }
  }

  export default Timer;