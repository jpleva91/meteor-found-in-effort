import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Motivations } from '../../../imports/collections/motivations';
import { Link } from 'react-router';

class MotivationsList extends Component {
  onMotivationRemove(motivation) {
    Meteor.call('motivations.remove', motivation);
  }

  renderList() {
    return this.props.motivations.map(motivation => {
      const url = `/motivations/${motivation._id}`;
      const motivationOfTheDay = motivation.createdAt.toString();

      return (
        <li className="list-group-item" key={motivation._id}>
          <Link to={url}>Motivation of the Day for {motivationOfTheDay}</Link>
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