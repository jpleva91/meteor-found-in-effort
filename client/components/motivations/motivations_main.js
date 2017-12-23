import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Motivations } from '../../../imports/collections/motivations';
import MotivationsList from './motivations_list';

class MotivationsMain extends Component {
  render() {
    return (
      <div>
        <h1>MotivationsMain</h1>
        <MotivationsList />
      </div>
    );
  }
}

export default MotivationsMain;