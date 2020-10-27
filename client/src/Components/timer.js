import React, { Component } from 'react';
import ReactCountdownClock from "react-countdown-clock";

  class Timer extends Component {

    constructor() {
      super()
      this.state = {
      allSessions: [],
      pausation: false
      }
    }

    myCallback = () => {
      return "Done";
    };

    toggle = (pausation) => {
      this.setState({
        pausation: !this.state.pausation
      })
    };

    render() {
      const minutes = 20;

      return (
        <ReactCountdownClock
        seconds={60 * minutes}
          color="#232323"
          alpha={0.5}
          size={150}
          onComplete={this.myCallback}
          paused= {this.state.pausation}
          weight={20}
          onClick={()=> toggle(pausation)}
        />
          <div>

          </div>
            <div className="timer-btn">
            {this.state.pausation ? (
            <button className="start-button" onClick={() =>this.toggle()} >Start</button>):

            (<button onClick={()=> this.toggle()} 
            className="pause-button">Pause</button>)
          }
        </div>
      );
    }
  }

  export default Timer;