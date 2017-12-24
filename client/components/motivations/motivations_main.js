import React, { Component } from 'react';
import { Motivations } from '../../../imports/collections/motivations';
import MotivationsList from './motivations_list';
import { browserHistory } from 'react-router/lib';

class MotivationsMain extends Component {
  onMotivationClick(event) {
    event.preventDefault();

    Meteor.call('motivations.insert', (error, motivationId) => {
      browserHistory.push(`/motivations/${motivationId}`);
    });
  }

  render() {
    return (
      <div>
        <h1>MotivationsMain</h1>
        <a href="#" onClick={this.onMotivationClick.bind(this)}>Create Motivation</a>
        <MotivationsList />
      </div>
    );
  }
}

export default MotivationsMain;