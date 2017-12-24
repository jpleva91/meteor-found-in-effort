import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Motivations } from '../../../imports/collections/motivations';

class MotivationViewer extends Component {
  render() {
    if(!this.props.motivation) { return <div>Loading...</div>};
    
    return (
      <div>
        MotivationViewer
      </div>
    );
  }
}

export default createContainer((props) => {
  const { motivationId } = props.params;
  Meteor.subscribe('motivations');

  return { motivation: Motivations.findOne(motivationId) };
}, MotivationViewer);