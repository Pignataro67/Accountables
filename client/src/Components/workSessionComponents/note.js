import React, { Component, Fragment } from 'react';

class Note extends Component {
  
  renderNote = () => {
    return this.props.submitable ? <input type="submit" value="Submit" onClick={(e)=> this.props.submitWS(e)}/> : null
  }
  
  return (
    <Fragment>
        <form>
          <textarea>

          </textarea>
        </form>
    </Fragment>
  )
}

export default note;