import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Motivations } from '../../../imports/collections/motivations';
import ReactJson from 'react-json-view';
 
class ApiMotivations extends Component {
  render() {
    const motivations = this.props.motivations;

    return (
      <ReactJson src={motivations} />
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('motivations');

  return { motivations: Motivations.find({}).fetch() };
}, ApiMotivations);