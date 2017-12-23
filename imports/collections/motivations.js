import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'motivations.insert': function() {
    return Motivations.insert({
      createdAt: new Date(),
      content: '',
      author: ''
    });
  },

  'motivations.remove': function(motivation) {
    return Motivations.remove(motivation);
  },

  'motivations.update': function(motivation, content, author) {
    return Motivations.update(motivation._id, { $set: { content, author } });
  }
});

export const Motivations = new Mongo.Collection('motivations');