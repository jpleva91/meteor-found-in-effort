import React, { Component } from 'react';

class MotivationsEditor extends Component {
  constructor(props) {
    super(props);

    this.state={
      content: this.props.motivation.content,
      author: this.props.motivation.author,
      saved: false,
      deleted: false
    };
  }

  onContentChange(event) {
    this.setState({ 
      content: event.target.value,
      saved: false
    });
  }

  onAuthorChange(event) {
    this.setState({ 
      author: event.target.value,
      saved: false
    });
  }

  onButtonSave() {
    Meteor.call(
      'motivations.update',
      this.props.motivation,
      this.state.content,
      this.state.author
    );

    this.setState({ saved: true });
  }

  onButtonRemove() {
    Meteor.call('motivations.remove', this.props.motivation);

    this.setState({ deleted: true });
  }
  
  render() {
    if(this.state.saved) { return <div className="alert alert-success"><strong>Saved!</strong></div> };
    if(this.state.deleted) { return <div className="alert alert-danger"><strong>Deleted</strong></div> };

    return (
      <div className="form-group col-xs-8">
        <div>
          <label>Content</label>
          <textarea 
            value={this.state.content}
            onChange={this.onContentChange.bind(this)}
            className="form-control" 
            rows="5" 
            id="content">
          </textarea>
          <label>Author</label>
          <textarea
            value={this.state.author}
            onChange={this.onAuthorChange.bind(this)} 
            className="form-control" 
            rows="1" 
            id="author">
          </textarea>
        </div>
        <span>
          <button 
            onClick={this.onButtonSave.bind(this)}
            className="btn btn-space btn-success">
              Save
          </button>
          <button
            onClick={this.onButtonRemove.bind(this)}
            className="btn btn-space btn-danger">
              Remove
          </button>
        </span>
      </div>
    );
  }
}

export default MotivationsEditor;