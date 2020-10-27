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
      let pausation = false;
      const toggle = (pausation) => {
        console.log("clicked")
       if (pausation === false) {
           pausation = true;
        } else {
          pausation = false;}
      };

      return (
        <ReactCountdownClock
        seconds={60 * minutes}
          color="#232323"
          alpha={0.5}
          size={150}
          onComplete={this.myCallback}
          paused={pausation}
          weight={20}
          onClick={()=> toggle(pausation)}
        />
      );
    }
  }

  export default Timer;