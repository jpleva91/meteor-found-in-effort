import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Motivations } from '../../../imports/collections/motivations';
import MotivationsEditor from './motivations_editor';

class MotivationViewer extends Component {
  render() {
    if(!this.props.motivation) { return <div>Loading...</div>};
    
    return (
      <div>
        <MotivationsEditor motivation={this.props.motivation} />
      </div>
    );
  }
}

export default createContainer((props) => {
  const { motivationId } = props.params;
  Meteor.subscribe('motivations');

  return { motivation: Motivations.findOne(motivationId) };
}, MotivationViewer);