import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Motivations } from '../../../imports/collections/motivations';
import { Link } from 'react-router';

class MotivationsList extends Component {
  render() {
    return (
      <div>
        Motivations List
      </div>
    );
  }
}

export default MotivationsList;