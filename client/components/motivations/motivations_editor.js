import React, { Component } from 'react';

class MotivationsEditor extends Component {
  onContentChange(content) {
    console.log(content);
  }

  onAuthorChange(content) {
    console.log(content);
  }
  
  render() {
    return (
      <div className="form-group col-xs-8">
        <div>
          <label>Content</label>
          <textarea className="form-control" rows="5" id="content"></textarea>
          <label>Author</label>
          <textarea className="form-control" rows="2" id="author"></textarea>
        </div>
        <span>
          <button className="btn btn-space btn-success">Save</button>
        </span>
      </div>
    );
  }
}

export default MotivationsEditor;