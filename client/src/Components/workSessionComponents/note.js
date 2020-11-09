import React, { Component, Fragment } from 'react';

class Note extends Component {
  
  renderNote = () => {
    return this.props.submitable ? <input type="submit" value="Submit" onClick={(e)=> this.props.submitWS(e)}/> : null
  }

  render() {
    return (
      <Fragment>
        <form className="Note">
          <textarea>

          </textarea>
          {this.renderNote()}
        </form>
      </Fragment>
    )
  }
}

export default Note;