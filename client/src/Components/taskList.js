import React from 'react';

const TaskList  = props => {

  const displayTasks = () => {
    return props.tasks.map((task, idx) => {
      return <li key={idx}>{task.title}</li>
    });
  }

    return (
      <div className="">
      <form>
        <input type="text" name="taskInput" />
        <input type="submit" value="Add"/>
      </form>
      <ul>
        {addTasks()}
      </ul>
      </div>
    )
}

export default TaskList;