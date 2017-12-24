import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Motivations } from '../../../imports/collections/motivations';
import { Link } from 'react-router';

class MotivationsList extends Component {
  onMotivationRemove(motivation) {
    Meteor.call('motivations.remove', motivation);
  }

  renderList() {
    return this.props.motivations.reverse().map(motivation => {
      const url = `/motivations/${motivation._id}`;
      const motivationOfTheDay = motivation.createdAt.toString().substring(0,16);

      return (
        <li className="list-group-item" key={motivation._id}>
          <Link to={url}>{motivationOfTheDay} by {motivation.author}</Link>
          <span className="pull-right">
            <button
              className="btn btn-danger"
              onClick={() => this.onMotivationRemove(motivation)}>
              Remove
            </button>
          </span>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

export default  createContainer(() => {
  Meteor.subscribe('motivations');

  return { motivations: Motivations.find({}).fetch() };
}, MotivationsList);