import React, { Component } from 'react';

class MotivationsEditor extends Component {
  constructor(props) {
    super(props);

    this.state={
      content: this.props.motivation.content,
      author: this.props.motivation.author
    };
  }

  onContentChange(event) {
    this.setState({ content: event.target.value });
  }

  onAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  onButtonSave() {
    console.log(`content: ${this.state.content}`);
    console.log(`author: ${this.state.author}`);

    Meteor.call('motivations.update', this.props.motivation, this.state.content, this.state.author);
  }
  
  render() {
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
        </span>
      </div>
    );
  }
}

export default MotivationsEditor;