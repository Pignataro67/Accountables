import React, { Component } from 'react';
import TaskList from './taskList';
import CalendarTracker from './calendar';
import Timer from './timer';
import WorkSession from './workSession';

class UserHomepage extends Component {

  constructor() {
    super()
    this.state = {
      allSessions: []
    }
  }

  renderNote = () => {
    return this.props.working ? <Note submitable={this.props.submitable} submitWS={this.props.submitWorkSession}/> : null
  }

  render() {
    return (
      <Fragment >
      <Timer beginTimer={this.props.beginTimer} completeTimer={this.props.completeTimer}/>
      <TaskList tasks={this.props.appState.currentTasks} addATask={this.props.addATask} deleteTask={this.props.deleteTask} working={this.props.working} toggleCheckbox={this.props.toggleCheckbox}/>
      {this.renderNote()}
      {/* <CalendarTracker /> */}
    </Fragment>
    )
  }
}

export default UserHomepage;