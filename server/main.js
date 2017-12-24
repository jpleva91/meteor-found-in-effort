import { Meteor } from 'meteor/meteor';
import { Motivations } from '../imports/collections/motivations';

Meteor.startup(() => {
  Meteor.publish('motivations', function() {
    return Motivations.find({});
  });
});