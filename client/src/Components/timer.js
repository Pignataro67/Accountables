import React, { Component } from 'react';
import ReactCountdownClock from "react-countdown-clock";

  class Timer extends Component {

    myCallback = () => {
      return "Done";
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
        />
      );
    }
  }

  export default Timer;